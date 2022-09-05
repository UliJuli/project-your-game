const router = require('express').Router();
const { getQuestion } = require('../controllers/question-controller');

router.get('/answer/:id', getQuestion);

module.exports = router;
