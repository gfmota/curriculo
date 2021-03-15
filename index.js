// Map
const vicosa = { lat: -20.762163369954514, lng: -42.864818392456115 };
const sp = { lat: -23.55935903722074, lng: -46.73129418567863};
const muriae = { lat: -21.134937503902165, lng: -42.36516992584712};

var marker;
var map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: { lat: -21.5, lng: -43},
    }); 
}

function changeMarkerPosition(place) {
    switch (place) {
        case 'vicosa':
            var latlng = vicosa;
            break;
        case 'muriae':
            var latlng = muriae;
            break;
        case 'sp':
            var latlng = sp;
            break;
    }
    if (marker == undefined) {
        marker = new google.maps.Marker({
            position: latlng,
            map: map,
        });
    }
    else{
        marker.setPosition(latlng);
    }
}