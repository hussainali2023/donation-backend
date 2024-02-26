const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {type: String, required:true},
    email: {
        type: String,
        required: true,
        unique:true,
        validate: {
          validator: function(v) {
            return /\S+@\S+\.\S+/.test(v);
          },
          message: props => `${props.value} is not a valid email!`
        }
      },
    password: String,
   
})

const model = mongoose.model("user", UserSchema)

module.exports = model;