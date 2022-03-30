let db = require('../../database/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

let apiController = {
    'productsList': (req, res) => {
        db.Product.findAll()
            .then(products => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: products.length,
                        url: 'api/products'
                    },
                    data: products
                }
                res.json(respuesta);
            })
    },
    'usersList': (req, res) => {
        db.User.findAll()
            .then(products => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: products.length,
                        url: 'api/users'
                    },
                    data: products
                }
                res.json(respuesta);
            })
    },


}

module.exports = apiController;