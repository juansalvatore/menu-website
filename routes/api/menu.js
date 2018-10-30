const express = require('express')
const router = express.Router()

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const keys = require('../../config/keys')
const passport = require('passport')

// Load User model
const MenuItem = require('../../models/Menu')

const validateMenuInput = require('../../validation/menu')

// @route   GET api/menu/test
// @desc    Test user route
// @access  Public
router.get('/test', (req, res) => res.json({ test: 'Users works!' }))

// @route   POST api/menu
// @desc    Creates a new menu item
// @access  Protected (To implement)
router.post('/', (req, res) => {
  // Check for errors in ./validation/register.js
  const { errors, isValid } = validateMenuInput(req.body)
  if (!isValid) {
    return res.status(400).json(errors)
  }

  const newMenuItem = new MenuItem({
    name: req.body.name,
    price: req.body.price,
    amount: req.body.amount,
    description: req.body.description,
  })

  newMenuItem
    .save()
    .then(item => res.json(item))
    .catch(err => res.json(err))
})

// @route   GET api/menu
// @desc    Test user route
// @access  Public
router.get('/', (req, res) => {
  MenuItem.find({}).then(items => {
    res.json(items)
  })
})

// @route   GET api/menu
// @desc    Test user route
// @access  Public
router.get('/:id', (req, res) => {
  MenuItem.findById(req.params.id).then(item => {
    res.json(item)
  })
})

// @route   GET api/menu
// @desc    Test user route
// @access  Public
router.delete('/:id', (req, res) => {
  MenuItem.findById(req.params.id).then(item => {
    item.remove().then(() => res.json({ success: true }))
  })
})

module.exports = router
