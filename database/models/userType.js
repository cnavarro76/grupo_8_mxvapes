module.exports = function(sequelize, dataTypes){
    let alias = "userType";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        utype : {
            type: dataTypes.INTEGER
        },

    };
    let config = {
        tableName: "usertype", //como se llama la tabla en la db
        timestamps: false
    };
    

    const userType = sequelize.define(alias, cols, config);

    
   
    return userType;
}