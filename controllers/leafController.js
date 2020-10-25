const Sequelize = require('sequelize')
const Config = require('../config/config').config
let db = new Sequelize(Config.DATABASE, `postgres`, `postgres`, {
    dialect: `postgres`
})
const Leaf  = require('../models').leaves
let test_db = async (req, res) => {
    try{
        await db.authenticate();
    console.log('Authenticated')
    res.status(200).send({ message : 'authenticated'})
    }catch(err){
        console.error(err)
    }
}

const getLeaves = async (req, res) => {
    console.log(Leaf)
    Leaf.findAll({

    }).then(data => {
        let leaves = data.map(leaf => leaf.dataValues)
        res.status(200).send(leaves)
    })
}


module.exports = {
    test_db: test_db,
    getLeaves: getLeaves
}