const db = require('../../database/db');

class VendaRepository{

  async  all() {
    const row = await db.query('SELECT * FROM Venda');
    return row;
  }

  async find(id){
    const [row] = await db.query('select * from Venda where id = ?',[id]);
    return row;
  }

  async save({codigo,valor,dataDeVenda,clienteId}){
    const {insertId}  = await db.query('INSERT INTO Venda(codigo,valor,dataDeVenda,clienteId,dataDeCriacao,dataDeModificacao) VALUES(?,?,?,?,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP)',[codigo,valor,dataDeVenda,clienteId]);
    const [newVenda] = await db.query('select * from Venda where id = ?',[insertId]);
    return newVenda;
  }


  async update(id,{codigo,valor,dataDeVenda,clienteId}){
    const row = await db.query('UPDATE Venda SET codigo =?,valor =?,dataDeVenda = ?,clienteId =? ,dataDeModificacao = CURRENT_TIMESTAMP WHERE id = ?',[codigo,valor,dataDeVenda,clienteId,id]);
    const [updatedVenda] = await db.query('select * from Venda where id = ?',[id]);
    return updatedVenda;
  }

  async delete(id){
    const row = await db.query('DELETE FROM Venda WHERE id=?',[id]);
    return id;
  }
}

module.exports = new VendaRepository;