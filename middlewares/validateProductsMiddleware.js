const path = require('path'); 
const {body} = require ('express-validator');

module.exports = [

//Validaciones de Product Create
body('name').notEmpty().withMessage('Nombre no puede estar vacío').bail()
.isLength({min: 5}).withMessage('El nombre debe tener al menos 5 caracteres'),
body('id').notEmpty().withMessage('El ID no puede estar vacío'),
body('category').notEmpty().withMessage('Selecciona una categoría de producto'),
body('description').notEmpty().withMessage('La  descripción no puede estar vacia').bail()
.isLength({min: 40}).withMessage('La  descripción debe tener al menos 40 caracteres'),
body('price').notEmpty().withMessage('El precio no puede estar vacío').bail()
.isNumeric().withMessage('El precio debe ser un numero'),
body('discount').notEmpty().withMessage('El descuento no puede estar vacío'),
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

