const { Op } = require('sequelize');
require('dotenv').config();
const { Questions, Topic, Statistic } = require('../../db/models');

const getQuestion = async (req, res) => {
  const { id } = req.params;
  const response = await Questions.findOne({
    where: {
      id,
    },
  });
  res.json(response);
};

const getAllQuestion = async (req, res) => {
  try {
    const response = await Topic.findAll({ include: Questions });
    const resMap = response.map((el) => el.toJSON());
    const res2 = resMap.map((el) => ({ ...el, Questions: el.Questions.sort((a, b) => a.price - b.price) }));
    res.json(res2);
  } catch (error) {
    console.log(error);
  }
};

const updateStatisctic = async (req, res) => {
  const {value} = req.query
  const val = Number(value)
  const { newUser } = req.session;
  const userId = newUser.id;
  try {
    const newStat = await Statistic.increment({ score: val }, { where: {user_id: userId }});
    res.json(newStat);
  } catch (error) {
    console.log(error, 'cant update stats');
  }
};

module.exports = { getQuestion, getAllQuestion, updateStatisctic };
