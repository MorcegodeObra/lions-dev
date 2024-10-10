const express = require('express');
const router = express.Router();

const criarP = require('./criarP');
const editarP = require('./editarP');
const listarP = require('./listarP');
const deletarP = require('./deletarP');

router.post('/',criarP)
router.put('/:id',editarP)
router.get('/',listarP)
router.delete('/:id',deletarP)

module.exports = router