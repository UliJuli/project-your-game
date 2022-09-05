require('dotenv').config();

const { raw } = require('express');
const { Questions, Topic } = require('../../db/models');

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

module.exports = { getQuestion, getAllQuestion };
