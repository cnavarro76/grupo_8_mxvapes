module.exports = function (sequelize, dataTypes) {
    let alias = "Product"; //como sequelize va a llamar a nuestra tabla

    let cols = {
        id: {
            primaryKey: true,
            type: dataTypes.INTEGER,
            autoIncrement: true,
        },
        product_name: {
            type: dataTypes.STRING
        },
        category: {
            type: dataTypes.INTEGER
        },
        product_description: {
            type: dataTypes.STRING
        },
        price: {
            type: dataTypes.INTEGER
        },
        discount: {
            type: dataTypes.INTEGER
        },
        image: {
            type: dataTypes.BLOB,
        },
    };

    let config = {
        tableName: "products", //como se llama la tabla en la db
        timestamps: false
    }



    const Product = sequelize.define(alias, cols, config);

    Product.associate = function (modelos) {
        Product.belongsToMany(modelos.User, {
            as: "usuarios",
            through: "cart",
            foreignkey: "idProduct",
            otherkey: "idUser",
            timestamps: false
        });




    }




    return Product;
}