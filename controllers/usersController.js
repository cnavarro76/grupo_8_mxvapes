let db = require("../database/models");
const bcryptjs = require("bcryptjs");
const {validationResult} = require('express-validator');

let usersController = {
  login: function (req, res) {
    db.User.findAll().then(function (usuarios) {
      return res.render("login");
    });
  },
  register: function (req, res) {
    db.userType.findAll().then(function (tipoUsuario) {
      return res.render("register", { tipoUsuario });
    });
  },

  guardarUsuario: async function (req, res) {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
    const tipoUsuario = await db.userType.findAll()
      return res.render("register", {
        errors: resultValidation.mapped(),
        oldData: req.body,
        tipoUsuario,
      });
    }
    const userInDB = await db.User.findOne({ where: { email: req.body.email } });


    if (userInDB) {
    const tipoUsuario = await db.userType.findAll()
      return res.render("register", {
        errors: {
          email: {
            msg: "Este correo ya está registrado",
          },
        },
        oldData: req.body,
        tipoUsuario,
      });
    }

    db.User.create({
      userName: req.body.userName,
      lastName: req.body.lastName,
      email: req.body.email,
      user_type: req.body.user_type,
      user_pass: bcryptjs.hashSync(req.body.user_pass, 10),
      confirm_pass: bcryptjs.hashSync(req.body.confirm_pass, 10),
      address: req.body.address,
      image: req.file.filename,
    });
    res.redirect("/");
  },
};

module.exports = usersController;
