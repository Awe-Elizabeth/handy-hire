const {User} = require('../models');

exports.getUsers = async(req, res) => {
    try {
        const users = await User.findAll();

        res.status(200).json({
            success: true,
            data: users
        })
    } catch (error) {
        
    }
}

exports.getUsersbylocation = async(req, res) => {
    const {location} = req.body;

    const users = await User.findAll({where:{location: location}});

    if(!users){
        res.status(404).json({
            success: true,
            message: 'No users found in this location'
        });
    }else{
        res.status(404).json({
            success: true,
            message: users
        });
    }
}

exports.updateUserInfo = async (req, res) => {
    
    try {
        
        const { firstName, lastName, profilePicture, location, phoneNumber}= req.body;
 
        const user = await User.findOne({where: {userid: req.user.id}});
        if(!user){
            res.status(404).json({
                success: true,
                message: 'user not found'
            });
        }else{
            const _user = await User.update({
                firstName: firstName? firstName : user.firstName,
                lastName: lastName? lastName : user.lastName,
                profilePicture: profilePicture? profilePicture : user.profilePicture,
                location: location? location : user.location,
                phoneNumber: phoneNumber? phoneNumber : user.phoneNumber
            },
            {
                where: {
                    userid: user.userid
                }
            });
            res.status(201).json({
                success: true,
                data: _user
            });
        }

       
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: true,
            message: error
        });
    }
}