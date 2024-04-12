const User = require("./User");

module.exports = (sequelize, DataTypes) => {

    const Portfolio = sequelize.define("Portfolio",{
        id: {
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            allowNull:false,
            primaryKey:true
        },
        title:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        projectDescription:{
            type: DataTypes.TEXT,
            allowNull: true
        },
        completionDate: {
            type:DataTypes.DATE,
            allowNull:false,
        },
        createdAt:{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    });

    Portfolio.associate = (models) => {
        // Portfolio.hasMany(models.Image );
        // Portfolio.hasMany(models.Skill );
        Portfolio.belongsTo(models.User, {
            foreignKey: 'userId',
            // constraints: false
        });
    }
    return Portfolio;
}