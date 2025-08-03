import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db/config.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

// Routes placeholder
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
