const router = require('express').Router();
const { getQuestion, getAllQuestion, updateStatisctic} = require('../controllers/question-controller');

router.get('/answer/:id', getQuestion);
router.get('/questions', getAllQuestion);
router.put('/answer/:id', updateStatisctic);

module.exports = router;
