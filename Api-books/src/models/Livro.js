import mongoose from "mongoose";

//Um objeto de configuração do nosso Objeto. 
const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: mongoose.Schema.Types.String, required: true },
    editora: { type: String },
    preco: { type: Number },
    paginas: { type: Number }

}, { versionKey: false });

const livros = mongoose.model("livros", livroSchema);

export default livros;