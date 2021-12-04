const { render } = require('ejs');
const path = require('path');

const mainController = {
    index: (req,res) => {
        res.render('index');
    },
    login: (req,res) => {
        res.render('login');
    },
    productCart: (req,res) => {
        res.render('productCart');
    },
    productDetail: (req,res) => {
        res.render('productDetail');
    },
    register: (req,res) => {
        res.render('register');
    },
    err404: (req,res) => {
        res.status(404).send('404 not found. <br> ¡Houston, we have a problem!');
    }
};

module.exports = mainController;