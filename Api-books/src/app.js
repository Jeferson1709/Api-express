import express from "express";

const app = express();
// mildggware
app.use(express.json());
const livros = [
  {
    id: 1,
    titulo: "O senhor dos Anéis",
  },
  {
    id: 2,
    titulo: "O Hobbit",
  },
];


function buscarLivro(id) {
  return livros.findIndex(livro => {
    return livro.id === Number(id);
  });
}

const livro = { id: 3, titulo: "My Sql na prática" };

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js");

});


app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});


//Acão variável
app.get("/livros/:id", (req, res) => {
  //Pegando o paramentro 
  const index = buscarLivro(req.params.id); +
    res.status(200).json(livros[index]);
});


app.post("/livros", (req, res) => {
  livros.push(req.body);
  //Enviando um objeto e 201 created
  res.status(201).send("Livro Cadastrado com Suceeso");
});

app.put("/livros/:id", (req, res) => {
  const index = buscarLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.status(200).json(livros);
});

app.delete("/livros/:id",(req , res)=>{
  const index = buscarLivro(req.params.id);
  livros.splice(index,1);
  res.status(200).send("Livro Removido com sucesso!");
});


export default app;
  