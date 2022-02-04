import express from 'express';
import mongoose from 'mongoose';

import RestaurantRoutes from './routes/RestaurantsRoutes.js';

const app = express();
app.use(express.json());

app.use(RestaurantRoutes);

mongoose.connect('mongodb+srv://yoonho:1234@cluster0.jn70c.mongodb.net/comp3133?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(3000, () => { console.log('Server is running...') });