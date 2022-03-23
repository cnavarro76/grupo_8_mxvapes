const path = require('path'); 
const {body} = require ('express-validator');

module.exports = [

    body('image').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif', '.jpeg'];
    
        if (!file) {
            throw new Error('Escoge otra imagen');
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Los archivos permitidos son ${acceptedExtensions.join(', ')}`);
            }
        }
    
        return true;
    })
    ]