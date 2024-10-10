const express = require('express');
const router = express.Router();

const atualizarLivro = require('../Livros/atualizarLivro');
const criarLivro = require('../Livros/criarLivro');
const deletarLivro = require('../Livros/deletarLivro');
const listarLivro = require('../Livros/listarLivro');

router.put('/:id',atualizarLivro);
router.post('/',criarLivro);
router.delete('/:id',deletarLivro);
router.get('/',listarLivro);    

module.exports = router