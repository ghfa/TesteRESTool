module.exports = function (app) {
    var controller = app.controllers.aluno;

    app.post('/alunos', controller.salvaAluno);
    app.get('/alunos', controller.listaAlunos);
    app.put('/alunos', controller.alteraAluno);
    app.delete('/alunos/:id', controller.removeAluno);
    app.get('/alunos/:id', controller.obtemAluno); 

};