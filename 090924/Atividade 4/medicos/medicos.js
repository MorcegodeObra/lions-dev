const express = require('express');
const router = express.Router();

const criarM = require('./criarM');
const editarM = require('./editarM');
const listarM = require('./listarM');
const deletarM = require('./deletarM');
const transformarCepEndereco = require('../middleware');

router.post('/',criarM)
router.put('/:id',editarM)
router.get('/',listarM)
router.delete('/:id',deletarM)
router.post('/endereco',transformarCepEndereco,(req,res)=>{
    res.json(req.body)
})

module.exports = router