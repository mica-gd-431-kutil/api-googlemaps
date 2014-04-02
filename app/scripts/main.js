'use strict';

/*
Self Executing function
(function (){
	
})();
*/

(function ($) {
    var makeMap,
        likesArr = [];
	
	makeMap = function makeMapF() {
    	var markerArr = [{
	    	title: 'mica',
	    	lng: -76.621495,
	    	lat: 39.307516
    	},{
	    	title: 'inner harbor',
	    	lng: -76.608417,
			lat: 39.286931
    	}];
    	
    	
	    var map = new GMaps({
		    el: '#map',
		    lng: -76.621495,
		    lat: 39.307516
	    });
	    
	    for (var i = markerArr.length; i--;) {
	    	console.log('iterator = ' + i, markerArr[i]);
	    	
		    map.addMarker({
			    lng: markerArr[i].lng,
			    lat: markerArr[i].lat,
			    title: markerArr[i].title,
			    infoWindow: {
				    content: markerArr[i].title
			    }
		    });
	    }
    };

    makeMap();

})(jQuery);
