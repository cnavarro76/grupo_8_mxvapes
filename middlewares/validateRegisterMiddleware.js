const path = require('path'); 
const {body} = require ('express-validator');

module.exports = [
    body('nombre').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('apellidos').notEmpty().withMessage('Tienes que escribir un apellido'),
    body('correoElectronico').notEmpty().withMessage('Tienes que escribir un correo electronico').bail()
    .isEmail().withMessage('Debes de escribir un formato correo valido'),
    body('usuario').notEmpty().withMessage('Tienes que escribir un usuario'),
    body('contrasenia').notEmpty().withMessage('Tienes que escribir una contraseña'),
    body('direccion').notEmpty().withMessage('Tienes que escribir una direccion'),
    body('imagenes').custom((value, {req}) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif', '.jpeg'];

        if (!file) {
            throw new error ('Tienes que subir una imagen');
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new error (`Las extenciones de archivo permitidos son: ${acceptedExtensions.join(', ')}`);
            }
        }
        return true;
    })
]

