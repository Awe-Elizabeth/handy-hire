const { request } = require('express');
const {Schedule} = require('../models');
const { Op } = require('@sequelize/core');

exports.createSchedule = async (req, res) => {
    try {
        const {artisanId, businessId, time, venue, venueLink} = req.body

        const schedule = await Schedule.create({
            time,
            artisanId,
            businessId,
            venue,
            venueLink
        });

        res.status(200).json({
            success: true,
            data: schedule
        })
    } catch (error) {
        console.log(error);
        res.status(200).json({
            success: true,
            data: error
        }); 
    }
    
}

exports.getSchedules = async (req, res) => {
    try {
        const schedules = await Schedule.findAll();

        res.status(200).json({
            success: true,
            data: schedules
        })
    } catch (error) {
        
    }
}

exports.userSchedule = async (req, res) => {
    try {
        const id = req.params.id;

        const schedules = await Schedule.findAll({
            where: {
                [Op.or]: {
                  artisanId: id,
                  businessId: id,
                },
            },
        });

        res.status(200).json({
            success: true,
            data: schedules
        })
    } catch (error) {
        console.log(error)
    }
}