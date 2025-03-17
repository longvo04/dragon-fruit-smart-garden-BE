const express = require('express');
const User = require('../models/User');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');

/* GET users listing. */
router.get('/', verifyToken, (request, response) => {
  User.find({}).exec()
    .then(users => response.send(users))
    .catch(err  => response.status(500).send(err))
});

router.get('/:id', verifyToken, (request, response) => {
  User.findById(request.params.id).exec()
    .then(user => response.send(user))
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return response.status(404).send('User not found _id: ' + request.params.id);
      }
      return response.status
    })
});

module.exports = router;
