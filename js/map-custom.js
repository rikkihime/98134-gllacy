ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
    center: [59.93864690819559,30.32299012698361],
//    center: [59.938668442000946,30.32891244448849],
    zoom: 16
  }, {
    searchControlProvider: 'yandex#search'
  }),
      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Магазин мороженого Glacy Shop',
        balloonContent: 'www.htmlacademy.ru'
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/map-pin.svg',
        // Размеры метки.
        iconImageSize: [79, 139],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-39, -139]
      });


  myMap.geoObjects.add(myPlacemark);
  myMap.setCenter([59.939338443001946,30.32927244448849], 16, {
    checkZoomRange: true
  });
});

