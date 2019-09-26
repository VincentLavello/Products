let mongoose = require('mongoose');
// let uniqueValid = require('mongoose-unique-validator'); // oooo mongoose unique valids!!
let Schema = mongoose.Schema;

let petSchema = new Schema({
    name: {type: String, trim: true,
        required: [true, "Products must have a Name."],
        minlength: [3, "Product names require at least three chars."]
    },
    qty: {type: Number, min: [0, "Qty must be >= 0"],  required: [true, "Qty required"],
    },
    price: {type: Number, min: [0, "Price must be >= 0"],  required: [true, "No Free Products!"]
    },
    ProdID: {type: Number         
    },
    likes: {type: Number         
    },
}, {timestamps: true});

// we can attach unique valid as a plugin to make any field unique
// petSchema.plugin(uniqueValid, {message: `{PATH} must be unique!`});

// make the model
mongoose.model('Pet', petSchema);