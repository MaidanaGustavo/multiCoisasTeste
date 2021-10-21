const db = require('../../database/db');

class ClienteRepository{

  async  all() {
    const row = await db.query('SELECT * FROM Cliente');
    return row;
  }

  async find(id){
    const [row] = await db.query('select * from Cliente where id = ?',[id]);
    return row;
  }

  async save({codigo,nome,dataDeNascimento,email}){
    const {insertId}  = await db.query(`INSERT INTO Cliente(codigo,nome,dataDeNascimento,email,dataDeCriacao,dataDeModificacao) VALUES(?,?,?,?,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP)`,[codigo,nome,dataDeNascimento,email]);
    const [newCliente] = await db.query('select * from Cliente where id = ?',[insertId]);
    return newCliente;
  }


  async update(id,{codigo,nome,dataDeNascimento,email}){
    const row = await db.query('UPDATE Cliente SET codigo =? , nome =?, dataDeNascimento = ? , email = ?,  dataDeModificacao = CURRENT_TIMESTAMP WHERE id = ?',[codigo,nome,dataDeNascimento,email,id]);
    const [updatedCliente] = await db.query('select * from Cliente where id = ?',[id]);
    return updatedCliente;
  }

 async delete(id){
    const row = await db.query('DELETE FROM Cliente WHERE id=?',[id]);
    return id;
  }
}

module.exports = new ClienteRepository;