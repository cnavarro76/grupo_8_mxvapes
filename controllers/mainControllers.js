const {
    render
} = require('ejs');
const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



const mainController = {

    index: (req, res) => {
        let id = req.params.id;
        res.render('index', {
            products
        });
    },
    login: (req, res) => {
        res.render('login');
    },
    productCart: (req, res) => {
        res.render('productCart');
    },
    productDetail: (req, res) => {
        let id = req.params.id;
        res.render('productDetail', {
            product: products[id - 1]
        });
    },
    register: (req, res) => {
        res.render('register');
    },

    editarProducto: (req, res) => {
        res.render('products-edit');
    },

    err404: (req, res) => {
        res.status(404).send('404 not found. <br> ¡Houston, we have a problem!');
    },






};

module.exports = mainController;