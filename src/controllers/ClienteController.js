const ClienteRepository = require('../repositories/ClienteRepository');
const calculateAge = require('../utils/calculateAge');

class ClienteController{
  async index(req,res){
    const clientes = await ClienteRepository.all();
    return res.status(200).json(clientes);
  }

  async show(req,res){
    const {id} = req.params;
    const Cliente = await ClienteRepository.find(id);
    if(!Cliente) return res.status(404).json({error : 'Cliente nao encontrado !'});
    res.status(200).json(Cliente);
  }

  async store(req,res){
    const {codigo,nome,dataDeNascimento,email} = req.body;

    if(!nome || !dataDeNascimento) return res.sendStatus(400)

    const clienteYear  = dataDeNascimento.split('-')[0];
    const clienteMonth  = dataDeNascimento.split('-')[1];
    const clienteDay  = dataDeNascimento.split('-')[2];

    const age = calculateAge(clienteYear,clienteMonth,clienteDay);

    
    if(age < 18) return res.sendStatus(400);

    const newCliente = await ClienteRepository.save({codigo,nome,dataDeNascimento,email});

    return res.status(201).json(newCliente);
  }

  async update(req,res){
    const {id} = req.params;
    const {codigo,nome,dataDeNascimento,email} = req.body;
    const clienteExists  = await ClienteRepository.find(id);
    
    if(!clienteExists) return res.status(404).json({error : 'Cliente nao encontrado!'});

    const clienteYear  = dataDeNascimento.split('-')[0];
    const clienteMonth  = dataDeNascimento.split('-')[1];
    const clienteDay  = dataDeNascimento.split('-')[2];

    const age = calculateAge(clienteYear,clienteMonth,clienteDay);

    if(age < 18) return res.sendStatus(400);
    
    const updateCliente = await ClienteRepository.update(id,{codigo,nome,dataDeNascimento,email});

    return res.status(200).json(updateCliente);
  }

  async delete(req,res){
    const {id} = req.params;
    const ClienteExists = await ClienteRepository.find(id);

    if(!ClienteExists) return res.status(404).json({error : 'Cliente nao encontrado!'});

   
    await ClienteRepository.delete(id);
    
    res.sendStatus(204);

  }
}

module.exports = new ClienteController;