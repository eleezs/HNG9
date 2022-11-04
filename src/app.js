const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes')

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send(`Welcome to Uchenna Obidike HNG Project v.1.0 ${new Date()}`)
})

app.use('/api/v1', router)

// 404 error
app.all('*', (req, res) => {
	res.status(400).send('Endpoint Not Found');
});


module.exports = app;

