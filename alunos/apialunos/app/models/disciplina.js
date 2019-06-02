var mongoose = require('mongoose');

module.exports = function () {
    var schema = mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        professor: {
            type: String,
            required: true
        },
        cargaHoraria: {
            type: Number,
            required: true,
            min: 20,
            max: 80,
            index: {
                unique: true
            }
        }

    });
    return mongoose.model('Disciplina', schema);
}