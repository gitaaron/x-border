var request = require('request');

/*************************************
//
// customs app
//
**************************************/

// express magic
var express = require('express');
var app = express();
var server = require('http').createServer(app)
var io = require('socket.io').listen(server);
var device  = require('express-device');
var bodyParser = require('body-parser');

var runningPortNumber = process.env.PORT;


app.configure(function(){
	// I need to access everything in '/public' directly
	app.use(express.static(__dirname + '/public'));

	//set the view engine
	app.set('view engine', 'ejs');
	app.set('views', __dirname +'/views');

	app.use(device.capture());
        app.use(bodyParser.json());

});


// logs every request
app.use(function(req, res, next){
	// output every request in the array
	console.log({method:req.method, url: req.url, device: req.device});

	// goes onto the next function in line
	next();
});

app.get("/", function(req, res){
	res.render('index', {});
});


app.get("/map", function(req, res){
	res.render('map', {});
});

app.post('/shipment_request', function(req, res) {
    console.log(req.body);
    io.sockets.emit('blast', {shipment_request:req.body});
    res.end('ok');
});

app.post('/sms', function(req, res) {
    console.log(req.body);
    var options = {
            uri:'http://server.setlurs.com:8080/sendsms',
            //uri:'http://localhost:8081/sendsms',
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:req.body,
            json:true

        }

    request(options);
    res.end('ok');
});

io.sockets.on('connection', function (socket) {

	io.sockets.emit('blast', {msg:"<span style=\"color:red !important\">someone connected</span>"});

	socket.on('blast', function(data, fn){
		console.log(data);
		io.sockets.emit('blast', {msg:data.msg});

		fn();//call the client back to clear out the field
	});

});


server.listen(runningPortNumber);

