const Sequelize = require('sequelize')
const Config = require('../config/config').config
let db = new Sequelize(Config.DB_URL, {
    dialect: `postgres`,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
})
const Leaf = require('../models').leaves
const Location = require('../models').locations
let test_db = async (req, res) => {
    console.log("DB:")
    console.log(db)
    try {
        await db.authenticate();
        console.log('Authenticated')
        res.status(200).send({ message: 'authenticated' })
    } catch (err) {
        console.error(err)
    }
}

const getLeaves = async (req, res) => {
    console.log(Config);
    Leaf.findAll({
        

    }).then(data => {
        let leaves = data.map(leaf => leaf.dataValues)
        leaves.filter(leaf => (leaf.createdAt).toString().split('-')[0] == '2020')
        res.status(200).send(leaves)
    }).catch(err => {
        console.error(`Error getting leaves: ${err}`)
        res.status(500).send({ message: `Error getting leaves.` })
    })
}

const getAuthorLeaves = async (req, res) => {
    let author = req.params.author.toLowerCase()
    Leaf.findAll({
        where: {
            'author': author
        }
    }).then(data => {
        res.status(200).send(data)
    }).catch(err => {
        console.error(err)
        res.status(500).send(err)
    })
}

const postLeaf = async (req, res) => {
    Leaf.create({
        author: req.body.author.toLowerCase(),
        content: req.body.content,
        x_location: req.body.x_location,
        y_location: req.body.y_location
    }).then(response => {
        res.status(200).send({ message: response })
    })
}

const postAllLeaves = async (req, res) => {
    let leaves = JSON.parse(req.body.leaf_array)
    console.log(leaves[0])
    for(let leaf of leaves){
        await Leaf.create({
            author: leaf.author.toLowerCase(),
            content: leaf.content,
            x_location: leaf.x_location,
            y_location: leaf.y_location
        }).catch(err => {
            res.status(500).send({ message : err})
        })
    }
    res.status(200).send({ message : 'Added!'})
}

module.exports = {
    test_db: test_db,
    getLeaves: getLeaves,
    getAuthorLeaves: getAuthorLeaves,
    postLeaf: postLeaf,
    postAllLeaves: postAllLeaves
}
