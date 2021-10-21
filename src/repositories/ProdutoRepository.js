const db = require('../../database/db');

class ProdutoRepository{

  async  all() {
    const row = await db.query('SELECT * FROM Produto');
    return row;
  }

  async find(id){
    const [row] = await db.query('select * from Produto where id = ?',[id]);
    return row;
  }

  async save({codigo,nome}){
    const {insertId}  = await db.query('INSERT INTO Produto(codigo,nome,dataDeCriacao,dataDeModificacao) VALUES(?,?,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP)',[codigo,nome]);
    const [newProduto] = await db.query('select * from Produto where id = ?',[insertId]);
    return newProduto;
  }


  async update(id,{codigo,nome}){
    const row = await db.query('UPDATE Produto SET codigo =? , nome =?,dataDeModificacao = CURRENT_TIMESTAMP WHERE id = ?',[codigo,nome,id]);
    const [updatedProduto] = await db.query('select * from Produto where id = ?',[id]);
    return updatedProduto;
  }

  async delete(id){
    const row = await db.query('DELETE FROM Produto WHERE id=?',[id]);
    return id;
  }
}

module.exports = new ProdutoRepository;