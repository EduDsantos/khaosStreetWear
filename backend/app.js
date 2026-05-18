const express = require('express');
const path = require('path');
const productController = require('./src/controller/productController');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')))

console.log(productController);

app.get('/', (req, res) => {
    res.send('API funcionando')
    }
)

app.get('/products', productController.getAllProducts);
app.get('/products/:id', productController.getById);

app.listen(PORT, () => {
        console.log(`Servidor rodando em http://localhost:${PORT}/products`);
    }
)