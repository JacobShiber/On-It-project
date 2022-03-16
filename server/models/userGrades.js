const mongoose = require("mongoose");
const schama = mongoose.Schema;

const UsersGrades = new schama(
  {
    userName: { type: String, required: true },
    userId: { type: String, required: true },
    test: { type: String, required: true },
    course: { type: String, required: true },
    grade: { type: Number, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("UsersGrades", UsersGrades);
