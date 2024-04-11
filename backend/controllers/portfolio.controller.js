const {Portfolio} = require('../models');
const {Image} = require('../models');
const {Skill} = require('../models');
// const sequelize = require('sequelize')
const db = require('../models');

exports.getPortfolios = async(req, res) => {
    
    try {
        const [results, metadata] = await db.sequelize.query(`
        select portfolios.id, portfolios.title, portfolios.projectDescription, images.data, images.portfolioId, skills.title as skills from ((portfolios INNER JOIN images ON images.portfolioId = portfolios.id) inner join skills on skills.portfolioId = portfolios.id)`);
        // console.log(req.params.id);
        res.status(200).json({
            success: true,
            data: results
        });
    } catch (error) {
        res.status(200).json({
            success: true,
            message: "An Error occured",
            data: error
        });
        console.log(error)
    }

}

exports.getPortfoliosById = async(req, res) => {
    
    try {
        const [results, metadata] = await db.sequelize.query(`
        select portfolios.id, portfolios.title, portfolios.projectDescription, images.data, skills.title as skills from ((portfolios INNER JOIN images ON images.portfolioId = portfolios.id) inner join skills on skills.portfolioId = portfolios.id) where images.portfolioId ="${req.params.id}" and skills.portfolioId = "${req.params.id}"
    `)        // console.log(req.params.id);
        res.status(200).json({
            success: true,
            data: results
        });
    } catch (error) {
        res.status(200).json({
            success: true,
            message: "An Error occured",
            data: error
        });
        console.log(error)
    }

}

exports.createPortfolio = async(req, res) => {
    try {
        const {title, completionDate, images, videos, skills, description} = req.body

        console.log(req.user.id);
        const portfolio = await  Portfolio.create({
            title: title,
            completionDate: completionDate,
            projectDescription: description,
            userId: req.user.id
        });

        if(portfolio){
            for(let i = 0; i < images.length; i++){
                await Image.create({
                    data: images[i],
                    portfolioId: portfolio.id,
                    userId: portfolio.userId
                });
            }
             
            for(let i = 0; i < skills.length; i++){
                await Skill.create({
                    title: skills[i],
                    portfolioId: portfolio.id,
                    userId: portfolio.userId
                });
            }
        }

        res.status(200).json({
            success: true,
            message: 'Portfolio created successfully'
        })
    } catch (error) {
        res.status(200).json({
            success: true,
            message: 'Error Creating Portfolio'
        })

        console.log(error)
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