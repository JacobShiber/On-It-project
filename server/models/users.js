const mongoose = require("mongoose");
const schama = mongoose.Schema;
const User = new schama(
  {
    firstName: { type: String, required: true },
    id: { type: String, required: true },
    role: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    password : { type: String, required: true },
    isAdmin : { type: Boolean, required: true },
    img : { type: String},
    course : { type: String, required: true },
    school : { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", User);
