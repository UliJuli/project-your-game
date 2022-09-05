const router = require('express').Router();
const { getQuestion, getAllQuestion } = require('../controllers/question-controller');

router.get('/answer/:id', getQuestion);

router.get('/questions', getAllQuestion);

module.exports = router;
