import {conexao} from '../conexao.js'


async function buscarEnderecos(){
  console.log('DAO de ENDERECO')
    const sql = `SELECT * FROM Endereco;`
    
    const conn = await conexao()
    try {
        // Executar a consulta
        const [rows, fields] = await conn.query(sql);
        await conn.end()
        return rows
      } catch (err) {
        return err.message
      }
}


export {buscarEnderecos}