let db = require("../database/models");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");

let usersController = {
  login: function (req, res) {
    db.User.findAll()
      .then(function (usuarios) {
        return res.render("login");
      })
      .catch((error) => console.log(error));
  },

  loginProcess: async function (req, res) {
    const userToLogin = await db.User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (userToLogin) {
      let isOkThePassword = bcryptjs.compareSync(
        req.body.password,
        userToLogin.user_pass
      );
      if (isOkThePassword) {
        delete userToLogin.user_pass;
        req.session.userLogged = userToLogin;

        if (req.body.recuerdame) {
          res.cookie("userEmail", req.body.email, { maxAge: 1000 * 60 * 60 });
        }

        return res.redirect("/users/profile");
      }
      
      return res.render('login', {
				errors: {
					password: {
						msg: 'Contraseña incorrecta'
					}
				}
			});
		}
      return res.render('login', {
        errors: {
          email: {
            msg: 'No se encuentra este email en la base de datos'
          }
        }
      });
  },
     
  register: function (req, res) {
    db.userType
      .findAll()
      .then(function (tipoUsuario) {
        return res.render("register", {
          tipoUsuario,
        });
      })
      .catch((error) => console.log(error));
  },

  logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	},

  profile: function (req, res) {
    db.User.findAll()
      .then(function (user) {
        return res.render("userProfile", {
          user,
        });
      })
      .catch((error) => console.log(error));
  },

  guardarUsuario: async function (req, res) {
    const resultValidation = validationResult(req);
    // console.log(resultValidation);
    if (resultValidation.errors.length > 0) {
      const tipoUsuario = await db.userType.findAll();
      return res.render("register", {
        errors: resultValidation.mapped(),
        oldData: req.body,
        tipoUsuario,
        
      });
    }
    const userInDb = await db.User.findOne({
      where: {
        email: req.body.email,
      },
    });

    // console.log("usuario", userInDb);

    if (userInDb) {
      const tipoUsuario = await db.userType.findAll();
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
console.log(req.body.user_type)
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
