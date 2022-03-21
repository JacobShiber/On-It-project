const mongoose = require("mongoose");
const schama = mongoose.Schema;

const Schedule = new schama(
  {
    title: { type: String, required: true },
    allDay: { type: Boolean },
    start: { type: Date, required: true },
    end: { type: Date, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Schedules", Schedule);
