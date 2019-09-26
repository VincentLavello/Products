let pet = require('./../controllers/petcontroller'); // controller require
let path   = require('path'); // fixes file paths

module.exports = function(app){
  app.get('/', pet.index)
  app.get('/products', pet.index)
  app.post('/products/new', pet.create)
  app.get('/products/:id', pet.show)
  app.put('/products/edit/:id', pet.update)
  app.delete('/products/delete/:id', pet.destroy) // passing in controller methods that take req and res can be done this way
  app.get('/products/like/:id', pet.like)
  app.get('/products/qty/:id', pet.CheckQtyById)
  app.get('/products/maxid', pet.maxid)

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./client/dist/client/index.html"))
    });
      console.log(path.resolve("./client/dist/client/index.html"));
    // #### functionally these routes are shorthand for the below example
    // app.get('/example', function(req, res){
    //     tasks.example(req, res);
    // })
};