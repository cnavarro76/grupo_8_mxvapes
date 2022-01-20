const {
    render
} = require('ejs');
const path = require('path');
const fs = require('fs');

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
        let newUser = {
        id: users [users.length - 1].id + 1,
        ...req.body,
        contrasenia: bcrypt.hashSync(req.body.contrasenia, salt),
        tipoUsuario: "Usuario",
        imagenes: req.file.filename
        };
        users.push(newUser);
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
        res.redirect('/login');
    },
    err404: (req, res) => {
        res.render('err404');
         
     },
};
module.exports = usersController;