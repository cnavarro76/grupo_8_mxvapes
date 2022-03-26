module.exports = function (sequelize, dataTypes) {
    let alias = "User"; //como sequelize va a llamar a nuestra tabla

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userName: {
            type: dataTypes.STRING
        },
        lastName: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        user_type: {
            type: dataTypes.INTEGER,

        },
        user_pass: {
            type: dataTypes.INTEGER
        },
        /*confirm_pass: {
            type: dataTypes.STRING,
        },*/
        address: {
            type: dataTypes.STRING
        },
        image: {
            type: dataTypes.BLOB,
        },
    };

    let config = {
        tableName: "users", //como se llama la tabla en la db
        timestamps: false
    }



    const User = sequelize.define(alias, cols, config);

    User.associate = function (modelos) {
        User.belongsToMany(modelos.Product, {
            as: "usuarios",
            through: "cart",
            foreignkey: "idUser",
            otherkey: "idProduct",
            timestamps: false
        })
    };


    return User;
}