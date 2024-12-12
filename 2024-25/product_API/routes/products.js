import express from 'express';
import { dbQuery, dbRun } from '../database.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const rows = await dbQuery('SELECT * FROM products');
    res.json({ products: rows });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const row = await dbQuery('SELECT * FROM products WHERE id = ?', [id]);
    res.json({ product: row });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  const { name, description, picture, price } = req.body;
  try {
    const result = await dbRun(
      'INSERT INTO products (name, description, picture, price) VALUES (?, ?, ?, ?)',
      [name, description, picture, price]
    );
    res.status(201).json({ id: result.lastID });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, picture, price } = req.body;
  try {
    const result = await dbRun(
      'UPDATE products SET name = ?, description = ?, picture = ?, price = ? WHERE id = ?',
      [name, description, picture, price, id]
    );
    res.json({ updated: result.changes });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await dbRun('DELETE FROM products WHERE id = ?', [id]);
    res.json({ deleted: result.changes });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
