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
            userName: req.body.userName,
            lastName: req.body.lastName,
            email: req.body.email,
            user_type: req.body.user_type,
            user_pass: req.body.user_pass,
            confirm_pass: req.body.confirm_pass,
            address: req.body.address,
            image: req.file.filename
        })
        res.redirect('/')        
    }


}

module.exports = usersController;