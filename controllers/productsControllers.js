const {
    render
} = require('ejs');
const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



const productController = {


    productDetail: (req, res) => {
        res.render("productDetail")
    },


    products: (req, res) => {
        res.render('products', {
            products
        })
    },



};

module.exports = productController;