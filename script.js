function playAudio(id) {
    var audio = document.getElementById(id);
    audio.play();
}

// Initialize and add the map
function initMap() {
    var india = { lat: 20.5937, lng: 78.9629 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: india
    });

    // Markers for cities
    var jaipur = { lat: 26.9124, lng: 75.7873 };
    var varanasi = { lat: 25.3176, lng: 82.9739 };

    new google.maps.Marker({ position: jaipur, map: map, title: 'Jaipur' });
    new google.maps.Marker({ position: varanasi, map: map, title: 'Varanasi' });
}

document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('map')) {
        initMap();
    }
});
