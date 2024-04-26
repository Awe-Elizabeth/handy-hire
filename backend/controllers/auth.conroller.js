const {User} = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const crypto = require('crypto');
const { forgotPasswordMail } = require('../utils/mail.utils');



exports.register = async(req, res) => {
    try {
        const bcSalt = bcrypt.genSaltSync(10)
        const {firstName, lastName, email, password, role, country, state, categoryId} = req.body;
        const user = await User.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: bcrypt.hashSync(password, bcSalt),
            role,
            country,
            state,
            CategoryId: categoryId
        });


        const token = signToken(user)

        // const host = req.headers.host
        // try {
        //     await forgotPasswordMail(email, host, token )
        // } catch (error) {
        //     console.log(error)
        // }
       

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

exports.forgotPassword = async (req, res) => {
    try {
        const {email} = req.body

        const user = await User.findOne({where: {email: email}});

        if(!user){
            res.status(400).json({
                success: false,
                message: 'user does not exist'
            });
            return;
        }

        // Generate a unique token
        const token = crypto.randomBytes(20).toString('hex');

        const _user = await User.update({
           token : token,
           tokenExp: new Date(Date.now()+20*60*1000)
        },
        {
            where: {
                userid: user.userid
            }
        });
        
        await forgotPasswordMail(email, req.headers.host, user.userid, token);

        res.status(200).json({
            success: true,
            result: _user
        });
        
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            result: 'An error occurred'
        });
    }
    
}

exports.resetPassword = async (req, res) => {
const {id, token} = req.params
        
try {
    const date = Date.now();
    const oldUser = await User.findOne({where: {userid: id}});
    if(!id){
       return res.json({message:"User does not exist"})
    }

    if(!oldUser.token || date > oldUser.tokenExp){
        return res.json({message: "Not Verified"}) 
    }

    res.render("reset-password", { email: oldUser.email});
} catch (error) {
    console.log(error)
}
    
}

const signToken = (user) => {
    const token = jwt.sign(
        {id: user.userid, password: user.password}, 
        process.env.JWT_SECRET,
        {expiresIn: '30d'}
    )
    return token;
}