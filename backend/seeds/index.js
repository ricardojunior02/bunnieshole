const fs = require('fs');
require('dotenv').config();
const Product = require('../src/model/Product');
const { connect } = require('mongoose');

const connectToDb = () => {
  return connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

const readProducts = (filename) => {
  const promisseCallBack = (resolve, reject) => {
   fs.readFile(filename, (err, data) => {
     if(err) return reject(err);
     const json = JSON.parse(data)
     if(!json) return reject('Erro')
     return resolve(json)
   })
  }
  return new Promise(promisseCallBack);
}

const populateDatabase = async () => {
  await connectToDb();
  const products = await readProducts('Modelos_Produtos.json');

  await Product.insertMany(products);

  process.exit();
}

populateDatabase();