;(function($){

  var btnMenu = $('#btn-menu'),
      menu = $('.header-menu');
     
   

      
       btnMenu.on('click', function(){
            menu.toggle();
           
        });
      
      
       $('select').select2();

    // SMOOTH ANCHOR SCROLLING
    var $root = $('html, body');
    $('a.anchor').click(function(e) {
        var href = $.attr(this, 'href');
        if (typeof($(href)) != 'undefined' && $(href).length > 0) {
            var anchor = '';

            if (href.indexOf("#") != -1) {
                anchor = href.substring(href.lastIndexOf("#"));
            }

            if (anchor.length > 0) {
                console.log($(anchor).offset().top);
                console.log(anchor);
                $root.animate({
                    scrollTop: $(anchor).offset().top
                }, 500, function() {
                    window.location.hash = anchor;
                });
                e.preventDefault();
            }
        }
    });

    // mini-contact form
  /*$('.mini-contact__btn').on('click', function (e) {
      
      $(this).toggleClass('open');
      $('.mini-contact').toggleClass('open');;    
  });
  
  $('.mini-contact__close').on('click', function (e) {
      
      $('.mini-contact__btn').removeClass('open');
      $('.mini-contact').removeClass('open');    
  });*/

   // Forms with ajax process
    $('form[data-remote]').on('submit', function(e){
        var form =$(this);
        var method = form.find('input[name="_method"]').val() || 'POST';
        var url = form.prop('action');
        form.find('.loader').show();
        $.ajax({
            type: method,
            url: url,
            data: form.serialize(),
            success: function(){
                var message = form.data('remote-success-message');
                form.find('.loader').hide();
                if(message)
                {

                    $('.response').removeClass('message-error').addClass('message-success').html(message).fadeIn(300).delay(4500).fadeOut(300);
                }
            },
            error:function(){
                form.find('.loader').hide();
                $('.response').removeClass('message-success').addClass('message-error').html('Whoops, looks like something went wrong.').fadeIn(300).delay(4500).fadeOut(300);

            }
        });

        limpiaForm(form);

        e.preventDefault();
    });

    $('input[data-confirm], button[data-confirm]').on('click', function(e){
       var input = $(this);

        input.prop('disabled','disabled');

        if(! confirm(input.data('confirm'))){
            e.preventDefault();
        }
    });

    function limpiaForm(miForm) {

        // recorremos todos los campos que tiene el formulario
        $(":input", miForm).each(function() {
            var type = this.type;
            var tag = this.tagName.toLowerCase();
            //limpiamos los valores de los campos…
            if (type == 'text' || type == 'password'  || type == 'email' || tag == 'textarea')
                this.value = "";
            // excepto de los checkboxes y radios, le quitamos el checked
            // pero su valor no debe ser cambiado
            else if (type == 'checkbox' || type == 'radio')
                this.checked = false;
            // los selects le ponesmos el indice a -
            else if (tag == 'select')
                this.selectedIndex = -1;
        });
    }
      
      
      

    //$(".chosen-select").chosen();
    
    //SCROLL WINDOW FUNCTIONALITY
    function isHome(){
      return $('body').hasClass('home');
    }
   

    
    $('.intro__video').css('opacity', '0');
    $(window).load(function() {
     
      
      $('.preloader').addClass('animated fadeOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $('.preloader').hide();
        $('.intro__video').addClass('animated fadeIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          //$('.intro-tables').addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
        });
      });
      resizes();

    });

    $(window).resize(resizes);

    function resizes()
     {
      
      
          
      

     }

// FUNCTION FOR More info

   

    $(".owl-carousel").owlCarousel({
      animateOut: 'fadeOut',
      items : 1,
      autoplay : true,
      autoplayTimeout: 4000,
      loop : true,
      nav : true,
      navText : ['','']
      /*onChange : function (e) {
        console.log(e.target);
        $('.owl-item.active span').addClass('animated');
        $('.owl-item.active h1').addClass('animated');
      }*/
      /*slideSpeed : 300,
      paginationSpeed : 400,*/
      /*singleItem:true*/
  });

     





})(jQuery);


function getScrollerWidth() {
  var scr = null;
  var inn = null;
  var wNoScroll = 0;
  var wScroll = 0;

  // Outer scrolling div
  scr = document.createElement('div');
  scr.style.position = 'absolute';
  scr.style.top = '-1000px';
  scr.style.left = '-1000px';
  scr.style.width = '100px';
  scr.style.height = '50px';
  // Start with no scrollbar
  scr.style.overflow = 'hidden';

  // Inner content div
  inn = document.createElement('div');
  inn.style.width = '100%';
  inn.style.height = '200px';

  // Put the inner div in the scrolling div
  scr.appendChild(inn);
  // Append the scrolling div to the doc
  document.body.appendChild(scr);

  // Width of the inner div sans scrollbar
  wNoScroll = inn.offsetWidth;
  // Add the scrollbar
  scr.style.overflow = 'auto';
  // Width of the inner div width scrollbar
  wScroll = inn.offsetWidth;

  // Remove the scrolling div from the doc
  document.body.removeChild(
    document.body.lastChild);

  // Pixel width of the scroller
  return (wNoScroll - wScroll);
}

function getWindowHeight() {
  var windowHeight=0;
  if (typeof(window.innerHeight)=='number') {
    windowHeight=window.innerHeight;
  } else {
    if (document.documentElement && document.documentElement.clientHeight) {
      windowHeight = document.documentElement.clientHeight;
    } else {
      if (document.body && document.body.clientHeight) {
        windowHeight=document.body.clientHeight;
      }
    }
  }
  return windowHeight;
}

function getWindowWidth() {
  var windowWidth=0;
  if (typeof(window.innerWidth)=='number') {
    windowWidth=window.innerWidth;
  } else {
    if (document.documentElement && document.documentElement.clientWidth) {
      windowWidth = document.documentElement.clientWidth;
    } else {
      if (document.body && document.body.clientWidth) {
        windowWidth=document.body.clientWidth;
      }
    }
  }
  return windowWidth;
}

