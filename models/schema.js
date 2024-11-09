// const mongoose = require('mongoose');

// // Define a schema for the recipes using Mongoose
// const recipeSchema = new mongoose.Schema({
//     recipeName: { type: String, required: true }, // The name of the recipe
//     cookingTime: { type: String, required: true }, // The cooking time as a string
//     ingredients: { type: String, required: true }, // ingredients
//     instructions: { type: String, required: true }, //step-by-step instructions
//     equipment: { type: String }, //strings for equipment, optional
//     imgUrl: { type: String, required: true }, // URL for the image, required
//     date: { type: Date, default: Date.now } // Date field with a default value of now
// });

// module.exports = mongoose.model('Recipe', recipeSchema);

const mongoose = require('mongoose');

// Define a schema for the recipes using mongoose    
const recipeschema = new mongoose.Schema({
    recipeName: { type: String, required: true },
    cookingTime: { type: String, required: true },
    ingredients: { type: String, required: true }, // Ingredients (as a single string)
    instructions: { type: String, required: true }, // Instructions (as a single string)
    equipment: { type: String }, // Required equipment (as a single string, optional)
    imgUrl: { type: String, required: true },
    date: { type: Date, default: Date.now } // Date of recipe creation
    
});


module.exports = mongoose.model('Recipe', recipeschema);


