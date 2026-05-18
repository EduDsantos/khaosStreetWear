const productService = require('../service/productService');

async function getAllProducts(req, res) {
    try{
        const products = await productService.getAllProducts();
        res.json(products);
    } catch(error){
       res.status(500).json({
            message: error.message
        }
       )
    }
    
}

async function getById(req, res) {
    try{
        const id = Number(req.params.id);
        const product = await productService.getById(id);

        if(!product){
            return res.status(404).json( {
                message: 'Produto não encontrado'
            }
         );
        }

        res.json(product);

    } catch(error){
        console.error(error);
        res.status(500).json( 
        {
            message : error.message 
        }

        );
    }
}

module.exports = {
    getAllProducts,
    getById
}