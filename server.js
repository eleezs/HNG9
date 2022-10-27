const app = require('./src/app');

require('dotenv');

const port = process.env.APP_PORT || 3007;

app.listen(port, () => console.log("listening on port " + port));
