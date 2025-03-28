import express from "express";
import { dbQuery } from "../database.js";

const router = express.Router();

router.get("/plants", async (req, res, next) => {
  try {
    const plants = await dbQuery("SELECT * FROM plants");
    res.status(200).json(plants);
  } catch (err) {
    next(err);
  }
});

router.post("/plants", async (req, res, next) => {
  try {
    await dbQuery(
      "INSERT INTO plants (name,perennial,category,price) VALUES (?,?,?,?)",
      [req.body.name, req.body.perennial, req.body.category, req.body.price]
    );
    res.status(201).send();
  } catch (err) {
    next(err);
  }
});

router.put("/plants/:id", async (req, res, next) => {
  try {
    await dbQuery(
      "UPDATE plants SET name = ?, perennial = ?, category = ?, price = ? WHERE id = ?",
      [
        req.body.name,
        req.body.perennial,
        req.body.category,
        req.body.price,
        req.params.id,
      ]
    );
    res.status(200).send({ message: req.params.id });
  } catch (err) {
    next(err);
  }
});

router.delete("/plants/:id", async (req, res, next) => {
  try {
    await dbQuery("DELETE FROM plants WHERE id = ?", [req.params.id]);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

export default router;
