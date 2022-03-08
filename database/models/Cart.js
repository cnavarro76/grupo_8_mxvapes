module.exports = function(sequelize, dataTypes){

    let alias = "Cart";
    
        let cols = {
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            idUser: {
                type: dataTypes.INTEGER,
                
            },
            idProduct: {
                type: dataTypes.INTEGER,
               
            }
        };
    
    let config = {
        tablename: "cart",
        timestamps: false
    }
    
    const Cart = sequelize.define(alias, cols, config);
    
    return Cart;
    
    }