let db = require('../database/models');

let productsController = {
    crear: function (req, res) {
        db.Category.findAll()
            .then(function (categorias) {
                return res.render('creacionProductos', {
                    categorias
                })
            })
    },
    guardar: function (req, res) {
        db.Product.create({
            product_name: req.body.nombre,
            category: req.body.categoria,
            product_description: req.body.descripcion,
            price: req.body.precio,
            discount: req.body.descuento,
            image: req.file.filename
        })
        res.redirect('/')
    },
    listado: function (req, res) {
        db.Product.findAll()
            .then(function (productos) {
                res.render("listadoProductos", {
                    productos
                })
            })
    },
    detalle: function (req, res) {
        db.Product.findByPk(req.params.id)
            .then(function (producto) {
                res.render('detalleProducto', {
                    producto
                })
            })
    },
    editar: function (req, res) {
        let pedidoProducto = db.Product.findByPk(req.params.id);
        let pedidoCategoria = db.Category.findAll();

        Promise.all([pedidoProducto, pedidoCategoria])
            .then(function ([producto, categorias]) {
                res.render("editarProducto", {
                    producto: producto,
                    categorias: categorias
                });
            })
    },
    actualizar: function (req, res) {
        db.Product.update({
            product_name: req.body.nombre,
            category: req.body.categoria,
            product_description: req.body.descripcion,
            price: req.body.precio,
            discount: req.body.descuento
        }, {
            where: {
                id: req.params.id
            }
        });
        res.redirect("/products/" + req.params.id)
    },

    kits: function (req, res) {
        db.Product.findAll({
                where: {
                    category: 1
                }
            })
            .then(function (productos) {

                res.render("categorias", {
                    productos
                })

            })
    },





    borrar: function (req, res) {
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect("/products");
    }
}

module.exports = productsController;