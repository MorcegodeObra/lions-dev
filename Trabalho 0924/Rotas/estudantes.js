const express = require('express');
const router = express.Router();

const atualizarEstudante = require('../Estudantes/atualizarEstudante')
const criarEstudante = require('../Estudantes/criarEstudante')
const deletarEstudante = require('../Estudantes/deletarEstudante')
const listarEstudante = require('../Estudantes/listarEstudante')

router.put('/:id',atualizarEstudante)
router.post('/',criarEstudante)
router.delete('/:id',deletarEstudante)
router.get('/',listarEstudante)

module.exports = router