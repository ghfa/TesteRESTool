var mongoose = require('mongoose');

module.exports = function () {
    var schema = mongoose.Schema({
        ra: {
            type: Number,
            required: true,
            index: {
                unique: true
            }
        },
        nome: {
            type: String,
            required: true
        },
        dataNascimento: {
            type: Date,
            required: true
        },
        email: {
            type: String,
            required: true,
            index: {
                unique: true
            }
        }

    });
    return mongoose.model('Aluno', schema);
}