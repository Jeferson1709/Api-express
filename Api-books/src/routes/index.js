import express from 'express';
import livros from './LivrosRoutes.js';
import autores from './autoresRoutes.js';
const routes = (app) => {
    app.route("/")
        .get((req, res) =>
            res
                .status(200)
                .send("Curso De Node.js"));

    app.use(express.json(), livros, autores);


}


export default routes;
