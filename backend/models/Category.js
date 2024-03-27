// const User = require("./User");

module.exports = (sequelize, DataTypes) => {

    const Category = sequelize.define("Category",{
        id: {
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            allowNull:false,
            primaryKey:true
        },
        name:{
            type: DataTypes.STRING,
            allowNull:true,
            unique:true
        },
        description:{
            type: DataTypes.TEXT,
            allowNull:true,
            unique:true
        },
        
        createdAt:{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    });

    Category.associate = (models) => {
    Category.hasMany(models.User, {
        constraints: false
    })
    }
    
    return Category;
}