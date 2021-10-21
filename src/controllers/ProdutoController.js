const ProdutoRepository = require('../repositories/ProdutoRepository');
const EstoqueRepository = require('../repositories/EstoqueRepository');
class ProdutoController{
  async index(req,res){
    const produtos = await ProdutoRepository.all();
    return res.status(200).json(produtos);
  }

  async show(req,res){
    const {id} = req.params;
    const produto = await ProdutoRepository.find(id);
    if(!produto) return res.status(404).json({error : 'Produto nao encontrado !'});
    res.status(200).json(produto);
  }

  async store(req,res){
    const {codigo,nome} = req.body;
    
    const newProduto = await ProdutoRepository.save({codigo,nome});
    return res.status(201).json(newProduto);
  }

 async update(req,res){
    const {id} = req.params;
    const {codigo,nome} = req.body;

    const produtoExists  = await ProdutoRepository.find(id);
    
    if(!produtoExists) return res.status(404).json({error : 'Produto nao encontrado!'});
    const updateProduto = await ProdutoRepository.update(id,{codigo,nome});
    return res.status(200).json(updateProduto);
  }

  async delete(req,res){
    const {id} = req.params;
    const produtoExists = await ProdutoRepository.find(id);
    if(!produtoExists) return res.status(404).json({error : 'Produto nao encontrado!'});
    const estoqueExists  = await await EstoqueRepository.findBy('produtoId',id);
    if(estoqueExists) return res.sendStatus(400);
    await ProdutoRepository.delete(id);
    
    res.sendStatus(204);

  }
}

module.exports = new ProdutoController;