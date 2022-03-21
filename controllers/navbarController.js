let db = require('../database/models');

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
    },


}

module.exports = navbarController;