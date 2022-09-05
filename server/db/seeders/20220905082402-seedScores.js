"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Statistics",
      [
        {
          user_id: 1,
          score: 1500,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          score: 150,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3,
          score: 1977,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 4,
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
