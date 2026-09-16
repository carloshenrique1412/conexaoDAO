import {conexao} from '../conexao.js'

async function inserirProduto(infos){
    const data = [infos]
    const sql = `INSERT INTO Produto (codigo, nome, descricao, preco) VALUES ?`
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

export {inserirProduto}
