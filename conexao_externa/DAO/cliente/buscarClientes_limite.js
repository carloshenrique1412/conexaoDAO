import {conexao} from '../conexao.js'

export async function buscarClientesLimite(){
    console.log('DAO de CLIENTE')
      const sql = `SELECT * FROM vwCliente_limiteCredito`
      
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
  