const {sequelize} = require('../models')
const {User, Category, Post, Tag, PostTags} = require('../models')
const {verifyHash} = require('../helpers/bcryptjs')
const { signToken } = require('../helpers/jwt')


class Controller {

    // USER
    // User - register
    static async register (req, res, next) {
        try {

            const {email, password, phoneNumber, address} = req.body
            let username

            if(email) username = req.body.username || email.slice(0,email.lastIndexOf('@'))

           const newUser = await User.create({username, email, password, phoneNumber, address})

           res.status(201).json({message: `User with email ${newUser.email} has just been created`})
        } catch (err) {
            next(err)
        }
    }

    // User - login
    static async login (req, res, next) {
        try {
            const {email, password} = req.body

            if(!email) throw ('Email is required')
            if(!password) throw ('Password is required')

            const loginUser = await User.findOne({where: {email}})
            if(!loginUser) throw ('Invalid email/password')

            const isValidPassword = verifyHash(password, loginUser.password)
            if(!isValidPassword) throw ('Invalid email/password')

            const payload = {
                id: loginUser.id
            }

            const access_token = signToken(payload)

            res.status(200).json({access_token})

        } catch (err) {
            next (err)
        }
    }

    // NEWS
    // Public - News - fetch data
    static async fetchNewsPublic (req, res, next) {
        try {
            const news = await Post.findAll({
                order: [['id', 'ASC']],
                include: [
                    User,
                    Category
                ]
            })
            res.status(200).json(news)
        } catch (err) {
            next(err)
        }
    }

    // News - fetch data
    static async fetchNews (req, res, next) {
        try {
            const news = await Post.findAll({
                order: [['id', 'ASC']],
                include: [
                    User,
                    Category,
                    {
                        model: PostTags,
                        include: {
                            model: Tag
                        }
                    }
                ]
            })
            res.status(200).json(news)
        } catch (err) {
            next(err)
        }
    }

    // News - get news by id
    static async getNewsById (req, res, next) {
        try {
            const {newsId} = req.params

            const news = await Post.findByPk(newsId, {
                include: [
                    User,
                    Category,
                    {
                        model: PostTags,
                        include: {
                            model: Tag
                        }
                    }
                ]
            })

            if(!news) throw ('Data not found')

            res.status(200).json(news)
        } catch (err) {
            next(err)
        }
    }


    // News - add news
    static async addNews(req, res, next) {
        const t = await sequelize.transaction();
        try {
            
            const {title, content, imgUrl, tag, categoryId} = req.body
            const authorId = req.userInfo.id
            let slug = ''
            if(title) slug = title.split(" ").join("-").replace(/,/g, "");

            const theSearchedCategory = await Category.findByPk(+categoryId)
          
            if (!theSearchedCategory) throw ('Data not found')
            
            const newNews = await Post.create({
                title,
                slug, 
                content,
                imgUrl,
                categoryId,
                authorId
            }, { transaction: t })

            const [theSearchedTags, created] = await Tag.findOrCreate({
                where: { name: tag },
                defaults: {
                    name: tag
                }, 
                transaction: t 
            }); 
            
            const newPostTag = await PostTags.create({
                PostId: newNews.id,
                TagId: theSearchedTags.id
            }, { transaction: t })

            await t.commit();
            res.status(201).json(newNews)

        } catch(err) {
            await t.rollback();
            next(err)
        }
    }

    // News - edit news
    static async editNews(req, res, next) {
        const t = await sequelize.transaction();
        try {

            const {newsId} = req.params
            const {title, content, imgUrl, tag, categoryId} = req.body
            console.log(req.body)

            const theSearchedNews = await Post.findByPk(newsId)
            if(!theSearchedNews) throw ('Data not found')

            let slug = ''
            if(content) slug = content.split(" ").join("-")

            const editedNews = await Post.update({ 
                title, 
                content,
                slug,
                imgUrl,
                categoryId,
            }, {
                where: {
                  id: theSearchedNews.id
                },
                returning: ['*'],
                transaction: t 
            });

            const [theSearchedTag, created] = await Tag.findOrCreate({
                where: { name: tag },
                defaults: {
                    name: tag
                },
                transaction: t
            }); 
            
            const editedPostTag = await PostTags.update({
                TagId: theSearchedTag.id
            }, {
                where: {
                  PostId: theSearchedNews.id  
                },
                transaction: t
            })
            await t.commit();
            res.status(200).json({message: `Post with id ${theSearchedNews.id} has been edited`})
        } catch(err) {
            await t.rollback();
            next(err)
        }
    }

    // News - delete news
    static async deleteNews(req, res, next) {
        try {
            const {newsId} = req.params
            
            const theSearchedNews = await Post.findByPk(newsId)
            if(!theSearchedNews) throw ('Data not found')

            await Post.destroy({
                where: {
                    id: theSearchedNews.id
                }
            })

            res.status(200).json({message: `Post with id ${theSearchedNews.id} has been deleted`})

        } catch(err) {
            next(err)
        }
    }


    // CATEGORIES
    // Categories - fetch data
    static async fetchCategories (req, res, next) {
        try {
            const categories = await Category.findAll({
                order: [['id', 'ASC']],
            })
            res.status(200).json(categories)
        } catch (err) {
            next(err)
        }
    }

    // Categories - get category by id
    static async getCategoryById (req, res, next) {
        try {
            const {categoryId} = req.params

            const category = await Category.findByPk(categoryId)
            if(!category) throw ('Data not found')

            res.status(200).json(category)
        } catch (err) {
            next(err)
        }
    }


    // Categories - add category
    static async addCategory(req, res, next) {
        const t = await sequelize.transaction();
        try {

            const {name} = req.body

            const newCategory = await Category.create({
                name
            }, { transaction: t })

            await t.commit();
            res.status(201).json(newCategory)

        } catch(err) {
            await t.rollback();
            next(err)
        }
    }

    // Categories - edit category
    static async editCategory(req, res, next) {
        try {

            const {categoryId} = req.params
            const {name} = req.body


            const theSearchedCategory = await Category.findByPk(categoryId)
            if(!theSearchedCategory) throw ('Data not found')

            const editCategory = await Category.update({ 
                name
            }, {
                where: {
                  id: theSearchedCategory.id
                },
                returning: ['*']
            });

            res.status(200).json({message: `Category with id ${theSearchedCategory.id} has been edited`})
        } catch(err) {
            next(err)
        }
    }

    // Categories - delete category
    static async deleteCategory(req, res, next) {
        try {
            const {categoryId} = req.params
            
            const theSearchedCategory = await Category.findByPk(categoryId)
            if(!theSearchedCategory) throw ('Data not found')

            await Category.destroy({
                where: {
                    id: theSearchedCategory.id
                }
            })

            res.status(200).json({message: `Category with id ${theSearchedCategory.id} has been deleted`})

        } catch(err) {
            next(err)
        }
    }


    // TAGS
    // Tag - fetch data
    static async fetchTags(req, res, next) {
        try {
            const tags = await Tag.findAll({
                include: [
                    {
                        model: PostTags,
                        include: {
                            model: Post
                        }
                    }
                ]
            })
            res.status(200).json(tags)
        } catch(err) {
            next(err)
        }
    }


}


module.exports = Controller