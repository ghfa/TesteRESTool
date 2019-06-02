module.exports = function (app) {
    var controller = app.controllers.boletim;

    app.post('/boletins', controller.salvaBoletim);
    app.get('/boletins', controller.listaBoletins);
    app.put('/boletins', controller.alteraBoletim);
    app.delete('/boletins/:id', controller.removeBoletim);
    app.get('/boletins/:id', controller.obtemBoletim);

};