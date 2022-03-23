let db = require('../database/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

let navbarController = {
    kits: function (req, res) {
        db.Product.findAll({
                where: {
                    category: req.params.id
                }
            })
            .then(function (productos) {
                res.render("categorias", {
                    productos
                })
            })
            .catch(error => console.log(error))

    },


    search: function (req, res) {

        let {
            busqueda
        } = req.query;

        db.Product.findAll({
                where: {
                    product_name: {
                        [Op.like]: '%' + busqueda + '%'
                    }
                }
            })
            .then(function (productos) {
                res.render("busqueda", {
                    productos
                })
            })
            .catch(error => console.log(error))

    }
};

module.exports = navbarController;