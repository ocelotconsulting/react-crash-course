const express = require('express')

const router = express.Router()

router.get('/slide-count', require('./slides/slideCount'))
router.get('/slides/:slideNumber', require('./slides/getSlide'))

module.exports = router