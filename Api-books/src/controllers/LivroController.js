import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";

class LivroController {
    // Assincrona , static para não precisar instanciar a class.
    static async listarLivros(req, res) {

        try {

            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição...` })
        }
    }

    static async cadastrarLivro(req, res) {
        const novoLivro = req.body;

        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);

            const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } };

            const livroCriado = await livro.create(livroCompleto);
            res.status(200).json({ message: "Criado com sucesso!", livro: livroCriado });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro...` });
        }
    }

    static async listarLivroPorId(req, res) {

        try {
            //Pegando o id do livro 
            const id = req.params.id;
            //Pesquisando o livro pelo id. 
            const livroEncontrado = await livro.findById(id);

            res.status(200).json(livroEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do livro...` })

        }
    }

    static async atualizarLivro(req, res) {

        try {
            //Pegando o id do livro 
            const id = req.params.id;
            //Pesquisando o livro pelo id. 
            await livro.findByIdAndUpdate(id, req.body);

            res.status(200).json({ message: "Livro atualizado!" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualização...` })
        }
    }

    static async excluirLivro(req, res) {

        try {
            //Pegando o id do livro 
            const id = req.params.id;
            //Pesquisando o livro pelo id. 
            await livro.findByIdAndDelete(id);

            res.status(200).json({ message: "Livro excluído com sucesso!" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Livro não encontrado!` })

        }
    }

    static async listarLivrosPorEditora(req, res) {

        const editora = req.query.editora;
        try {
            const listarLivrosPorEditora = await livro.find({ editora: editora });

            res.status(200).json(listarLivrosPorEditora)

        } catch (erro) {
 res.status(500).json({ message: `${erro.message} -Falha na Busca...` })
        }
    }
};

export default LivroController;

