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
    let tree_id = req.query.tree_id;
    let where_conditions = {};
    if (tree_id) {
        console.log("Getting all leaves for tree_id: " + tree_id);
        where_conditions.tree_id = tree_id;
    } else {
        console.log("No tree_id provided, fetching all leaves.");
    }

    // Retrieve all leaves using the tree_id if available, otherwise get all leaves.
    Leaf.findAll({
        where: where_conditions
    }).then(data => {
        let leaves = data.map(leaf => leaf.dataValues)
        //TODO: filter leaves by this year only
        res.status(200).send(leaves)
    }).catch(err => {
        res.status(500).send({ message: `Error getting leaves. ` + err.message })
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
    try {
        const newLeafResponse = await Leaf.create(
            req.body
        )
        res.status(200).send({ message: newLeafResponse })
    } catch (error) {
        console.log(error.message)
        res.status(500).send({message : "Could not create leaf, something went wrong."})
    }

}

const postAllLeaves = async (req, res) => {
    let leaves = JSON.parse(req.body.leaf_array)
    console.log(leaves[0])
    for (let leaf of leaves) {
        await Leaf.create({
            author: leaf.author.toLowerCase(),
            content: leaf.content,
            x_location: leaf.x_location,
            y_location: leaf.y_location
        }).catch(err => {
            res.status(500).send({ message: err })
        })
    }
    res.status(200).send({ message: 'Added!' })
}

module.exports = {
    test_db: test_db,
    getLeaves: getLeaves,
    getAuthorLeaves: getAuthorLeaves,
    postLeaf: postLeaf,
    postAllLeaves: postAllLeaves
}
