const User = require('../models/usermodels')
const mongoose = require('mongoose')

const createuser = async(req,res) =>{
    const{username,email,password}= req.body
    try{
        const user = await User.create({username,email,password})
        res.status(200).json(user)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}

module.exports = {
    createuser,
}