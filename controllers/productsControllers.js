const {
    render
} = require('ejs');
const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



const productController = {


    productDetail: (req, res) => {
        let id = req.params.id;
        res.render("productDetail", {
            product: products[id - 1]
        })
    },


    products: (req, res) => {
        res.render('products', {
            products
        })
    },


    productEdit: (req, res) => {
        res.render('products-edit')
    },

    productCreate: (req, res) => {
        res.render('products-create')
    },


    productSave: (req, res) => {
        console.log("envio por post");
        res.send(req.body);
        res.redirect('/')
    },


    productPut: (req, res) => {

        res.send(req.body);
        res.redirect('/')
    }

};

module.exports = productController;