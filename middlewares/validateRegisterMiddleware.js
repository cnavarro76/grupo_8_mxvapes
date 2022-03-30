const path = require('path'); 
const {body} = require ('express-validator');

module.exports = [

	//Validaciones de User Register
	body('userName').notEmpty().withMessage('Tienes que escribir tu(s) nombre(s)').bail()
		.isLength({min: 2}).withMessage('El nombre debe tener al menos 2 caracteres'),
	body('lastName').notEmpty().withMessage('Tienes que escribir tu(s) apellido(s)').bail()
		.isLength({min: 2}).withMessage('El apellido debe tener al menos 3 caracteres'),
	body('email').notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
	body('user_type').notEmpty().withMessage('Tienes que elegir un tipo de usuario'),
	body('user_pass').notEmpty().withMessage('Tienes que escribir una contraseña').bail()
		.isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres'),
		// .isStrongPassword().withMessage('La contraseña debe tener al menos una letra mayúscula, una minúscula, un número y un caracter especial'),
	body('confirm_pass').notEmpty().withMessage('Confirma tu contraseña').bail()
		.custom((value, {req}) => {
			if (value !== req.body.user_pass) {
				throw new Error('Las contraseñas no coinciden');
			}
			return true;
		}),
    body('address').notEmpty().withMessage('Tienes que escribir tu dirección'),
	//body('checkbox').notEmpty().withMessage('Tienes que aceptar los términos y condiciones'),
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