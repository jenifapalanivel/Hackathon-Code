document.addEventListener("DOMContentLoaded", function() {
    var music = document.getElementById("background-music");
    music.play().catch(function(error) {
        console.error("Error playing music:", error);
    });
});

function showDetails() {
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function initMap() {
    var location = {lat: 40.6872, lng: -73.9912}; // Coordinates for 2nd Pl and Court St
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

function share() {
    if (navigator.share) {
        navigator.share({
            title: 'Brooklyn Stoop Sale Invitation',
            text: 'Join us for a day of fun and great deals at the Brooklyn Stoop Sale!',
            url: window.location.href
        }).then(() => {
            console.log('Thanks for sharing!');
        }).catch((error) => {
            console.error('Error sharing:', error);
        });
    } else {
        alert('Web share not supported on this browser. Copy the link manually!');
    }
}
