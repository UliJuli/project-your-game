require('dotenv').config();

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

module.exports = { getQuestion };
