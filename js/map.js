var currentWindow = null;
var Center = {lat:35.700108,lng:139.576034};
var markers = [
       {
       name: '三鷹駅 ',
       lat: 35.702716,
        lng: 139.561029,
        ave:'77772',
 }, {
        name: '三鷹台駅',
      lat: 35.692245,
        lng:139.588921,
       ave:'71225',
 }, {
    　name: '井の頭公園駅',
      lat: 35.697512 ,
      lng: 139.582743,
      ave:'68191',
 }
]; 
var map=null;
var myButton = document.querySelector('button');
console.log('myButton');


function six(){
    console.log('six');
    for(var i=0;i<markers.length;i++){
     var name = markers[i].name;
     var ave = markers[i].ave;
     var latlng = new google.maps.LatLng(markers[i].lat,markers[i].lng);
         if(ave<70000){
             var icons ='./train1.png';
             createMarker(name,latlng,icons,map,ave);
};
    }
}

myButton.onclick = six();

function initialize() {
       map = new google.maps.Map(document.getElementById('map_canvas'),{
        center: Center,
        zoom:13
       }); 
    console.log(map);
/*
    for(var i=0;i<markers.length;i++){
     var name = markers[i].name;
     var ave = markers[i].ave;
     var latlng = new google.maps.LatLng(markers[i].lat,markers[i].lng);
         if(ave<70000){
             var icons ='./train1.png';
             createMarker(name,latlng,icons,map,ave);
    } else if(ave > 70000){
        var icons ='./train2.png';
         createMarker(name,latlng,icons,map,ave);
    }
}
*/
}


function createMarker(name,latlng,icons,map,ave){

    var infoWindow = new google.maps.InfoWindow({
        content: '家賃相場 : '+ave+'円',
    }); //情報ウィンドウ生成
  
    var marker = new google.maps.Marker({
        position: latlng,
        icon:{
            url:icons,
            scaledSize : new google.maps.Size(60, 36)},
       　   map: map});//マーカーを作成
    google.maps.event.addListener(marker, 'click', function() {//地図上のmarkerがクリックされると｛｝内の処理を実行
        if (currentWindow) {
            currentWindow.close();
    }     
        infoWindow.open(map,marker); //マーカーに情報ウィンドウを表示
        currentWindow = infoWindow;
        map.panTo(latlng); //地図の中心
});
}
