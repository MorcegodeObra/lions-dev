const express = require('express');
const router = express.Router();

const criarC = require('./criarC')
const editarC = require('./editarC')
const listarC = require('./listarC')
const deletarC = require('./deletarC')

router.post('/',criarC)
router.put('/:id',editarC)
router.get('/',listarC)
router.delete('/:id',deletarC)

module.exports = router