const express = require('express');
const router = express.Router();

const criarM = require('./criarM')
const editarM = require('./editarM')
const listarM = require('./listarM')
const deletarM = require('./deletarM')

router.post('/',criarM)
router.put('/:id',editarM)
router.get('/',listarM)
router.delete('/:id',deletarM)

module.exports = router