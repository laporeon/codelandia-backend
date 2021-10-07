const PostController = require('../controllers/PostController');
const express = require('express');

const route = express.Router();

route.get('/', PostController.index);
route.post('/create', PostController.create);
route.put('/edit/:_id', PostController.edit);
route.delete('/delete/:_id', PostController.delete);

module.exports = route;
