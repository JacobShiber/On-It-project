const mongoose = require("mongoose");
const schama = mongoose.Schema;

const Schedule = new schama(
  {
    sunday: { type: Array, required: true },
    monday: { type: Array, required: true },
    tuesday: { type: Array, required: true },
    wednesday: { type: Array, required: true },
    thursday: { type: Array, required: true },
    friday: { type: Array, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Schedules", Schedule);