import express from 'express';
import restaurantModel from '../models/Restaurants.js';

const app = express();

//4.Create REST API to return all restaurant details
//http://localhost:3000/restaurants
//6.The selected columns must include id, cuisines, name, city, resturant_id
//   The sorting by the restaurant_id in Ascending or Descending Order based on parameter passed.
//http://localhost:3000/restaurants?sortBy=ASC

app.get('/restaurants', async (req, res) => {
    let restaurants;

    if(req.query.sortBy){
      restaurants = await restaurantModel
        .find({})
        .select("cuisine name city restaurant_id")
        .sort({ restaurant_id: req.query.sortBy })
      } 
      else{
        restaurants = await restaurantModel.find({})
      }
    try {
      res.status(200).send(restaurants);
    } catch (err) {
      res.status(500).send(err);
    }
});

//5.Create REST API to return all restaurant details by cuisine
//http://localhost:3000/restaurants/cuisine/Japanese
app.get('/restaurants/cuisine/:name', async (req, res) => {
  const name = req.params.name;
  const restaurants = await restaurantModel.find({cuisine : name});
  
  try {
    if(restaurants.length != 0){
      res.send(restaurants);
    }else{
      res.send(JSON.stringify({status:false, message: "No data found"}));
    }
  } catch (err) {
    res.status(500).send(err);
  }
});


//7.Create REST API to return restaurants details where all cuisines are equal to Delicatessen and the city is not equal to Brooklyn
//http://localhost:3000/restaurants/Delicatessen

app.get('/restaurants/Delicatessen', async (req, res)=>{
  const restaurants = await restaurantModel
      .find({ 
        cuisine: 'Delicatessen', 
        city: { $ne: "Brooklyn"} 
      })
      .select("cuisine name city -_id");

  try {
    res.send(restaurants);
  }
  catch(err) { 
    res.status(500).send(err);
  }
});


export default app;