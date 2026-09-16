import express from 'express'
import { buscarClientes } from './DAO/cliente/buscar_cliente.js'
import { buscarClientesLimite } from './DAO/cliente/buscarClientes_limite.js'
import { buscarProdutos } from './DAO/produto/buscar_produto.js'
import { buscarPedidos } from './DAO/pedido/buscar_pedido.js'
import { buscarPedidoProdutos } from './DAO/pedido_produto/buscar_pedidoProduto.js'
import { buscarLimiteCredito } from './DAO/limiteCredito/buscar_limiteCredito.js'
import { buscarEnderecos } from './DAO/endereco/buscar_endereco.js'
import { incluirCliente } from './DAO/cliente/inserir_cliente.js'



import { inserirEndereco } from './DAO/endereco/inserirEndereco.js'
import { inserirLimite } from './DAO/limiteCredito/inserirLimite.js'
import { inserirPedido } from './DAO/pedido/inserirPedido.js'
import { inserirProduto } from './DAO/produto/inserirProduto.js'
import { inserirPedidoProduto } from './DAO/pedido_produto/inserirPedidoProduto.js'


const app = express()
app.use(express.json())

// Middleware obrigatório para o Express conseguir ler o corpo (body) das requisições em formato JSON
app.use(express.json())

// Rota Base
app.get('/', (req, res) => {
    res.json({ mensagem: 'API de Estacionamento Rodando perfeitamente!' })
})

app.get('/clientes',  async (req, res) => {
     let clientes = await buscarClientes();
     res.json(clientes);
})



app.get('/clienteLimite',  async (req, res) => {
     let clientesLimite = await buscarClientesLimite();
     res.json(clientesLimite);
})


app.get('/produtos',  async (req, res) => {
     let produtos = await buscarProdutos();
     res.json(produtos);
})

app.get('/pedidos',  async (req, res) => {
     let pedidos = await buscarPedidos();
     res.json(pedidos);
})

app.get('/pedido_produtos',  async (req, res) => {
     let pedidoProdutos = await buscarPedidoProdutos();
     res.json(pedidoProdutos);
})

app.get('/limite_credito',  async (req, res) => {
     let limiteCredito = await buscarLimiteCredito();
     res.json(limiteCredito);
})

app.get('/enderecos',  async (req, res) => {
     let enderecos = await buscarEnderecos();
     res.json(enderecos);
})


//POSTS

app.post('/cliente',  async (req, res) => {
     let {codigo, nome , sobreNome, cpf, telefone, id_limite, id_endereco} = req.body;
     let infos = [codigo, nome , sobreNome, cpf, telefone, id_limite, id_endereco]
     let results = await incluirCliente(infos)
     res.json(results);
})

app.post('/inserirEndereco',  async (req, res) => {
     let {id_endereco, logradouro, numero, cep, cidade} = req.body;
     let infos = [id_endereco, logradouro, numero, cep, cidade]
     let results = await inserirEndereco(infos)
     res.json(results);
})

app.post('/InserirLimite ',  async (req, res) => {
     let {id_limite, nome} = req.body;
     let infos = [id_limite, nome]
     let results = await inserirLimite(infos)
     res.json(results);
})

app.post('/inserirPedido',  async (req, res) => {
     let {numero, data_elaboracao , id_cliente} = req.body;
     let infos = [numero, data_elaboracao , id_cliente]
     let results = await inserirPedido(infos)
     res.json(results);
})

app.post('/inserirPedidoProduto',  async (req, res) => {
     let {id_pedido, id_produto} = req.body;
     let infos = [id_pedido, id_produto]
     let results = await inserirPedidoProduto(infos)
     res.json(results);
})

app.post('/inserirProduto',  async (req, res) => {
     let {codigo, nome , descricao, preco} = req.body;
     let infos = [codigo, nome , descricao, preco]
     let results = await inserirProduto(infos)
     res.json(results);
})


// Inicialização do Servidor
app.listen(3000, () => {
  console.log('🚀 Server is running on http://localhost:3000')
})
