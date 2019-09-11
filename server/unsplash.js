const express = require('express')
const request = require('superagent')

const router = express.Router()

router.use(express.json())

// GET /api/v1/unsplash

router.get('/', (req, res) => {
  request
    .get('https://api.unsplash.com/photos/?client_id=99b326dd1d0d52767f889551914b26cc14619b1a4a0fa24ad5e7c06a4f8bade2')
    .end((err, result) => {
      if (err) {
        res.status(500).send(err.message)
      } else {
        res.json(result.body)
      }
    })
})

module.exports = router
