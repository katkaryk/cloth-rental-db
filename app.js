import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import cartRoutes from './routes/cartRoutes.js';
import userRoutes from './routes/userRoutes.js';


dotenv.config();
connectDB();

const app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods: GET,POST,OPTIONS,DELETE,PUT");
  res.header("Access-Control-Allow-Origin' 'http://localhost:5000' always");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.use(express.json());
app.use(cors());
app.use('/api/users', userRoutes);
app.use('/api/cart', cartRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
