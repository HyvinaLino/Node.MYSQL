// importando a dependência express
const express = require("express");

const Products = require('./models/Products');
// constante app que recebe um valor
const app = express();
// preparando a aplicação para receber o json
app.use(express.json());

// rota do tipo get(listar)
app.get("/products", async (req, res) => {

    await Products.findAll({
        attributes: ['id', 'name', 'price'], 
        order: [['id', 'DESC']]})
    .then((products) => {
        return res.json({
            erro: false,
           products
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Nenhum produto encontrado!"
        });
    });    
});

// rota do tipo get(listar)
app.get("/product/:id", async (req, res) => {
    const { id } = req.params;

    //await User.findAll({ where: { id: id } })
    await products.findByPk(id)
    .then((product) => {
        return res.json({
            erro: false,
           product: product
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Nenhum produto encontrado!"
        });
    });
});

// rota do tipo post(cadastrar)
app.post("/product", async (req, res) => {
    const { name, email } = req.body;   

    await Products.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Produto cadastrado com sucesso!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: produto não cadastrado com sucesso!"
        });
    });    
});

// rota do tipo put(editar)
app.put("/product", async (req, res) => {
    const { id } = req.body;  
    
    await Products.update(req.body, {where: {id}})
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Produto editado com sucesso!"
        });

    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Produto não editado com sucesso!"
        });
    });
});

// rota do tipo delete(deletar)
app.delete("/product/:id", async (req, res) => {
    const { id } = req.params;    

    await Products.destroy({ where: {id}})
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Produto apagado com sucesso!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Produto não apgado com sucesso!"
        });
    });
});

// rodar na porta 8080
// retornar uma frase caso consiga rodar com sucesso
app.listen(8080, () => {
  //inicializar o servidor e apresentar uma mensagem
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});