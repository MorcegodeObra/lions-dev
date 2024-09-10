const express = require('express');
const router = express.Router();

const atualizarLivro = require('../Livros/atualizarLivro');
const buscarPorAno = require('../Livros/buscarPorAno');
const buscarPorAutor = require('../Livros/buscarPorAutor');
const buscarPorGenero = require('../Livros/buscarPorGenero');
const buscarPorTitulo = require('../Livros/buscarPorTítulo');
const criarLivro = require('../Livros/criarLivro');
const deletarLivro = require('../Livros/deletarLivro');
const listarLivro = require('../Livros/listarLivro');

router.put('/:id',atualizarLivro);
router.get('/buscarPorAno',buscarPorAno);
router.get('/buscarPorAutor',buscarPorAutor);
router.get('/buscarPorGenero',buscarPorGenero);
router.get('/buscarPorTitulo',buscarPorTitulo);
router.post('/',criarLivro);
router.delete('/:id',deletarLivro);
router.get('/',listarLivro);    

module.exports = router