const express = require('express');
const router = express.Router();

const atualizarEstudante = require('../Estudantes/atualizarEstudante')
const buscarPorCurso = require('../Estudantes/buscarPorCurso')
const buscarPorMatricula = require('../Estudantes/buscarPorMatricula')
const buscarPorNome = require('../Estudantes/buscarPorNome')
const criarEstudante = require('../Estudantes/criarEstudante')
const deletarEstudante = require('../Estudantes/deletarEstudante')
const listarEstudante = require('../Estudantes/listarEstudante')

router.put('/:id',atualizarEstudante)
router.get('/buscarPorCurso',buscarPorCurso)
router.get('/buscarPorMatricula',buscarPorMatricula)
router.get('/buscarPorNome',buscarPorNome)
router.post('/',criarEstudante)
router.delete('/:id',deletarEstudante)
router.get('/',listarEstudante)

module.exports = router