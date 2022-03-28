let db = require('../database/models');
const {validationResult} = require('express-validator');

let productsController = {
    crear: function (req, res) {
        db.Category.findAll()
            .then(function (categorias) {
                return res.render('creacionProductos', {
                    categorias
                })

            })

    },
    guardar: async function (req, res) {
        const resultValidation = validationResult(req);
        console.log (resultValidation);
        if (resultValidation.errors.length > 0) {
            const categoriaProducto = await db.Category.findAll()
            return res.render('creacionProductos', {
                errors: resultValidation.mapped(),
                oldData: req.body,
                categorias: categoriaProducto,
            });
        }

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
        db.Product.findByPk(req.params.id, {include: ['categoria']})
            .then(function (producto) {
                console.log(producto)
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