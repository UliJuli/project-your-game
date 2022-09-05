require('dotenv').config();

const { Questions, Topic } = require('./db/models');

async function addTopic(name) {
  try {
    const response = await Topic.create({ name_topic: name });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

// addTopic();

async function addQuestion(name) {
  try {
    const response = await Questions.create({
      topic_id: 1, question: name, answer: 'хорошо', price: 20,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

addQuestion('Как дела');
