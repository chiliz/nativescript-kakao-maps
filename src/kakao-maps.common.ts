export class Common {
  test() {
    console.log('Test common method');
  }
  //in google map
  //We need to have the possibility to create, remove and change the style of Markers on the map
  // kakao map api link - http://apis.map.kakao.com/web/sample/addMapClickEventWithMarker/
  generate_map(){
    var mapContainer = document.getElementById('map'), // display map
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // center location
        level: 3 // expand level
    };

    // generate map
    var map = new kakao.maps.Map(mapContainer, mapOption); 
    return map
  }
  
  //in google map
  //We need to have the possibility to create, remove and change styles of Circles on the map (In order to display destination in a way we want, not with a simple marker)
  // kakao map api link - http://apis.map.kakao.com/web/sample/drawShape/

  make_area(){
    var mapContainer = document.getElementById('map'), // display map
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // center location
        level: 3 // expand level
    };  

    var map = new kakao.maps.Map(mapContainer, mapOption); // generate map

    // generate circle in map
    var circle = new kakao.maps.Circle({
        center : new kakao.maps.LatLng(33.450701, 126.570667),  // center location of circle
        radius: 50, // radius of circle
        strokeWeight: 5, 
        strokeColor: '#75B8FA', 
        strokeOpacity: 1, 
        strokeStyle: 'dashed',
        fillColor: '#CFE7FF', 
        fillOpacity: 0.7  
    }); 

    // display circle in map
    circle.setMap(map); 


    // location array made of line. you can draw line use these location
    var linePath = [
        new kakao.maps.LatLng(33.452344169439975, 126.56878163224233),
        new kakao.maps.LatLng(33.452739313807456, 126.5709308145358),
        new kakao.maps.LatLng(33.45178067090639, 126.5726886938753) 
    ];

    // generate line
    var polyline = new kakao.maps.Polyline({
        path: linePath, // location array
        strokeWeight: 5, 
        strokeColor: '#FFAE00', 
        strokeOpacity: 0.7, 
        strokeStyle: 'solid'
    });

    // display line
    polyline.setMap(map);  


    var sw = new kakao.maps.LatLng(33.448842, 126.570379), // south-west location
        ne = new kakao.maps.LatLng(33.450026,  126.568556); // north-east location

    // generate area infomation
    
    // when you generate rectangle you should pass area infomation to LatLngBounds object
    var rectangleBounds = new kakao.maps.LatLngBounds(sw, ne);

    // generate rectangle
    var rectangle = new kakao.maps.Rectangle({
        bounds: rectangleBounds, // area infomation
        strokeWeight: 4, 
        strokeColor: '#FF3DE5',
        strokeOpacity: 1,
        strokeStyle: 'shortdashdot',
        fillColor: '#FF8AEF',
        fillOpacity: 0.8
    });

    // display rectangle
    rectangle.setMap(map);


    // location array generated polygon
    var polygonPath = [
        new kakao.maps.LatLng(33.45133510810506, 126.57159381623066),
        new kakao.maps.LatLng(33.44955812811862, 126.5713551811832),
        new kakao.maps.LatLng(33.449986291544086, 126.57263296172184),
        new kakao.maps.LatLng(33.450682513554554, 126.57321034054742),
        new kakao.maps.LatLng(33.451346760004206, 126.57235740081413) 
    ];

    // generate polygon
    var polygon = new kakao.maps.Polygon({
        path:polygonPath, // location array
        strokeWeight: 3, 
        strokeColor: '#39DE2A', 
        strokeOpacity: 0.8, 
        strokeStyle: 'longdash',
        fillColor: '#A2FF99',
        fillOpacity: 0.7 
    });

    // display poligon
    polygon.setMap(map);
  }
  //in google map
  //Need to have option to work with maps coordinates using Lat and Lng (To centre the map, or understand at what part of the map user is looking for and many more)
  // kakao map api link - http://apis.map.kakao.com/web/sample/moveMap/
  move_map(){
    var mapContainer = document.getElementById('map'),
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // center of map
        level: 3 // expand level
    };

    var map = new kakao.maps.Map(mapContainer, mapOption); // generate map

    function setCenter() {            
        // generate Latitude longitude to move

        var moveLatLon = new kakao.maps.LatLng(33.452613, 126.570888);
        
        // move center of map
        map.setCenter(moveLatLon);
    }

    function panTo() {
        // generate Latitude longitude to move

        var moveLatLon = new kakao.maps.LatLng(33.450580, 126.574942);
        
        // move center of map softly
        
        map.panTo(moveLatLon);            
    }   
  }
}