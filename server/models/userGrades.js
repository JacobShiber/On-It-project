const mongoose = require("mongoose");
const schama = mongoose.Schema;

const UsersGrades = new schama(
  {
    userName: { type: String, required: true },
    class: { type: String, required: true },
    grade: { type: Number, required: true },
    note: { type: String, required: true },
    school: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("UsersGrades", UsersGrades);
