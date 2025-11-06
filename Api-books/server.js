import app from "./src/app.js"

const PORT = 3000;

//Conexão do servidor na porta 3000.
app.listen(PORT, () => {
  console.log("Servidor escutando!");
});

