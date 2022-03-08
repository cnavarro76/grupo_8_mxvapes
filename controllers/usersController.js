let db = require("../database/models");

let usersController = {
    login: function(req, res){
        db.User.findAll()
            .then(function(usuarios){
                return res.render("login")
            })
           
        
    },
    register: function(req, res){
        db.userType.findAll()
            .then(function(tipoUsuario){
                return res.render("register", {tipoUsuario})
            });
        
    },
    guardarUsuario: function(req, res){
        db.User.create({
            userName: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            user_type: req.body.userType,
            user_password: req.body.password,
            address: req.body.address
        })
        res.redirect('/')        
    }


}

module.exports = usersController;