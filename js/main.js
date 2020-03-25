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
    } 
  });
  $('.modal__form').click(function() {
    if ($("#modal-policy-checkbox").is(':checked')) {
      $('#send').removeAttr('disabled');
    } else {
      $('#send').attr('disabled', 'disabled');
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
  $('.control__form').click(function() {
    if ($("#policy-checkbox").is(':checked')) {
      $('#send').removeAttr('disabled');
    } else {
      $('#send').attr('disabled', 'disabled');
    }
  });

// Создание яндекс карты
 // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.76, 37.64],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 7
        });
    }
});