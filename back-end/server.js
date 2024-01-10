import express from 'express'; 
const port = 5000;
import products from './data/products.js'

const app = express();

app.get('/', (req, res) => {
    res.send('API is running');
});

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    const product = product.find((p) => p._id === req.params.id);
    res.json(product);
});

app.listen(port, () => console.log(`Server running on port ${port}`))