/* Код для бургера */

$(document).ready(function() {
  $('.menu__burger').click(function(event) { //обращаемся к .menu__burger и вешаем событие на клик
    $('.menu__burger, .menu__nav').toggleClass('active');
    $('body').toggleClass('lock'); // Обращение к body ,запрещаем скролл вниз когда открыт бургер  
  });
});


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
  adaptiveHeight: true,
  speed: 1000,
  draggable: true,
  variableWidth: true,
  waitForAnimate: true,
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

  next.css('left', prev.width() + 25 + bullets.width() +25 )
  bullets.css('left', prev.width() +25)

  new WOW().init();

/* $(document).ready(function(){
   $('.swiper-container').Swiper({
      dots: true,            // Точки(буллиты),показывать или нет.По умолчанию false-отключить.true-показывать.
      adaptiveHeight: true,  // Автоматическая адаптивная высота слайдера под слайд.
      slidesToShow:1,        // Кол-во слайдов,которые мы хотим увидеть за раз.
      slidesToScroll:1,      // Кол-во слайдов,которые будут пролистываться за 1 нажатие на стрелку.
      speed: 1000,           // Отвечает за скорость пролистывыния наших слайдов, в мс.
      initialSlide:1 ,       // Стартовый слайд,по умолчанию 0,отчет от 0.
      touchMove:true,        // Включает все возможности для тачскрина(телефон,планшет).
      centerMode:true,      // Слайдер один выстраивается по центру.
      slidesPerRow:2,        // Кол-во слайдов в ряду.
   });
}); */

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
      userPhone: {
        required: true,
        minlength: 17
      },
  
      modalPolicyСheckbox: {
        required: true,
      },
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
      },
      modalPolicyСheckbox: {
        required: "Примите пользовательское соглашение",
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          location.href = "thanks.html";
          $(form)[0].reset();
          modal.removeClass('modal--visible');
        },
      error: function (response) {
        console.error('Ошибка запроса' + response);
      }
      });
    }
  })

  /* submitHandler: function(form) {
      $.ajax({
        url: "send.php",
        type: 'POST', // метод передачи данных
        dataType: 'text', // тип ожидаемых данных в ответе
        data: $(form).serialize(), 
        error: function(req, text, error) { // отслеживание ошибок во время выполнения ajax-запроса4
            alert('Возникла ошибка!' + text + "-------" + req + "-------" + error)
            // location.reload();                
        },
        success:  function(json) {
            console.log(json);   
            setTimeout(function() {
                $("#loader").fadeOut(300)
                setTimeout(function() {
                    $('.quiz__final-container').fadeIn(300).css({display: 'flex'})
                }, 1000);
            }, 400);
        }
    });
    } */
  /* $('.modal__form').click(function() {
    if ($("#modal-policy-checkbox").is(':checked')) {
      $('#close').removeAttr('disabled');
    } else {
      $('#close').attr('disabled', 'disabled');
    }
  
  }); */


  // маска для телефона
  $('[type=tel]').mask('+7(000) 00-00-000',{placeholder: "Ваш номер телефона:"});

  // карта в footer 
  var isAddedMap = false;

  $(window).scroll(function() {
    var el = $('.map');
    if ($(this).scrollTop() > el.offset().top - 800) {
        if(isAddedMap) return;
        isAddedMap = true;
        var script = document.createElement('script');
        script.src ="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aee1e4443c3b3ec2d60161f14799acde251e0705e7aa25a59da214d2ab6427c6b&amp;width=100%25&amp;height=466&amp;lang=ru_RU&amp;scroll=false";
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
      userPhone: {
        required: true,
        minlength: 17,
      },
      // правило-объект (блок)
      userEmail: {
        required: true,
      },
      policyCheckbox: {
        required: true,
      },

    }, // сообщения 
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не более 15 символов"
      },
    policyCheckbox: {
          required: "Примите соглашение",
        },
      userPhone: "Телефон обязателен",
   
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          location.href = "thanks.html";
          $(form)[0].reset();
          modal.removeClass('modal--visible');
        },
      error: function (response) {
        console.error('Ошибка запроса' + response);
      }
      });
    }
  });


  /* $('.control__form').click(function() {
    if ($("#policy-checkbox").is(':checked')) {
      $('#send').removeAttr('disabled');
    } else {
      $('#send').attr('disabled', 'disabled');
    }
  }); */
  

// Footer форма

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
      userPhone: {
        required: true,
        minlength: 17
      },
      // правило-объект (блок)
      userEmail: {
        required: true,
        email: true
      },
      footerСheckbox: {
        required: true,
      },
      userquestion: {
        required: true, 
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
      userquestion: "Напишите свой вопрос",
      userPhone: "Телефон обязателен",
      footerСheckbox: {
      required: "Примите соглашение",
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          location.href = "thanks.html";
          $(form)[0].reset();
          modal.removeClass('modal--visible');
        },
      error: function (response) {
        console.error('Ошибка запроса' + response);
      }
      });
    }
  });

 /*  $('.footer__form').click(function() {
    if ($("#footer-policy-checkbox").is(':checked')) {
      $('#open').removeAttr('disabled');
    } else {
      $('#open').attr('disabled', 'disabled');
    }
  }) */
  var player;
  $('.video__play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '460',
      width: '100%',
      videoId: '-yUyRAO7HAQ',
      events: {
        'onReady': videoPlay,
      }
    });
  }
)
function videoPlay(event) { 
  event.target.playVideo();
}

// Прокрутка страницы вниз
$("body").on('click', '[href*="#scroll_bottom"]', function(e){
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});
 // Прокрутка до projects
$("body").on('click', '[href*="#projects"]', function(e){
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});
// Прокрутка до team 
$("body").on('click', '[href*="#team"]', function(e){
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});
// Прокрутка до client 
$("body").on('click', '[href*="#client"]', function(e){
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});
// Прокрутка до contacts
$("body").on('click', '[href*="#contacts"]', function(e){
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});

// Слайдер Slick
 $(document).ready(function(){
   $('.styles__slider').slick({
      dots: true,            // Точки(буллиты),показывать или нет.По умолчанию false-отключить.true-показывать.
      //adaptiveHeight: true,  // Автоматическая адаптивная высота слайдера под слайд.
      slidesToShow: 1,        // Кол-во слайдов,которые мы хотим увидеть за раз.АККУРАТНО с этой графой !!!
      slidesToScroll: 1,      // Кол-во слайдов,которые будут пролистываться за 1 нажатие на стрелку.  
      waitForAnimate: true,  // Быстро перематывать слайдер,не дожидаясь окончания анимации
      speed: 800,            // Отвечает за скорость пролистывыния наших слайдов, в мс.
      //initialSlide:3 ,     // Стартовый слайд,по умолчанию 0,отчет от 0.
      touchMove: true,       // Включает все возможности для тачскрина(телефон,планшет).
      centerMode: true,      // Слайдер один выстраивается по центру.
      slidesPerRow: 1,       // Кол-во слайдов в ряду.
      //variableWidth: true, // Автоматически подбирает высоту слайда
      //autoplay: 2000,      // Автоматическая прокрутка слайдера через опр.время
      pauseOnFocus: true,    // Слайдер перестанет перелистывать слайды,когда мы начнет клацать стрелки
   });
}); 


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
  