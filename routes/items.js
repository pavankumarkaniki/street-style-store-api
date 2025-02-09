const express = require('express')
const db = require('../db')
const fs = require('fs').promises
const router = express.Router()

// Create an item
router.post('/', async (req, res) => {
  const {name, description} = req.body
  if (!name || !description)
    return res.status(400).json({message: 'Name and description required'})

  db.query(
    'INSERT INTO items (name, description) VALUES (?, ?)',
    [name, description],
    async (err, result) => {
      if (err) return res.status(500).json({message: err.message})

      const log = {
        id: result.insertId,
        name,
        created_at: new Date().toISOString(),
      }
      await fs.appendFile('logs.json', JSON.stringify(log) + '\n')

      res.status(201).json({id: result.insertId, name, description})
    },
  )
})

// Get all items
router.get('/', (req, res) => {
  db.query('SELECT * FROM items', (err, results) => {
    if (err) return res.status(500).json({message: err.message})
    res.json(results)
  })
})

// Get item by ID
router.get('/:id', (req, res) => {
  db.query(
    'SELECT * FROM items WHERE id = ?',
    [req.params.id],
    (err, result) => {
      if (err) return res.status(500).json({message: err.message})
      if (result.length === 0)
        return res.status(404).json({message: 'Item not found'})
      res.json(result[0])
    },
  )
})

// Update item by ID
router.put('/:id', (req, res) => {
  const {name, description} = req.body
  db.query(
    'UPDATE items SET name = ?, description = ? WHERE id = ?',
    [name, description, req.params.id],
    (err, result) => {
      if (err) return res.status(500).json({message: err.message})
      if (result.affectedRows === 0)
        return res.status(404).json({message: 'Item not found'})
      res.json({message: 'Item updated successfully'})
    },
  )
})

// Delete item by ID
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM items WHERE id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json({message: err.message})
    if (result.affectedRows === 0)
      return res.status(404).json({message: 'Item not found'})
    res.json({message: 'Item deleted successfully'})
  })
})

module.exports = router
