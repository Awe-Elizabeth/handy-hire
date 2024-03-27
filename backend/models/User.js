// const Schedule = require("./Schedule");
// const Category = require("./Category");


module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User",{
        userid:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            allowNull:false,
            primaryKey:true
        },
        firstName:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        lastName:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:false
        },
        password:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        email:{
            type: DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        phoneNumber:{
            type: DataTypes.STRING,
            allowNull:true,
            unique:true 
        },
        active:{
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
            allowNull: false,
        },
        profilePicture:{
            type: DataTypes.TEXT,
            allowNull: true
        },
        location: {
            type: DataTypes.STRING,
            allowNull:true
        },
        role: {
            type:DataTypes.ENUM('business', 'artisan', 'user', 'admin'),
            defaultValue: 'user',
            allowNull:false, 
        },
        certificate:{
            type:DataTypes.TEXT,
            allowNull:true
        },
        expertise:{
            type: DataTypes.STRING,
            allowNull:true,
            unique:true
        },
        bio:{
            type: DataTypes.TEXT,
            allowNull:true,
            unique:false 
        },
        about:{
            type: DataTypes.TEXT,
            allowNull:true,
            unique:false 
        },
        createdAt:{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    });

    User.associate = (models) => {

       
        User.hasMany(models.Schedule );
        User.belongsTo(models.Category, {
            foreignKey: 'CategoryId',
            // constraints: false
        });
    }
   
    return User;
}



// User.sync().then((rs)=>{
//     console.log(rs)
// }).catch((err)=>{
//     console.log(err)
// })
