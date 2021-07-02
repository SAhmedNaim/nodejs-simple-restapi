var mongoose = require('mongoose')
const HOST = "localhost"
const uri = `mongodb://${HOST}:27017/nodejs-simple-restapi`
const options = {useNewUrlParser: true, useUnifiedTopology: true}

mongoose.connect(uri, options, (error, db) => {
    if (error) 
        console.error(error)
    else
        console.log("Database connection established successfully!!!")
});
