module.exports = function (app) {
    var controller = {};
    var aluno = app.models.aluno;

    controller.salvaAluno = function (req, res) {
        aluno.create(req.body).then(
            function (aluno) {
                res.status(201).json(aluno)
            },
            function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.listaAlunos = function (req, res) {
        aluno.find().exec().then(
            function (alunos) {
                res.status(200).json(alunos);
            },
            function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.alteraAluno = function (req, res) {
        var _id = req.body._id;
        aluno.findByIdAndUpdate(_id, req.body).exec().then(
            function (aluno) {
                res.status(200).json(aluno);
            },
            function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.removeAluno = function (req, res) {
        var _id = req.params.id;
        aluno.remove({
            "_id": _id
        }).exec().then(
            function (aluno) {
                res.status(204).end();
            },
            function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.obtemAluno = function (req, res) {
        var _id = req.params.id;
        aluno.findById(_id).exec().then(
            function (aluno) {
                if (!aluno) {
                    res.status(404).end();
                } else {
                    res.status(200).json(aluno);
                }
            },
            function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    return controller;
}