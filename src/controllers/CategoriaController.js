const CategoriaRepository = require('../repositories/CategoriaRepository');
class CategoriaController{
  async index(req,res){
    const categorias = await CategoriaRepository.all();
    return res.status(200).json(categorias);
  }

  async show(req,res){
    const {id} = req.params;
    const categoria = await CategoriaRepository.find(id);
    if(!categoria) return res.status(404).json({error : 'Categoria nao encontrada !'});
    res.status(200).json(categoria);
  }

  async store(req,res){
    const {codigo,nome} = req.body;
    const newcategoria = await CategoriaRepository.save({codigo,nome});
    return res.status(201).json(newcategoria);
  }

  async update(req,res){
    const {id} = req.params;
    const {codigo,nome} = req.body;
    const categoriaExists  = await CategoriaRepository.find(id);
    
    if(!categoriaExists) return res.status(404).json({error : 'Categoria nao encontrada!'});
    const updatecategoria = await CategoriaRepository.update(id,{codigo,nome});

    return res.status(200).json(updatecategoria);
  }

  async delete(req,res){
    const {id} = req.params;
    const categoriaExists = await CategoriaRepository.find(id);

    if(!categoriaExists) return res.status(404).json({error : 'Categoria nao encontrada!'});

   
    await CategoriaRepository.delete(id);
    
    res.sendStatus(204);

  }
}

module.exports = new CategoriaController;