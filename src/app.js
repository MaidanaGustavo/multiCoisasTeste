const express = require('express');
const ProdutoRoute  = require('./routes/ProdutoRoute');
const EstoqueRoute  = require('./routes/EstoqueRoute');
const CategoriaRoute  = require('./routes/CategoriaRoute');
const ClienteRoute  = require('./routes/ClienteRoute');
const VendaRoute = require('./routes/VendaRoute');
const app = express();
app.use(express.json()) ;

app.use(ProdutoRoute);
app.use(EstoqueRoute);
app.use(CategoriaRoute);
app.use(ClienteRoute);
app.use(VendaRoute);


app.listen(4040,()=>console.log('O Servidor está rodando na porta http://localhost:4040'));