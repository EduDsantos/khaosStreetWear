const productRepository = require('../repository/productRepository')

async function getAllProducts() {
    return await productRepository.findAll();
}

async function getById(id) {
    return await productRepository.findById(id);
}



module.exports = {
    getAllProducts,
    getById
};