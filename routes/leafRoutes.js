const express = require('express');
const router = express.Router();
const leafController = require('../controllers/leafController')

// Get all leaves.
router.get('/', leafController.getLeaves)

// Get all leaves for a specific author.
router.get('/:author', leafController.getAuthorLeaves)

// Post a new leaf.
router.post('/', leafController.postLeaf)

// Post all old leaves
router.post('/update', leafController.postAllLeaves)

module.exports = router;