import express from 'express'
// Importando as funções lógicas do banco de dados (vamos criá-las no passo abaixo)
// import { listarClientes, buscarClientePorId, inserirCliente, atualizarCliente, deletarCliente } from './DAO/clienteDAO.js'
import { buscarClientes } from './DAO/cliente/buscar_cliente.js'

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


// Inicialização do Servidor
app.listen(3000, () => {
  console.log('🚀 Server is running on http://localhost:3000')
})
