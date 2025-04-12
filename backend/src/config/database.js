
const path = require('path');
const dotenv = require('dotenv');


dotenv.config({ path: path.resolve(__dirname, '../.env') });

require('dotenv').config({ path: '../.env' });


const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const url = process.env.MONGODB_URI

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})



mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'."
