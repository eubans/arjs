const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/express/index.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/image', function (req, res) {
    res.sendFile(path.join(__dirname + '/express/image.html'));
});

router.get('/video', function (req, res) {
    res.sendFile(path.join(__dirname + '/express/video.html'));
});

router.get('/location', function (req, res) {
    res.sendFile(path.join(__dirname + '/express/location.html'));
});

router.get('/marker', function (req, res) {
    res.sendFile(path.join(__dirname + '/express/marker.html'));
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');