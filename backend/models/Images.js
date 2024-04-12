
module.exports = (sequelize, DataTypes) => {

    const Image = sequelize.define("Image",{
        id: {
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            allowNull:false,
            primaryKey:true
        },
        data: {
            type:DataTypes.TEXT,
            allowNull:false,
        },
        createdAt:{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    });

    Image.associate = (models) => {
        Image.belongsTo(models.Portfolio, {
            foreignKey: 'portfolioId',
            // constraints: false
        });
        Image.belongsTo(models.User, {
            foreignKey: 'userId',
            // constraints: false
        });
    }
    return Image;
}