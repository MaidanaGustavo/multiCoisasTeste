const EstoqueRepository = require('../repositories/EstoqueRepository');
const ProdutoRepository = require('../repositories/ProdutoRepository');
class EstoqueController{
  async index(req,res){
    const estoques = await EstoqueRepository.all();
    return res.status(200).json(estoques);
  }

  async show(req,res){
    const {id} = req.params;
    const estoque = await EstoqueRepository.find(id);
    if(!estoque) return res.status(404).json({error : 'Estoque nao encontrado !'});
    res.status(200).json(estoque);
  }

  async store(req,res){
    const {produtoId,quantidade,preco} = req.body;
    const produtoExists = await ProdutoRepository.find(produtoId);
    if(!produtoExists) return res.sendStatus(400) 
    const newEstoque = await EstoqueRepository.save({produtoId,quantidade,preco});
    return res.status(201).json(newEstoque);
  }

  async update(req,res){
    const {id} = req.params;
    const {produtoId,quantidade,preco} = req.body;
    const estoqueExists  = await EstoqueRepository.find(id);

    const produtoExists = await ProdutoRepository.find(produtoId);
    if(!produtoExists) return res.sendStatus(400) 
    
    if(!estoqueExists) return res.status(404).json({error : 'Estoque nao encontrado!'});
    const updateEstoque = await EstoqueRepository.update(id,{produtoId,quantidade,preco});
    return res.status(200).json(updateEstoque);
  }

  async delete(req,res){
    const {id} = req.params;
    const estoqueExists = await EstoqueRepository.find(id);

    if(!estoqueExists) return res.status(404).json({error : 'Estoque nao encontrado!'});

   
    await EstoqueRepository.delete(id);
    
    res.sendStatus(204);

  }
}

module.exports = new EstoqueController;