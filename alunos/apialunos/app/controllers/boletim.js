module.exports = function (app) {
    var controller = {};
    var boletim = app.models.boletim;

    controller.salvaBoletim = function (req, res) {
        boletim.create(req.body).then(
            function (boletim) {
                res.status(201).json(boletim)
            },
            function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.listaBoletins = function (req, res) {
        boletim.find().populate('aluno').populate('disciplina').exec().then(
            function (boletins) {
                res.status(200).json(boletins);
            },
            function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.alteraBoletim = function (req, res) {
        var _id = req.body._id;
        boletim.findByIdAndUpdate(_id, req.body).exec().then(
            function (boletim) {
                res.status(200).json(boletim);
            },
            function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.removeBoletim = function (req, res) {
        var _id = req.params.id;
        boletim.remove({"_id": _id}).exec().then(
            function (boletim) {
                res.status(204).end();
            },
            function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.obtemBoletim = function (req, res) {
        var _id = req.params.id;
        boletim.findById(_id).populate('aluno').populate('disciplina').exec().then(
            function (boletim) {
                if (!boletim) {
                    res.status(404).end();
                } else {
                    res.status(200).json(boletim);
                }
            },
            function (erro) {
                console.error(erro);
                res.status.json(erro);
            }
        );
    };

    return controller;
}