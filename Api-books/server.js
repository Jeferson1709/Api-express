//Importação do Servidor HTTP
import http from "http";

//Porta onde esse servidor vai rodar.
//Variável com as letras maiúscula para 
// Valores que nunca vão mudar
const PORT = 3000;

const rotas = {
  "/" : "Curso de Express API",
  "/livros" : "Entrei na Rota Livros",
  "/autores" : "Entrei na Rota Autores",
}

//Criando o servidor;
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  res.end(rotas[req.url]);
});

//Conexão do servidor na porta 3000.
server.listen(PORT, () => {
  console.log("Servidor escutando!");
});

