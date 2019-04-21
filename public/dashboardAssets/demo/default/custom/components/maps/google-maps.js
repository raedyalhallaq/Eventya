var GoogleMapsDemo = {
    init: function () {
        // var t;
        // new GMaps({div: "#m_gmap_1", lat: -12.043333, lng: -77.028333}), new GMaps({
        //     div: "#m_gmap_2",
        //     zoom: 16,
        //     lat: -12.043333,
        //     lng: -77.028333,
        //     click: function (t) {
        //         alert("click")
        //     },
        //     dragend: function (t) {
        //         alert("dragend")
        //     }
        // }), (t = new GMaps({div: "#m_gmap_3", lat: -51.38739, lng: -6.187181})).addMarker({
        //     lat: -25.38739,
        //     lng: -100.187181,
        //     title: "Lima",
        //     details: {database_id: 42, author: "HPNeo"},
        //     click: function (t) {
        //         console.log && console.log(t), alert("You clicked in this marker")
        //     }
        // }), t.addMarker({
        //     lat: -12.042,
        //     lng: -77.028333,
        //     title: "Marker with InfoWindow",
        //     infoWindow: {content: '<span style="color:#000">HTML Content!</span>'}
        // }), t.setZoom(5), function () {
        //     var t = new GMaps({div: "#m_gmap_4", lat: -12.043333, lng: -77.028333});
        //     GMaps.geolocate({
        //         success: function (e) {
        //             t.setCenter(e.coords.latitude, e.coords.longitude)
        //         }, error: function (t) {
        //             alert("Geolocation failed: " + t.message)
        //         }, not_supported: function () {
        //             alert("Your browser does not support geolocation")
        //         }, always: function () {
        //         }
        //     })
        // }(), function () {
        //     var t = new GMaps({
        //         div: "#m_gmap_5", lat: -12.043333, lng: -77.028333, click: function (t) {
        //             console.log(t)
        //         }
        //     });
        //     path = [[-12.044012922866312, -77.02470665341184], [-12.05449279282314, -77.03024273281858], [-12.055122327623378, -77.03039293652341], [-12.075917129727586, -77.02764635449216], [-12.07635776902266, -77.02792530422971], [-12.076819390363665, -77.02893381481931], [-12.088527520066453, -77.0241058385925], [-12.090814532191756, -77.02271108990476]], t.drawPolyline({
        //         path: path,
        //         strokeColor: "#131540",
        //         strokeOpacity: .6,
        //         strokeWeight: 6
        //     })
        // }(), new GMaps({
        //     div: "#m_gmap_6",
        //     lat: -12.043333,
        //     lng: -77.028333
        // }).drawPolygon({
        //     paths: [[-12.040397656836609, -77.03373871559225], [-12.040248585302038, -77.03993927003302], [-12.050047116528843, -77.02448169303511], [-12.044804866577001, -77.02154422636042]],
        //     strokeColor: "#BBD8E9",
        //     strokeOpacity: 1,
        //     strokeWeight: 3,
        //     fillColor: "#BBD8E9",
        //     fillOpacity: .6
        // }), function () {
        //     var t = new GMaps({div: "#m_gmap_7", lat: -12.043333, lng: -77.028333});
        //     $("#m_gmap_7_btn").click(function (e) {
        //         e.preventDefault(), mUtil.scrollTo("m_gmap_7_btn", 400), t.travelRoute({
        //             origin: [-12.044012922866312, -77.02470665341184],
        //             destination: [-12.090814532191756, -77.02271108990476],
        //             travelMode: "driving",
        //             step: function (e) {
        //                 $("#m_gmap_7_routes").append("<li>" + e.instructions + "</li>"), $("#m_gmap_7_routes li:eq(" + e.step_number + ")").delay(800 * e.step_number).fadeIn(500, function () {
        //                     t.setCenter(e.end_location.lat(), e.end_location.lng()), t.drawPolyline({
        //                         path: e.path,
        //                         strokeColor: "#131540",
        //                         strokeOpacity: .6,
        //                         strokeWeight: 6
        //                     })
        //                 })
        //             }
        //         })
        //     })
        // }(), function () {
        //     var t = new GMaps({div: "#m_gmap_8", lat: -12.043333, lng: -77.028333}), e = function () {
        //         var e = $.trim($("#m_gmap_8_address").val());
        //         GMaps.geocode({
        //             address: e, callback: function (e, o) {
        //                 if ("OK" == o) {
        //                     var n = e[0].geometry.location;
        //                     t.setCenter(n.lat(), n.lng()), t.addMarker({
        //                         lat: n.lat(),
        //                         lng: n.lng()
        //                     }), mUtil.scrollTo("m_gmap_8")
        //                 }
        //             }
        //         })
        //     };
        //
        // }()
        var location  = {lat: 31.519948, lng: 34.470852};
        map = new google.maps.Map(document.getElementById('map'), {
            center: location,
            zoom: 8
        });
        var marker = new google.maps.Marker({
            position: location,
            map: map,
            draggable:true
        });

        var searchBox = new google.maps.places.SearchBox(document.getElementById('searchMap'));
        google.maps.event.addListener(searchBox,'place_changed' , function () {
            var places = searchBox.getPlaces();
            var bounds = new google.map.LatLngBounds();
            var i , place ;

            for (i = 0 ; place = places[i] ; i++){
                bounds.extend(place.geometry.location);
                marker.setPosition(place.geometry.location);
            }
            map.fitBounds(bounds);

        })

    }
};
jQuery(document).ready(function () {
    GoogleMapsDemo.init()
});