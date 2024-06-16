import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import deliveryRoutes from './routes/deliveryDetails.js';
import helmet from 'helmet';

dotenv.config();

mongoose.set('strictQuery', false);

const app = express();
const url = process.env.MONGO_DB_URL;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connection to MongoDB successful');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
  });

app.use(helmet());
app.use(express.json());

app.use('/deliveryDetails', deliveryRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server started on  https://localhost/${PORT}`);
});
