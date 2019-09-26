let mongoose = require('mongoose');
// let uniqueValid = require('mongoose-unique-validator'); // oooo mongoose unique valids!!
let Schema = mongoose.Schema;

let authorSchema = new Schema({
    name: {
        type: String,
        trim: true,
        // unique: true, // unique? TRUE?
        required: [true, "No nameless authors or ghostwriters are allowed."],
        minlength: [2, "No single digit names please."]
    },
}, {timestamps: true});

// we can attach unique valid as a plugin to make any field unique
// authorSchema.plugin(uniqueValid, {message: `{PATH} must be unique!`});

// make the model
mongoose.model('Author', authorSchema);