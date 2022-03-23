module.exports = function (sequelize, dataTypes) {
    let alias = "Category";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        productCat: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: "productcategory", //como se llama la tabla en la db
        timestamps: false
    };


    const Category = sequelize.define(alias, cols, config);


    Category.associate = function (modelos) {

        /*Category.hasMany(modelos.Product, {
            as: "producto",
            foreignkey: "productCat"


        });*/
    }



    return Category;
}