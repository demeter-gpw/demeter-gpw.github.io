
$(function() {

	var latlng = new google.maps.LatLng(51.888147, 18.173089);
	var settings = {
		zoom: 14,
		scrollwheel: false,
		center: latlng,
		mapTypeControl: true,
		mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
		navigationControl: true,
		navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
		mapTypeId: google.maps.MapTypeId.HYBRID};
	var map = new google.maps.Map(document.getElementById("map_canvas"), settings);
	var contentString = '<div style="color: black">'+
		'<h4>Pamallax</h4>'+
		'</div>';
	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});

	var companyImage = new google.maps.MarkerImage('http://maps.google.com/mapfiles/marker_orange.png',
		new google.maps.Size(20,34),
		new google.maps.Point(0,0),
		new google.maps.Point(10,20)
	);

	var companyShadow = new google.maps.MarkerImage('http://maps.google.com/mapfiles/shadow50.png',
		new google.maps.Size(40,34),
		new google.maps.Point(0,0),
		new google.maps.Point(10, 20));

	var companyPos = new google.maps.LatLng(51.890365,18.170902);

	var companyMarker = new google.maps.Marker({
		position: companyPos,
		map: map,
		icon: companyImage,
		shadow: companyShadow,
		title:"DeeDee",
		zIndex: 3});

	google.maps.event.addListener(companyMarker, 'click', function() {
		infowindow.open(map,companyMarker);
	});

});
