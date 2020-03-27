/*document.addEventListener("DOMContentLoaded", function(event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal); 
      
  });  
  closeBtn.addEventListener('click', switchModal);


}); 
*/


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
          console.log('Ajax сработал. Ответ сервера: '+ response);
          alert(' Форма отправлена, мы свяжемся с вами через 10 минут.');
          $(form)[0].reset();
          modal.removeClass('modal--visible');
        }
      });
    }
  });



  // маска для телефона
  $('[type=tel]').mask('+7(000) 00-00-000',{placeholder: "+7 (___) __-__-___"});

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

  // Форма Онлайн контроль
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
      }
    }, // сообщения 
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не более 15 символов"
      },
      userPhone: "Телефон обязателен",
    } 
  });
  $('.footer__form').click(function() {
    if ($("#footer-policy-checkbox").is(':checked')) {
      $('#open').removeAttr('disabled');
    } else {
      $('#open').attr('disabled', 'disabled');
    }
  
  })

  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [47.244700, 39.723169],
        zoom: 18
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
                iconImageHref: 'img/marker.jpg',
            // Размеры метки.
            iconImageSize: [32, 32],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

    myMap.geoObjects
        .add(myPlacemark)
});
});
