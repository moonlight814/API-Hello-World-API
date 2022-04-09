const express= require ('express')
const languages= express.Router()
const Language = require('..models/language.js') //data

//INDEX
languages.get('/', (req,res) => {
    Languages.find() 
    .then(foundLanguages => {
        res.json(foundLanguages)
    })
})

//SHOW
languages.get('/:name', (req,res) => {
    Language.findOne({name: req.params.name.toLowerCase() })
    .then(foundLanguage => {
        res.json(foundLanguage)
    })
})

module.exports= languages