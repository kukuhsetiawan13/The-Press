'use strict';

const {generateHash} = require('../helpers/bcryptjs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     const users = require('../data/db.json').Authors

      users.forEach(el => {
        delete el.id
        el.password = generateHash(el.password)
        el.role = 'Admin'
        el.createdAt = el.updatedAt = new Date()
      })

      await queryInterface.bulkInsert('Users', users)

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {
      truncate: true,
      cascade: true,
      restartIdentity: true
    })
  }
};
