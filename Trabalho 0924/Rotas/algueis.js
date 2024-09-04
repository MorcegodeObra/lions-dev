const express = require('express');
const router = express.Router();

const atualizarAlguel = require('../Alugueis/atualizarAlguel');
const buscarPorData = require('../Alugueis/buscarPorData');
const buscarPorIDEstudante = require('../Alugueis/buscarPorIDEstudante');
const buscarPorIDLivro = require('../Alugueis/buscarPorIDLivro');
const criarAlguel = require('../Alugueis/criarAlguel');
const deletarAlguel = require('../Alugueis/deletarAlguel');
const listarAlguel = require('../Alugueis/listarAlguel');

router.put('/:id',atualizarAlguel);
router.get('/buscarPorData',buscarPorData);
router.get('/buscarPorIDEstudante',buscarPorIDEstudante);
router.get('/buscarPorIDLivro',buscarPorIDLivro);
router.post('/',criarAlguel);
router.delete('/:id',deletarAlguel);
router.get('/',listarAlguel);

module.exports = router