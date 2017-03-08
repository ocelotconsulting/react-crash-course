const express = require('express')

const router = express.Router()

router.get('/slide-count', require('./slides/slideCount'))
router.get('/slides/:slideNumber', require('./slides/slide'))

module.exports = router