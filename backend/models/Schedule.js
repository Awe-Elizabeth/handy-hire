const User = require("./User");

module.exports = (sequelize, DataTypes) => {

    const Schedule = sequelize.define("Schedule",{
        id: {
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            allowNull:false,
            primaryKey:true
        },
        time:{
            type:DataTypes.DATE,
            allowNull:false,
        },
        venue: {
            type:DataTypes.STRING,
            allowNull:false,
        },
        venueLink: {
            type:DataTypes.TEXT,
            allowNull:false,
        },
        createdAt:{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    });

    Schedule.associate = (models) => {
        Schedule.belongsTo(models.User, {
            foreignKey: 'artisanId',
            // constraints: false
        });
        Schedule.belongsTo(models.User, {
            foreignKey: 'businessId',
            // constraints: false
        });
    }
    return Schedule;
}