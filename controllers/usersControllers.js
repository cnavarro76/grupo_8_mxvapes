//const {render} = require('ejs');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');
const User = require('../database/models/User');

const path = require('path');
const fs = require('fs');



const usersController = {
    register: (req, res) => {
        return res.render('register');
    },
    // Create - Metodo para registro de Usuarios
    processRegister: (req, res) => {
            const resultValidation = validationResult(req);
    
            if (resultValidation.errors.length > 0) {
                return res.render('register', {
                    errors: resultValidation.mapped(),
                    oldData: req.body
                });
            }
    
            let userInDB = User.findByField('email', req.body.email);
    
            if (userInDB) {
                return res.render('register', {
                    errors: {
                        email: {
                            msg: 'Este correo ya está registrado'
                        }
                    },
                    oldData: req.body
                });
            }
    
            let userToCreate = {
                ...req.body,
                password: bcryptjs.hashSync(req.body.password, 10),
                image: req.file.filename
            }
    
            let userCreated = User.create(userToCreate);
    
            return res.redirect('/users/login');
        },
   

    login: (req, res) => {

        return res.render('login');
    },

    loginProcess: (req, res) => {
        let userToLogin = User.findByField('email', req.body.email);
		
		if(userToLogin) {
			let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
			if (isOkThePassword) {
				delete userToLogin.password;
				req.session.userLogged = userToLogin;

				if(req.body.recuerdame) {
					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 2 })
				}

				return res.redirect('/users/profile');
			} 
			return res.render('login', {
				errors: {
					email: {
						msg: 'Contraeña incorrecta'
					}
				}
			});
		}

		return res.render('login', {
			errors: {
				email: {
					msg:'No se encuentra este email en la base de datos'
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

    //  err404: (req, res) => {
    //    res.render('err404');
        
    // },
};
module.exports = usersController;