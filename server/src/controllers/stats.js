/* const { sequelize } = require('sequelize'); */
const { Statistic, User } = require('../../db/models');

const getStatistic = async (req, res) => {
  try {
    const stats = await Statistic.findAll({
      include: [{
        model: User,
      }],
      order: [['score', 'DESC']]
    });
    res.json(stats);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getStatistic };
