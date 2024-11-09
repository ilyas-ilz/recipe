const express = require ('express');
const bodyParser = require ('body-parser')

const router = express.Router();

const schema = require('../models/schema');
router.use(bodyParser.urlencoded({ extended: true }));  // Parses form data
router.use(bodyParser.json());  // Parses JSON data


// POST endpoint to create a new recipe
router.post('/recipe', async (req, res) => {
    // Create a new recipe instance with data from the request body
    const recipe = new schema({
        recipeName: req.body.recipeName, // Using the correct fields for the schema
        cookingTime: req.body.cookingTime,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        equipment: req.body.equipment,
        imgUrl: req.body.imgUrl
    });

    try {
        const newRecipe = await recipe.save(); // Save the new recipe to the database
        res.status(201).json(newRecipe); // Send the created recipe as a JSON response
    } catch (error) {
        res.status(400).json({ message: error.message }); // If an error occurs, send a 400 status
    }
});

// GET endpoint to retrieve all recipes, sorted by date in descending order
router.get('/recipe', async (req, res) => {
    try {
        const recipe = await schema.find().sort({ date: -1 }); // Fetch all recipes and sort by date descending
        res.json(recipe); // Send the recipes as a JSON response
    } catch (error) {
        res.status(500).json({ message: error.message }); // If an error occurs, send a 500 status
    }
});


// PUT endpoint to update an existing blog by id
router.put('/recipe/:id', async(req, res) => {
    try{
        //find the blog by ID and update it with data from the reqest body,returning the updated blog
        const updateRecipe = await schema.findByIdAndUpdate(req.params.id, req.body, {new : true});
        res.json(updateRecipe);//send the updated blog as a JSON response
    } catch(error){
        res.status(400).json({message: error.message});// if an error occures, send a 400 status and error message
    }
})

// DELETE endpoint to delete an existing blog by Id
router.delete('/recipe/:id', async(req,res) => {
    try{
        await schema.findByIdAndDelete(req.params.id); // find the blog ny id delete it
        res.json({message: 'Recipe deleted'}); // send a success message as a json response
    }catch(error){
        res.status(500).json({message: error.message}); //if an error occurs, send a status and error message
    }
});


module.exports = router; //Export the router to be used in other parts of the application