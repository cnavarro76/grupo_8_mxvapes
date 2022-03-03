const path = require('path'); 
const {body} = require ('express-validator');

module.exports = [
	body('firstName').notEmpty().withMessage('Tienes que escribir tu(s) nombre(s)').bail()
		.isLength({min: 3}).withMessage('El nombre debe tener al menos 3 caracteres'),
	body('lastName').notEmpty().withMessage('Tienes que escribir tu(s) apellido(s)').bail()
		.isLength({min: 3}).withMessage('El apellido debe tener al menos 3 caracteres'),
	body('email').notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
	body('user_type').notEmpty().withMessage('Tienes que elegir un tipo de usuario'),
	body('password').notEmpty().withMessage('Tienes que escribir una contraseña').bail()
		.isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres').bail()
		.isStrongPassword().withMessage('La contraseña debe tener al menos una letra mayúscula, una minúscula, un número y un caracter especial'),
	body('confirmPassword').notEmpty().withMessage('Confirma tu contraseña').bail()
		.custom((value, {req}) => {
			if (value !== req.body.password) {
				throw new Error('Las contraseñas no coinciden');
			}
			return true;
		}),
    body('address').notEmpty().withMessage('Tienes que escribir tu dirección'),
	body('checkbox').notEmpty().withMessage('Tienes que aceptar los términos y condiciones'),
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