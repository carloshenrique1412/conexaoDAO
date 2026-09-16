import express from 'express'
import { buscarClientes } from './DAO/cliente/buscar_cliente.js'
import { buscarClientesLimite } from './DAO/cliente/buscarClientes_limite.js'
import { buscarProdutos } from './DAO/produto/buscar_produto.js'
import { buscarPedidos } from './DAO/pedido/buscar_pedido.js'
import { buscarPedidoProdutos } from './DAO/pedido_produto/buscar_pedidoProduto.js'
import { buscarLimiteCredito } from './DAO/limiteCredito/buscar_limiteCredito.js'
import { buscarEnderecos } from './DAO/endereco/buscar_endereco.js'
import { incluirCliente } from './DAO/cliente/inserir_cliente.js'

const app = express()

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

app.post('/cliente',  async (req, res) => {
     let {codigo, nome , sobreNome, cpf, telefone, id_limite, id_endereco} = req.body;
     let infos = [codigo, nome , sobreNome, cpf, telefone, id_limite, id_endereco]
     let results = await incluirCliente(infos)
     res.json(results);
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

// Inicialização do Servidor
app.listen(3000, () => {
  console.log('🚀 Server is running on http://localhost:3000')
})
