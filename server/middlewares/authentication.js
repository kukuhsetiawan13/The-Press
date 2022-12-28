const {verifyToken} = require('../helpers/jwt')
const {User, Category, Post, Tag, PostTag} = require('../models')


const loginAuthentication = async(req, res, next) => {
    try {
        const {access_token} = req.headers
        if(!access_token) throw('Invalid token')

        const payload = verifyToken(access_token)

        const theSearchedUser = await User.findByPk(payload.id)
        if(!theSearchedUser) throw ('Invalid token')

        req.userInfo = {
            id: theSearchedUser.id,
            role: theSearchedUser.role
        }

        next()
    } catch (err) {
        next(err)
    }
}

const isAdmin = async (req, res, next) => {
    if(req.userInfo.role !== 'Admin') throw ('Forbidden')
    next()
}


const isAuthorizedUser = async (req, res, next) => {
    try {
        if(req.userInfo.role !== 'Admin') throw ('Forbidden')

        const {newsId} = req.params


        const theSearchedNews = await Post.findByPk(newsId)
        if(!theSearchedNews) throw ('Data not found')

        if(theSearchedNews.authorId !== req.userInfo.id) throw ('Forbidden')
        next()
       
    } catch (err) {
        next(err)
    }

}



module.exports = {loginAuthentication, isAdmin, isAuthorizedUser}