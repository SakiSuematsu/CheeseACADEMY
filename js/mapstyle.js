//実行関数
function initialize() {

    const google = window.google;

    //緯度経度の変数
    const latLng = {
        lat: 35.706633,
        lng: 139.782243
    };

    //緯度経度を設定
    let map = new google.maps.Map(document.getElementById('js-map-taeget'), {
        center: latLng,
        zoom: 18
    });

    //表示するマップ
    map.setMapTypeId('js-map-taeget');
}

initialize();