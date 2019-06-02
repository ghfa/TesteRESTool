module.exports = function (app) {
    var controller = app.controllers.disciplina;

    app.post('/disciplinas', controller.salvaDisciplina);
    app.get('/disciplinas', controller.listaDisciplinas);
    app.put('/disciplinas', controller.alteraDisciplina);
    app.delete('/disciplinas/:id', controller.removeDisciplina);
    app.get('/disciplinas/:id', controller.obtemDisciplina); 

};