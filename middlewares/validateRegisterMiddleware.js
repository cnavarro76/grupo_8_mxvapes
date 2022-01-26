const path = require('path'); 
const {body} = require ('express-validator');

module.exports = [
	body('fullName').notEmpty().withMessage('Tienes que escribir tu nombre completo'),
	body('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
	body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
    body('address').notEmpty().withMessage('Tienes que escribir tu dirección'),
	body('user_type').notEmpty().withMessage('Tienes que elegir un tipo de usuario'),
	body('image').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif', '.jpeg'];

		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Los archivos permitidos son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	})
]