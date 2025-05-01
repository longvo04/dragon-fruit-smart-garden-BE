const express = require('express');

function createCRUD(Model) {
    const router = express.Router();

    // Create
    router.post('/', async (req, res) => {
        try {
            const item = await Model.create(req.body);
            res.status(201).json(item);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    });

    // Read all
    router.get('/', async (req, res) => {
        try {
            const items = await Model.find();
            res.json(items);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

    // Read one
    router.get('/:id', async (req, res) => {
        try {
            const item = await Model.findById(req.params.id);
            res.json(item);
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    });

    // Update
    router.put('/:id', async (req, res) => {
        try {
            const item = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(item);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    });

    // Delete
    router.delete('/:id', async (req, res) => {
        try {
            await Model.findByIdAndDelete(req.params.id);
            res.json({ message: 'Deleted successfully' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

    return router;
}

module.exports = createCRUD;
