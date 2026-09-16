import {conexao} from '../conexao.js'

async function incluirCliente(infos){
    const data = [infos]
    const sql = `INSERT INTO Cliente (codigo, nome, sobreNome, cpf, telefone, id_limite, id_endereco) VALUES ?`
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

export {incluirCliente}
