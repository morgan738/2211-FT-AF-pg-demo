
const express = require('express')
const router = express.Router()

router.use('/pokemon', require('./pokemon'))
router.use('/trainer', require('./trainer'))


module.exports = router