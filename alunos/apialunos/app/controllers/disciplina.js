module.exports=function(app) {
    var controller = {};
    var disciplina = app.models.disciplina;

    controller.salvaDisciplina = function(req, res) {
        disciplina.create(req.body).then(
            function(disciplina) {
                res.status(201).json(disciplina)
            }, function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.listaDisciplinas = function(req, res) {
      disciplina.find().exec().then(
        function(disciplinas) {
            res.status(200).json(disciplinas);
        }, function(erro) {
            console.error(erro);
            res.status(500).json(erro);
          }
      );
    };

    controller.alteraDisciplina = function(req, res) {
        var _id = req.body._id;
        disciplina.findByIdAndUpdate(_id, req.body).exec().then(
            function(disciplina) {
                res.status(200).json(disciplina);
            }, function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

    controller.removeDisciplina = function(req, res) {
        var _id = req.params.id;
        disciplina.remove({"_id": _id}).exec().then(
            function(disciplina) {
                res.status(204).end();
            }, function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

    controller.obtemDisciplina = function(req, res) {
        var _id = req.params.id;
        disciplina.findById(_id).exec().then(
            function(disciplina) {
                if(!disciplina) {
                    res.status(404).end();
                }
                else {
                    res.status(200).json(disciplina);
                }
            }, function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

    return controller;
}