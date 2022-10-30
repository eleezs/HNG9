const express = require('express');
const app = express();
const router = require('./routes')
app.use(express.urlencoded({ extended: false }));

app.get('/api/v1/', (req, res) => {
    res.send(`Welcome to Uchenna Obidike HNG Project v.1.0 ${new Date()}`)
})

app.use('/uchenna-obidike-hng-project/api/v1', router)

// 404 error
app.all('*', (req, res) => {
	res.send(404, 'Endpoint Not Found');
});


module.exports = app;

