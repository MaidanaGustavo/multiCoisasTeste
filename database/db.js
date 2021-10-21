require('dotenv').config()
const mysql  = require('mysql2/promise');

async function main (){
  const  con =  await mysql.createConnection({
    host : process.env.HOST,
    user : process.env.USER_DB,
    password : process.env.PASSWORD_DB,
    database : process.env.DB_NAME
  })
  return con;
}

async function query(query,values){
  const connect = await main();
  const [rows] = await  connect.execute(query,values);
  return rows;
}

                              
module.exports = {query}