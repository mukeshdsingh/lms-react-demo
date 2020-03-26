const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//require('dotenv').config();

const app = express();
const port = 4000; //process.env.PORT||4000;
const uri = "mongodb://localhost:27017/lmsdb?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false"; //process.env.ATLAS_URI;

app.use(cors());
app.use(express.json());

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const leadRouter = require('./routes/lead');
app.use('/lead', leadRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
