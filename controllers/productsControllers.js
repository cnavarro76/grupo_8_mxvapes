const {
    render
} = require('ejs');
const path = require('path');
const fs = require('fs');
const { fileURLToPath } = require('url');

const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const productController = {
// Root - Show all products
    products: (req, res) => {
        res.render('products', {
            products,
            toThousand
        })
    },

// Detail - Detail from one product
    productDetail: (req, res) => {
        let id = req.params.id;
        let product = products.find(product => product.id == id);
        res.render("productDetail", {
            product: products[id - 1],
            toThousand
        })
    },

// Create - Form to create    
    productCreate: (req, res) => {
        res.render('products-create')  
    },

// Create - Method to Store
    productSave: (req, res) => {
    let newProduct = {
        id: products [products.length - 1].id + 1,
        ...req.body,
        imagenes: req.file.filename
    };
    products.push(newProduct);
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
    res.redirect('/products');
        
    },

// Update - Form to edit
    productEdit: (req, res) => {
        let id = req.params.id;
        let productToEdit = products.find(product => product.id == id);
        res.render('products-edit', {productToEdit})  
    },

// Update - Method to Update
    productUpdate: (req, res) => {
        let id = req.params.id;
        let productToEdit = products.find(product => product.id == id)

        productToEdit = {
            id: productToEdit.id,
            ...req.body,
            image: req.file.filename,
        };

        let newProducts = products.map(product => {
            if(product.id == productToEdit.id){
                return product = {...productToEdit};
            }
            return product;
        });

        fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
        products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.redirect('/');
       
    },


// Delete - Delete One product from DB
        productDelete: (req, res) => {
            let id = req.params.id;
            let finalProducts = products.filter(product => product.id != id);
            fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
            products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
            res.redirect('/');
        }
    };

module.exports = productController;