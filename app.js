const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express()
const path = require('path');
const recipeRouter = require('../platepalette/routes/route');
app.use('/api',recipeRouter);
app.use(cors());

app.use(express.json());


require('dotenv').config();
// Connect MongoDB using Mongoose
mongoose.connect(process.env.DB_URL,{
    // useNewUrlParser: true, // Use new url parser
    // useUnifiedTopology: true //Use the new server discovery and moniting engin
});

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req, res) =>{
    res.sendFile(path.join(__dirname,'views','index.html'));
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});