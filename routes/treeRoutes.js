const express = require('express');
const router = express.Router();
const leafController = require('../controllers/treeController');
const treeController = require('../controllers/treeController');

// Get all leaves by tree_id. If tree_id is null, get all leaves
router.get('/', treeController.getTrees)

const setDefaults = (req, res, next) => {
    console.log("called");
    next()
}

// Post a new tree.
router.post('/', [setDefaults, treeController.postTree], (req,res, next) => { 


})





module.exports = router;