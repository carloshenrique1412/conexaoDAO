import {conexao} from '../conexao.js'

async function inserirLimite(infos){
    const data = [infos]
    const sql = `INSERT INTO LimiteDeCredito (id_limite, nome) VALUES ?`
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

export {inserirLimite}
