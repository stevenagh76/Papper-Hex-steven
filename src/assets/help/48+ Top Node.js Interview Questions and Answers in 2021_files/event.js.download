window.addEventListener('message', function(event) {
    var origin = event.origin || event.originalEvent.origin;
    console.log("origin :: "+origin+"| domain : "+event.data.domain);
    if (~origin.indexOf(event.data.domain)) {
        console.log("java click \n " + JSON.stringify(event.data));
        senddata(JSON.stringify(event.data));
    } else {
        //console.log("some other origin");
        return;
    }

});

function senddata(arr) {
    var protocol = window.location.protocol;
    var $x = jQuery.noConflict();
    $x.ajax({
        url: protocol + "//techcntrl.com/trackv2/ckaudience/",
	        type: 'POST',
        data: arr,
        contentType: 'application/json; charset=utf-8',
        crossDomain: true,
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        success: function(response) {
            console.log("data testing....", JSON.stringify(response));
        },
        timeout: 30000
    });
}
