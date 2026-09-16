import {conexao} from '../conexao.js'

async function inserirPedidoProduto(infos){
    const data = [infos]
    const sql = `INSERT INTO pedido_produto (id_pedido, id_produto) VALUES ?`
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [results] = await conn.query(sql,[data]);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

export {inserirPedidoProduto}
