const db = require('../../database/db');

class EstoqueRepository{

  async  all() {
    const row = await db.query('SELECT * FROM Estoque');
    return row;
  }

  async find(id){
    const [row] = await db.query('select * from Estoque where id = ?',[id]);
    return row;
  }

  async findBy(column,value){
    const [row]  = await db.query(`select * from Estoque where ${column} = ?`,[value]);
    return row;
  }

  async save({produtoId,quantidade,preco}){
    const {insertId}  = await db.query('INSERT INTO Estoque(produtoId,quantidade,preco,dataDeCriacao,dataDeModificacao) VALUES(?,?,?,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP)',[produtoId,quantidade,preco]);
    const [newEstoque] = await db.query('select * from Estoque where id = ?',[insertId]);
    return newEstoque;
  }


  async update(id,{produtoId,quantidade,preco}){
    const row = await db.query('UPDATE Estoque SET produtoId =? , quantidade = ?,preco = ?,dataDeModificacao = CURRENT_TIMESTAMP WHERE id = ?',[produtoId,quantidade,preco,id]);
    const [updatedEstoque] = await db.query('select * from Estoque where id = ?',[id]);
    return updatedEstoque;
  }

  async delete(id){
    const row = await db.query('DELETE FROM Estoque WHERE id=?',[id]);
    return id;
  }
}

module.exports = new EstoqueRepository;