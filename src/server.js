const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();


app.use(express.static(__dirname + '/dist/tiendafront'));
app.use(cors());
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/tiendafront/index.html'));
});

app.listen(process.env.PORT || 8080);