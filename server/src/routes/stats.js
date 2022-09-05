const router = require('express').Router();
const {getStatistic} = require('../controllers/stats')

router.get('/', getStatistic)

module.exports = router;
