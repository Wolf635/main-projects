
/* JQuery код  */

$(document). ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle="modal"]'),
      closeBtn = $('.modal__close');

   modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
   });
   closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
});

$(window).scroll(function () {
  // Если отступ сверху больше 750px то показываем кнопку "Наверх"
  if ($(this).scrollTop() > 750) {
    $('.button--up').addClass('button--up--visible');  
    $('.button--up').fadeIn();
  } else {
      $('.button--up').fadeOut();
  }
});

/** При нажатии на кнопку мы перемещаемся к началу страницы */
$('.button--up').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 900);
    return false;
});

  // код слайдера
  var mySwiper = new Swiper ('.swiper-container', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  })
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() +10 )
  bullets.css('left', prev.width() +10)

  new WOW().init();

  // Валидация формы
  $('.modal__form').validate({
    errorClass: "invalid",
    errorElement: "em",
    rules: {
      //  строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // правило-объект (блок)
      userEmail: {
        required: true,
        email: true
      }
    }, // сообщения 
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя может содержать не более 15 символов"
      },
      userPhone: "Телефон обязателен",
      userEmail: {
        required: "Обязательно укажите email",
        email: "Введите корректный email: name@domain.com"
      }
    }, 
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          alert(' Форма отправлена, мы свяжемся с вами через 10 минут.');
          $(form)[0].reset();
          modal.removeClass('modal--visible');
        },
      error: function (response) {
        console.error('Ошибка запроса' + response);
      }
      });
    }
  });
  $('.modal__form').click(function() {
    if ($("#modal-policy-checkbox").is(':checked')) {
      $('#close').removeAttr('disabled');
    } else {
      $('#close').attr('disabled', 'disabled');
    }
  })
       




  // маска для телефона
  $('[type=tel]').mask('+7(000) 00-00-000',{placeholder: "+7 (___) __-__-___"});

  // карта в footer 
  var isAddedMap = false;

  $(window).scroll(function() {
    var el = $('.map');
    if ($(this).scrollTop() > el.offset().top - 800) {
        if(isAddedMap) return;
        isAddedMap = true;
        var script = document.createElement('script');
        script.src ="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aee1e4443c3b3ec2d60161f14799acde251e0705e7aa25a59da214d2ab6427c6b&amp;width=100%25&amp;height=450&amp;lang=ru_RU&amp;scroll=false";
        el.append(script);
      };
  });


  // Форма Онлайн контроль
  $('.control__form').validate({
    errorClass: "invalid",
    errorElement: "em",
    rules: {
      //  строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // правило-объект (блок)
      userEmail: {
        required: true,
      }
    }, // сообщения 
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не более 15 символов"
      },
      userPhone: "Телефон обязателен",
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          alert(' Форма отправлена, мы свяжемся с вами через 10 минут.');
          $(form)[0].reset();
          modal.removeClass('modal--visible');
        },
      error: function (response) {
        console.error('Ошибка запроса' + response);
      }
      });
    }
  });
  $('.control__form').click(function() {
    if ($("#policy-checkbox").is(':checked')) {
      $('#send').removeAttr('disabled');
    } else {
      $('#send').attr('disabled', 'disabled');
    }
  });

// Footer форма

  // Форма footer 

  $('.footer__form').validate({
    errorClass: "invalid",
    errorElement: "em",
    rules: {
      //  строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // правило-объект (блок)
      userEmail: {
        required: true,
        email: true
      },
      userquestion: {
        minlength: 2,
        maxlength: 100
      }
    }, // сообщения 
    errorElement: "em",
    errorClass: "invalid",
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух символов",
        maxlength: "Имя не более 15 символов"
      },
      userPhone: "Телефон обязателен",
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          alert(' Форма отправлена, мы свяжемся с вами через 10 минут.');
          $(form)[0].reset();
          modal.removeClass('modal--visible');
        },
      error: function (response) {
        console.error('Ошибка запроса' + response);
      }
      });
    }
  });
  $('.footer__form').click(function() {
    if ($("#footer-policy-checkbox").is(':checked')) {
      $('#open').removeAttr('disabled');
    } else {
      $('#open').attr('disabled', 'disabled');
    }
  })
});



/* ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [47.208901, 39.631539],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Наш офис',
            balloonContent: 'Вход со двора'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/marker.png',
            // Размеры метки.
            iconImageSize: [32, 32],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

    myMap.geoObjects
        .add(myPlacemark);
      
  }); */