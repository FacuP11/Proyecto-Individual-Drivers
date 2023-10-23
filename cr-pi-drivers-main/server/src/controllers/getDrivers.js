require('dotenv').config()
const {DB_URL} = process.env
const axios = require('axios')

const getDrivers = async(req, res) => {
   try {
    const {id} = req.query;
    const response = await axios(`${DB_URL}`);
    const driversData = response.data;
    res.json(driversData);
    //res.status(200).json(drivers)
   }
   catch (error) {
    res.status(500).json({message: 'Nada'})  
   }
}

module.exports = {
    getDrivers
}