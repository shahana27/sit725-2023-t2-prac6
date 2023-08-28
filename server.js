let express = require('express');
let app = express();
let port = process.env.port || 3001;
require('./dbConnection');
let router = require('./routers/route')

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/cat', router);

app.listen(port, () => {
    console.log('express server started');
});