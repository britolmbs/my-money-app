const url = process.env.connectionString ? process.env.connectionString : 'mongodb://localhost/my-money'
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect(url, { useNewUrlParse: true, useUnifiedTopology: true })

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' iformado é menor que o limite mínmo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'"
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'."