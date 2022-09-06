const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Questions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Topic }) {
      this.belongsTo(Topic, { foreignKey: 'topic_id' });
    }
  }
  Questions.init({
    topic_id: DataTypes.INTEGER,
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
    price: DataTypes.INTEGER,
    hidden: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Questions',
  });
  return Questions;
};
