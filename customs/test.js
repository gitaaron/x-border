var request = require('request');

var body = {a:'b'};
var options = {
    uri:'http://localhost:8081/sendsms',
    method:'POST',
    headers:{
        'content-type':'application/json'
    },
    path:'/sendsms',
    body:body,
    json:true
    //http://server.setlurs.com:8080/sendsms
}
request(options);
