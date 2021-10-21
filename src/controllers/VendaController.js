const VendaRepository = require('../repositories/VendaRepository');
const ClienteRepository = require('../repositories/ClienteRepository');

class VendaController{
  async index(req,res){
    const vendas = await VendaRepository.all();
    return res.status(200).json(vendas);
  }

  async show(req,res){
    const {id} = req.params;
    const venda = await VendaRepository.find(id);
    if(!venda) return res.status(404).json({error : 'Venda nao encontrada !'});
    res.status(200).json(venda);
  }

  async store(req,res){
    const {codigo,valor,dataDeVenda,clienteId} = req.body;
    
    const clienteExists = await ClienteRepository.find(clienteId);
    console.log(clienteExists)
    if(!clienteExists) return res.sendStatus(400);

    const newVenda = await VendaRepository.save({codigo,valor,dataDeVenda,clienteId});

    return res.status(201).json(newVenda);
  }

  async update(req,res){
    const {id} = req.params;
    const {codigo,valor,dataDeVenda,clienteId} = req.body;
    const vendaExists  = await VendaRepository.find(id);
    
    const clienteExists = await ClienteRepository.find(clienteId);

    if(!clienteExists) return res.sendStatus(400);

    if(!vendaExists) return res.status(404).json({error : 'Venda nao encontrada!'});

    
    const updateVenda = await VendaRepository.update(id,{codigo,valor,dataDeVenda,clienteId});

    return res.status(200).json(updateVenda);
  }

  async delete(req,res){
    const {id} = req.params;
    const vendaExists = await VendaRepository.find(id);

    if(!vendaExists) return res.status(404).json({error : 'Venda nao encontrada!'});

   
    await VendaRepository.delete(id);
    
    res.sendStatus(204);

  }
}

module.exports = new VendaController;