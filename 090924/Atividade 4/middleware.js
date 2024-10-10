const {medicos} = require('./dados')
const express = require('express')
const axios = require('axios')

function transformarCepEndereco(req,res,next){
    console.log(req.body)
    const cep = medicos[req.body.numero].cep
    const resposta = axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((res)=>{
        console.log(res)
        req.body.endereco = res.data
});
    console.log(resposta)
    res.send({message: `O Endereço é ${resposta}`})
}
module.exports = transformarCepEndereco