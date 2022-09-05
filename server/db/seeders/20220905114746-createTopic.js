module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Topics', [{
      name_topic: 'А как это по-русски?',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name_topic: 'Фразы из фильмов',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name_topic: 'Странные законы мира',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name_topic: 'Люди',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name_topic: 'Всего и побольше',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Topics', null, {});
  },
};
