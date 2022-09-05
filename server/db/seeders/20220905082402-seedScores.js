"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Statistics",
      [
        {
          
          score: 1500,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          
          score: 150,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          
          score: 1977,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          
          score: 450,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
