const express = require('express');

const feedController = require('../controllers/feed');

const router = express.Router();

// GET /feed/clients
router.get('/clients', feedController.getClients);

// POST /feed/Client
router.post('/Client', feedController.createClient);

module.exports = router;