var mongoose = require('mongoose');

module.exports = function () {
    var schema = mongoose.Schema({
        aluno: {
            type: mongoose.Schema.ObjectId,
            ref: 'Aluno',
            required: true
        },
        disciplina: {
            type:   ,
            ref: 'Disciplina',
            required: true
        },
        faltas: {
            type: Number,
            min: 0,
            max: 20,
            required: true
        },
        n1: {
            type: Number,
            min: 0,
            max: 10,
            required: true
        },
        n2: {
            type: Number,
            min: 0,
            max: 10,
            required: true
        },
        mf: {
            type: Number,
            required: false,
            default: function(v) {
                return v = (this.n1 + this.n2) / 2;
            }
        },
        status: {
            type: String,
            required: false,
            default: function(status) {
                if(this.faltas > 20) {
                    return 'Reprovado por faltas';
                } else if (this.mf < 6) {
                    return 'Reprovado por nota'
                } else {
                    return 'Aprovado';
                }
            }
        },
        created: {
            type: Date,
            default: Date.now
        }

    });
    return mongoose.model('Boletim', schema);
}