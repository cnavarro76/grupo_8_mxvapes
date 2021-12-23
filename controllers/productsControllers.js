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

        let  productSave = {
            id: req.body.id,
            categoria : req.body.categoria,
            descripcion : req.body.deescripciion,
            precio: req.body.precio,
            descuento: req.body.descuento
        }

        let productRead = fs.readFileSync(productsFilePath, 'utf-8' );
        let productArray; 

        if(productRead == ''){
            productArray = []
        }else{productArray = JSON.parse(productRead);}

        productArray.push(productSave);

        productArray = JSON.stringify(productArray);
        fs.writeFileSync(productsFilePath, productArray );
        
        res.redirect('/');

    },


    productPut: (req, res) => {

        res.send(req.body);
        res.redirect('/')
    }

};

module.exports = productController;