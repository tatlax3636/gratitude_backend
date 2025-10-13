const Sequelize = require('sequelize');
const { sequelize } = require('../models');
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
const Tree = require('../models/tree')(sequelize, Sequelize.DataTypes)

const Leaf = require('../models').Leaf

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

const getTrees = async (req, res) => {
    let tree_id = req.query.tree_id;
    let where_conditions = {};
    if (tree_id) {
        console.log("Getting tree info w/ tree_id: " + tree_id);
        where_conditions.tree_id = tree_id;
    } else {
        console.log("No tree_id provided, fetching all trees.");
    }

    // Retrieve all leaves using the tree_id if available, otherwise get all leaves.
    Tree.findAll({
        where: where_conditions
    }).then(data => {
        let trees = data.map(tree => tree.dataValues)
        res.status(200).send(trees)
    }).catch(err => {
        res.status(500).send({ message: `Error getting trees. ` + err.message })
    })
}


const postTree = async (req, res) => {
    console.log(req.body)
    let body = req.body;
    // TODO: make algorithm for keeping track of admin and access code and creating new ones
    body.access_code = newAccessCode();
    body.admin_code = newAdminCode();

    // Keep all as default until themes are implemented down the line
    // TODO: implement different themes
    body.theme = "default";
    console.log(body)
    try {
        const newTreeResponse = await Tree.create(body)
        res.status(200).send({ message: newTreeResponse })
    } catch (error) {
        console.log(error.message)
        res.status(500).send({ message: "Could not create leaf, something went wrong." })
    }
}

const newAccessCode = () => {
    console.log("checking for existing values")
    return "12345678"
}

const newAdminCode = () => {
    console.log("checking for existing values")
    return "87654321"
}



module.exports = {
    test_db: test_db,
    getTrees: getTrees,
    postTree: postTree
}
