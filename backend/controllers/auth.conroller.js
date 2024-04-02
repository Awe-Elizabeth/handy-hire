const {User} = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');



exports.register = async(req, res) => {
    try {
        const bcSalt = bcrypt.genSaltSync(10)
        const {firstName, lastName, email, password, role, location} = req.body;
        const user = await User.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: bcrypt.hashSync(password, bcSalt),
            role,
            location
        });


        const token = signToken(user)

        res.status(200).json({
            success: true,
            result: user,
            token: token
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            success: false,
            message: err
        })
    }   
}

exports.login = async(req, res) => {
    try {
        const {email, password} = req.body

        const user = await User.findOne({where: {email: email}});

        if(!user){
            res.status(404).json({
                success: false,
                message: 'No user found'
            }) 
            return;
        }
        const vfy = await bcrypt.compare(
            password,
            user.password
        );

        if(vfy){
            const token = signToken(user);
            res.status(200).json({
                success: true,
                result: user,
                token: token
            });
        }else{
            res.status(403).json({
                success: false,
                message: 'invalid credentials'
            });
        }


    } catch (error) {
        res.status(400).json({
            success: false,
            message: error
        })
    }
}


const signToken = (user) => {
    console.log( process.env.JWT_SECRET)
    const token = jwt.sign(
        {id: user.userid, password: user.password}, 
        process.env.JWT_SECRET,
        {expiresIn: '30d'}
    )
    return token;
}