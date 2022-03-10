const mongoose = require("mongoose");
const schama = mongoose.Schema;

const UsersNew = new schama(
  {
    userName: { type: String, required: true },
    userImg: { type: String, required: true },
    data: { type: String, required: true },
    role: { type: String, required: true },
    school: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("UsersNew", UserNew);
