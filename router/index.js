const express = require('express')
const db = require('../data/db.js')
const router = express.Router()

// find
router.get('/', (req, res) => {
    db.find()
      .then( _res => {
          res.status(200).json(_res)
      })
      .catch(err => {
          res.status(500).json({ error: "The posts informaiton could not be retrieved" })
      })
})

// findbyid
router.get('/:id', (req, res) => {
    db.findById(req.params.id)
      .then( _res => {
          if(!_res) {
              res.status(404).json({ message: "The post with the specified ID does not exist" })
          } else {
              res.status(200).json(_res)
          }
      })
})

// insert
router.post('/', (req, res) => {
    db.insert(req.body)
      .then(_res => {
          res.status(201).json(_res)
      })
      .catch(err => {
          res.status(500).json({ error: "There was an error while saving the comment to the database" })
      })
})

// update
router.put('/:id', (req, res) => {
    db.update(req.params.id, req.body)
      .then(_res => {
          res.status(200).json(_res)
      })
      .catch(err => {
          res.status(500).json({ error: "The post information could not be modified" })
      })
})

// remove
router.delete('/:id', (req, res) => {
    db.remove(req.params.id)
      .then(_res => {
          res.status(204).end() // You can't return the deleted post in 204 response in insomnia, otherwise .json(_res)
      })
      .catch(err => {
          res.status(500).json({ error: "The post could not be removed" })
      })
})

// findpostomments
router.get('/:id/comments', (req, res) => {
    db.findPostComments(req.params.id)
      .then(_res => {
        if (!_res) {
            res.status(404).json({ message: "The post with the specified ID doesnot exist" })
        } else {
            res.status(200).json(_res)
        }
      })
      .catch(err => {
          res.status(500).json({ error: "The comment informaton could not be retrieved" })
      })
})

// findcommentbyid
router.get('/:id/comments', (req, res) => {
    db.findCommentById(req.params.id)
      .then(_res => {
        if (!_res) {
            res.status(404).json({ message: "The comment with the specified ID does not exist" })
        } else {
            res.status(200).json(_res)
        }
      })
      .catch(err => {
          res.status(500).json({ error: "The comment information could not be retrieved" })
      })
})

// insertcomment
router.post('/:id/comments', (req, res) => {
    db.insertComment(req.body)
      .then(_res => {
        res.status(201).json(_res)
      })
      .catch(err => {
          res.status(500).json({ error: "There was an error while trying to save to the database" })
      })
})

module.exports = router;