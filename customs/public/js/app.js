/*************************************
//
// customs app
//
**************************************/

// connect to our socket server
var socket = io.connect('http://127.0.0.1:1337/');

var app = app || {};


// shortcut for document.ready
$(function(){

	//SOCKET STUFF
	socket.on("blast", function(data){
            if(data.shipment_request) {
                console.log('shipment_request');
                console.log(data.shipment_request);
                var from = data.shipment_request.trucker.dlat+','+data.shipment_request.trucker.dlon;
                console.log('from : ' +from);
                requestShipment(from);
            }
	});
	
        function saySomething() {

		var blast = $blastField.val();
		if(blast.length){
			socket.emit("blast", {msg:blast}, 
				function(data){
					$blastField.val('');
				});
		}

        }
});
