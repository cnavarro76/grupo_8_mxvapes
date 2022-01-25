//const {render} = require('ejs');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');
const path = require('path');
const fs = require('fs');
const User = require('../database/models/User');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
//var hash = bcrypt.hashSync(req.body.contrasenia, salt);

const usersController = {
    register: (req, res) => {
        res.render('register');
    },
    // Create - Metodo para registro de Usuarios
    registerSave: (req, res) => {
            const resultValidation = validationResult(req);
    
            if (resultValidation.errors.length > 0) {
                return res.render('register', {
                    errors: resultValidation.mapped(),
                    oldData: req.body
                });
            }
    
            let userInDB = User.findByField('correoElectronico', req.body.correoElectronico);
    
            if (userInDB) {
                return res.render('register', {
                    errors: {
                        correoElectronico: {
                            msg: 'Este email ya está registrado'
                        }
                    },
                    oldData: req.body
                });
            }
    
            let userToCreate = {
                ...req.body,
                contrasenia: bcryptjs.hashSync(req.body.contrasenia, 10),
                imagenes: req.file.filename
            }
    
            let userCreated = User.create(userToCreate);
    
            return res.redirect('/users/login');
        },
    //     let newUser = {
    //     id: users [users.length - 1].id + 1,
    //     ...req.body,
    //     contrasenia: bcrypt.hashSync(req.body.contrasenia, salt),
    //     tipoUsuario: "Usuario",
    //     imagenes: req.file.filename
    //     };
    //     users.push(newUser);
    //     fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
    //     res.redirect('/login');
    // },

    login: (req, res) => {

        return res.render('login');
    },

    loginProcess: (req, res) => {
        let userToLogin = User.findByField('correoElectronico', req.body.correoElectronico);

        if (userToLogin) {
            let isOkThePassword = bcryptjs.compareSync(req.body.contrasenia, userToLogin.contrasenia);
            if (isOkThePassword) {
                delete userToLogin.contrasenia;
                req.session.userLogged = userToLogin;

                if(req.body.recuerdame){
                    res.cookie('userEmail', req.body.correoElectronico, {maxAge: (1000 *60) *60})
                }

                return res.redirect ('/users/profile');
            }
            return res.render ('login', {
                errors: {
                    correoElectronico: {
                        msg: 'las credenciales son invalidas'
                    }
                },
            });
        } 
        return res.render('login', {
            errors: {
                correoElectronico: {
                    msg: 'No se encuentra este email en nuestra base de datos'
                }
            }
        });
    },

    profile: (req, res) => {
        return res.render('userProfile', {
            user: req.session.userLogged        
        });
    },

    logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	},

    err404: (req, res) => {
       res.render('err404');
         
     },
};
module.exports = usersController;