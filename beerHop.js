// Google map key AIzaSyC0W-x_mIRHA8cB1rjYp1wZOt3nUAUtEQU
// API Key: 6025a5af2ba200e2b816482dc3fe16e1


console.log('test');
//Map API
function initMap() {
        // Shows google map 
        var maxx = {lat: 37.526001, lng: -77.442353};
        var map = new google.maps.Map(document.getElementById('mapApi'), {
          center: maxx,
          zoom: 12
        });
        var marker = new google.maps.Marker({
        	position: maxx,
        	map: map
        });
getBeer();

 }

// Beerfinder API
//Beermap API KEY 6025a5af2ba200e2b816482dc3fe16e1 
function getBeer(){
	$.ajax({
		url: "http://beermapping.com/webservice/loccity/6025a5af2ba200e2b816482dc3fe16e1/richmond,va&s=json",
		type: "GET",
		success: function(response){
			


		}
	})

}

      
