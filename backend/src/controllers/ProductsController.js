const { Types } = require('mongoose');
const Product = require('../model/Product');

class ProductsController {
  async index(req, res){ 
    const { orderBy, sortBy = 1, q} = req.query;

    const query = Product.find();

    if(q){
      const regex = new RegExp(`.*${q}.*`, 'i');
      query.find({$or: [
        {name: regex},
        {type: regex}
      ]})
    }

    if(orderBy){
      query.sort({[orderBy]: Number(sortBy)});
    }

    const queryResult = await query.exec();

    return res.status(200).json(queryResult);
  }
  async store(req, res){
    const data = req.body;

    const product = await Product.create({_id: `${Types.ObjectId()}` , ...data});

    return res.status(200).json(product);
  }
  async update(req, res){
    const { _id } = req.params;
    const data = req.body;

    const product = await Product.findById(_id);

    if(!product){
      return res.status(400).json({ message: 'Produto não existe'})
    }
  
    await product.updateOne(data);

    return res.sendStatus(200);
  }
  async destroy(req, res){
    const { _id } = req.params;

    const product = await Product.findById(_id);

    if(!product){
      return res.status(400).json({ message: 'Produto não existe'})
    }

    await product.delete();

    return res.sendStatus(200);

  }
}


module.exports = new ProductsController();