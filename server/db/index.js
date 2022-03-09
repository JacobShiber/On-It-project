const mongoose = require("mongoose");

const STRING_CONECCTION = process.env.CONECCTION_STRING;
mongoose.connect(STRING_CONECCTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=>console.log('mongo is connecting'))
.catch(()=>console.log('mongo is not connecting'))
module.exports = mongoose.connection;