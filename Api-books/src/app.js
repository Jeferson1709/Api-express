import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import livro from "./models/Livro.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("Conexão com o banco feita com sucesso!");

});

const app = express();

// middleware
app.use(express.json());


app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js");

});


app.get("/livros", async(req, res) => {
  const listaLivros = await livro.find({});
  res.status(200).json(listaLivros);
});


// Ação variável
app.get("/livros/:id", (req, res) => {
  //Pegando o parâmetro 
  const index = buscarLivro(req.params.id);
  res.status(200).json(livros[index]);
});


app.post("/livros", (req, res) => {
  livros.push(req.body);
  //Enviando um objeto e 201 created
  res.status(201).send("Livro Cadastrado com Sucesso");
});

app.put("/livros/:id", (req, res) => {
  const index = buscarLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
  const index = buscarLivro(req.params.id);
  livros.splice(index, 1);
  res.status(200).send("Livro Removido com sucesso!");
});


export default app;
