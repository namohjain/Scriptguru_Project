const express = require('express');
const Board = require('../models/Board');

const router = express.Router();

// GET /boards - list boards
router.get('/', async (req, res) => {
  try {
    const boards = await Board.find().sort({ createdAt: -1 });
    res.json(boards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /boards/:id - get a single board
router.get('/:id', async (req, res) => {
  try {
    const board = await Board.findById(req.params.id);
    if (!board) {
      return res.status(404).json({ message: 'Board not found' });
    }
    res.json(board);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// POST /boards - create board
router.post('/', async (req, res) => {
  const board = new Board({
    name: req.body.name,
  });

  try {
    const newBoard = await board.save();
    res.status(201).json(newBoard);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
