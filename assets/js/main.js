$(document).foundation();
      $('.js-phone').mask('(000) 000-0000');
      $('.form').validate();
      $(document).ready(function() {
        $(".tabs_panel-carousel").owlCarousel({
            autoPlay: 3000,
            items : 6,
            itemsDesktop : [1199,3],
            itemsDesktopSmall : [979,3],
            navigation: true,
            navigationText: ['prev', 'next']
          });

        });
var submit = document.querySelector('.js-submit'),
    form = document.querySelector('.form');

    form[4].addEventListener('click', function(event){
      if(form[0].value && form[1].value && form[2].value) {

        document.querySelector('.hiden__block').style.display = 'block';
        document.querySelector('.hiden__block-name').innerHTML = 'Имя: ' + form[0].value;
        document.querySelector('.hiden__block-tel').innerHTML = 'Номер телефона: ' + form[1].value;
        document.querySelector('.hiden__block-email').innerHTML = 'Почта: ' + form[2].value;
        event.preventDefault();
        return false;
      }
    });