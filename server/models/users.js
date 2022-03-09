const mongoose = require("mongoose");
const schama = mongoose.Schema;

const Employee = new schama(
  {
    firstName: { type: String, required: true },
    job: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    password : { type: String, required: true },
    isAdmin : { type: String, required: true ,default:false },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", User);
