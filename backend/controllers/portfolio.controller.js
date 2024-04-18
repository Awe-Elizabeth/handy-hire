const {Portfolio} = require('../models');
const {Image} = require('../models');
const {Skill} = require('../models');
const {uploadImage} = require('../config/cloudinary.config')
// const sequelize = require('sequelize')
const db = require('../models');

exports.getPortfolios = async(req, res) => {
    
    try {
        const [results, metadata] = await db.sequelize.query(`
        select portfolios.id, portfolios.title, portfolios.projectDescription, portfolios.createdAt, images.data, images.portfolioId, skills.title as skills from ((portfolios INNER JOIN images ON images.portfolioId = portfolios.id) inner join skills on skills.portfolioId = portfolios.id)`);
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
    let images = [];
    let skills = [];
    
    try {
        const [results, metadata] = await db.sequelize.query(`
        select Portfolios.id, Portfolios.title, Portfolios.projectDescription, Portfolios.about, Portfolios.details, Images.data, Skills.title as skills from ((Portfolios INNER JOIN Images ON Images.portfolioId = Portfolios.id) inner join Skills on Skills.portfolioId = Portfolios.id) where Images.portfolioId ="${req.params.id}" and Skills.portfolioId = "${req.params.id}"
    `)       
     // console.log(req.params.id);
     
        for(let i = 0; i < results.length; i++){
            const setObj = new Set(images)
            const skillsObj = new Set(skills)               
            
            if(!setObj.has(results[i].data)){ 
                images.push(results[i].data);
            }
            
            if(!skillsObj.has(results[i].skills)){
                skills.push(results[i].skills);
            }
           
        }

        let responseData = {
            id: results[0].id,
            title: results[0].title,
            projectDescription: results[0].projectDescription,
            about: results[0].about,
            details: results[0].details,
            images: images,
            skills: skills
        }

        res.status(200).json({
            success: true,
            data: responseData
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
        const {title, completionDate, images, videos, skills, description, about, details} = req.body

        console.log(req.user.id);
        const portfolio = await  Portfolio.create({
            title: title,
            completionDate: completionDate,
            projectDescription: description,
            about: about,
            details: details,
            userId: req.user.id
        });

        if(portfolio){
            try {
                for(let i = 0; i < images.length; i++){
                    const random = generate();
                
                    const result = await uploadImage(images[i], `${title}_${random}`);
                    await Image.create({
                        data: result.secure_url,
                        portfolioId: portfolio.id,
                        userId: portfolio.userId
                    });
                    
                }
            } catch (error) {
                console.log(error);
                res.status(200).json({
                    success: true,
                    message: 'Could not upload Images'
                });
                return
            }
           
             
            await Skill.create({
                title: skills,
                portfolioId: portfolio.id,
                userId: portfolio.userId
            });
        }

        res.status(200).json({
            success: true,
            message: 'Portfolio created successfully',
            data: portfolio
        });
        
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

const generate = () => {
    let x = Math.floor((Math.random() * 1000) + 1);
    return x;
}