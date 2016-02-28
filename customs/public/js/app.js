/*************************************
//
// customs app
//
**************************************/

// connect to our socket server
var socket = io.connect();

var app = app || {};


// shortcut for document.ready
$(function(){

	//SOCKET STUFF
	socket.on("blast", function(data){
            if(data.shipment_request) {
                console.log('shipment_request');
                console.log(data.shipment_request);
                var t= data.shipment_request.trucker;
                var from = t.dlat + ',' + t.dlon;
                console.log('from : ' + from);
                requestShipment(from, data.shipment_request);
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
