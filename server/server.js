require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const cors = require('cors');

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).send('Server is online');
})


app.listen(port)