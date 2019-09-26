let fs = require('fs');
let path = require('path');
let mongoose = require('mongoose');

// connect to mongodb
// mongoose.connect("mongodb://localhost/tasks-api", {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connect("mongodb://localhost/Commerce", {useNewUrlParser: true, useUnifiedTopology: true})

// create a variable that points to the models folder
var models_path = path.join(__dirname, './../models');
// console.log("################" + models_path + "##########################")
// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
    // require the file (this runs the model file which registers the schema)
    require(models_path + '/' + file);
    console.log(models_path + '/' + file);
   }
})