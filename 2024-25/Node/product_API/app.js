import express from 'express';
import cors from 'cors';
import productRoutes from './routes/products.js';
import { initializeDB } from './database.js';
import swaggerUi from 'swagger-ui-express';
import { readFile } from "fs/promises";


const app = express();
const PORT = 3000;
const swaggerDocument = JSON.parse(await readFile(new URL("./swagger-output.json", import.meta.url)));

app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/products', productRoutes);

initializeDB().then(() => {
  app.listen(PORT, () => {
    console.log(` http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('Failed to initialize the database:', err);
});
