const express = require('express');
const router = express.Router();

const atualizarAlguel = require('../Alugueis/atualizarAlguel');
const criarAlguel = require('../Alugueis/criarAlguel');
const deletarAlguel = require('../Alugueis/deletarAlguel');
const listarAlguel = require('../Alugueis/listarAlguel');

router.put('/:id',atualizarAlguel);
router.post('/',criarAlguel);
router.delete('/:id',deletarAlguel);
router.get('/',listarAlguel);

module.exports = router