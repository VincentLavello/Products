let Pet = require('mongoose').model('Pet');
let errorHandler = require('./helpers/error-handler'); // error handling never changes, so let's make it general


module.exports = {
    index(req, res) {
      // Pet.find(req.body)  
      Pet.find(req.body).sort({type: 1})
        .then(Pets => res.json(Pets)) // all responses just spit json
        .catch(errorHandler.bind(res)); // .bind ensures this will refer to the response object and not the errorHandler function
    },
    show(req, res) {
      // console.log("petcontroller.show()", req.params);
      Pet.findById(req.params.id)
        .then(Pet => res.json(Pet))
        .catch(errorHandler.bind(res));
    },
    create(req, res) {
      Pet.create(req.body)
        .then(Pet => res.json(Pet))
        .catch(errorHandler.bind(res));
    },
    update(req, res) {
      var opts = { runValidators: true };
      Pet.update(
        // console.log("###### updatereq: ", req);
        { _id: req.params.id },
        { $set:
           {
             name: req.body.name,
             qty: req.body.qty,
             price: req.body.price,
           }
        },
        opts,
        )
        .then(Pet => res.json(Pet))
        .catch(errorHandler.bind(res));
      // Pet.findByIdAndUpdate(req.params.id, req.body, { new: true })
      //   .then(Pet => res.json(Pet))
      //   .catch(errorHandler.bind(res));
      // )}
    },
    like(req, res) {
      console.log("PetController.like: ", req.params.id);
      Pet.findByIdAndUpdate(req.params.id, {$inc: {likes: 1}}, { new: true })
        .then(Pet => res.json(Pet))
        .catch(errorHandler.bind(res));
    },
    destroy(req, res) {
      console.log('petcontroller.destroy', req.params.id);
      Pet.findByIdAndRemove(req.params.id)
        .then(result => res.json(result))
        .catch(errorHandler.bind(res));
    },
    CheckQtyById(req, res) {
      console.log(req.params.id );
      Pet.find({_id: req.params.id})
        .then(Pet => res.json(Pet))
        .catch(errorHandler.bind(res));
    },    
    maxid(req, res) {
      // Pet.findOne({}).sort({ProdID: -1})
      // Pet.find({}).sort({ ProdID: -1 }).limit(1).then(ID => ID[0].ProdID)
      //   .then(Pet => res.json(Pet))
      //   .catch(errorHandler.bind(res));
    },    
  };