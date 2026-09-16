import {conexao} from '../conexao.js'


async function buscarLimiteCredito(){
  console.log('DAO de LimiteDeCredito')
    const sql = `SELECT * FROM LimiteDeCredito;`
    
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



export {buscarLimiteCredito}
