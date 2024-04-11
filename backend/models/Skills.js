

module.exports = (sequelize, DataTypes) => {

    const Skill = sequelize.define("Skill",{
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
        createdAt:{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    });

    Skill.associate = (models) => {
        Skill.belongsTo(models.Portfolio, {
            foreignKey: 'portfolioId',
            // constraints: false
        });
        Skill.belongsTo(models.User, {
            foreignKey: 'userId',
            // constraints: false
        });
    }
    return Skill;
}