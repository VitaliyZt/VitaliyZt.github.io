var marker;
function initMap() {
	var place = {lat: 46.604809, lng: 31.548363};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 16,
		center: place,
		disableDefaultUI: true,
		zoomControl: true,
		scrollwheel: false,
	});
	marker = new google.maps.Marker({
		position: place,
		map: map,
		animation: google.maps.Animation.DROP
	});
	marker.addListener('click', toggleBounce);
}
function toggleBounce() {
	if (marker.getAnimation() !== null) {
		marker.setAnimation(null);
	} else {
		marker.setAnimation(google.maps.Animation.BOUNCE);
	}
}