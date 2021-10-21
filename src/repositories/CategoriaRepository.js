const db = require('../../database/db');

class CategoriaRepository{

  async  all() {
    const row = await db.query('SELECT * FROM Categoria');
    return row;
  }

  async find(id){
    const [row] = await db.query('select * from Categoria where id = ?',[id]);
    return row;
  }

  async save({codigo,nome}){
    const {insertId}  = await db.query('INSERT INTO Categoria(codigo,nome,dataDeCriacao,dataDeModificacao) VALUES(?,?,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP)',[codigo,nome]);
    const [newCategoria] = await db.query('select * from Categoria where id = ?',[insertId]);
    return newCategoria;
  }


  async update(id,{codigo,nome}){
    const row = await db.query('UPDATE Categoria SET codigo =? , nome =?,dataDeModificacao = CURRENT_TIMESTAMP WHERE id = ?',[codigo,nome,id]);
    const [updatedCategoria] = await db.query('select * from Categoria where id = ?',[id]);
    return updatedCategoria;
  }

  async delete(id){
    const row = await db.query('DELETE FROM Categoria WHERE id=?',[id]);
    return id;
  }
}

module.exports = new CategoriaRepository;