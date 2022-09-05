'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: "vao",
        email: 'v1a0@af',
        password: 'vnnvj',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "leo",
        email: 'l1a@fS',
        password: 'laoalaooa',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "us",
        email: 'u1s@afaf',
        password: 'iususo',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "kljfdns",
        email: 'gs1dfs2@af',
        password: 'gfds2111',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
