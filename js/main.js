console.log('main');
jQuery(document).ready(function($) {

  $('body').prepend('<div class="overlay overlay-sunny"></div>');
  $('.overlay').css('height', $(document).height() + 'px');

  $("#slider").slider({min: 1, max: 4, step: 1});

  $("#slider").on( "slidechange", function( event, ui ) {
    if (ui.value == 1) {
      $('.overlay').attr('class', 'overlay overlay-sunny');
    }
    else if (ui.value == 2) {
      $('.overlay').attr('class', 'overlay overlay-partly-cloudy');
    }
    else if (ui.value == 3) {
      $('.overlay').attr('class', 'overlay overlay-cloudy');
    }
    else if (ui.value == 4) {
      $('.overlay').attr('class', 'overlay overlay-stars');
    }
  } );

  $('.slider-labels a').on('click touchstart', function(e) {
    $("#slider").slider( "value", $(this).data('slider') );
    return false;
  });

  $('.select-band a').on('click', function(e) {
    $('.select-band a').removeClass('active');
    $(this).addClass('active');
    $('.select-band a').tooltip('hide');
    if ($(this).hasClass('available')) {
      $('.btn-start').removeClass('btn-disabled');
    }
    else {
      $('.btn-start').addClass('btn-disabled');
      return false;
    }
  });

  $('[data-toggle="tooltip"]').tooltip({
    trigger: 'click',
    html: true
  });

  $(document.body).on('click', '.btn-map-hydro' ,function(){
    $(".video").fitVids();
    $('.side-panel').css('height', $('#dialog-hydropower').height());
    $.magnificPopup.open({
      type: 'inline',
      fixedContentPos: false,
      fixedBgPos: true,
      overflowY: 'auto',
      closeBtnInside: true,
      preloader: false,
      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-zoom-in',
      callbacks : {
        open: function() {
          $('.side-panel').css('height', $('#dialog-hydropower').height());
        }
      },
      items: {
        src: '#dialog-hydropower'
      }
    });
    return false;
  });

  $(document.body).on('click', '.btn-map-acquatic' ,function(){
    $(".video").fitVids();
    $('.side-panel').css('height', $('#dialog-acquatic').height());
    $.magnificPopup.open({
      type: 'inline',
      fixedContentPos: false,
      fixedBgPos: true,
      overflowY: 'auto',
      closeBtnInside: true,
      preloader: false,
      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-zoom-in',
      callbacks : {
        open: function() {
          $('.side-panel').css('height', $('#dialog-acquatic').height());
        }
      },
      items: {
        src: '#dialog-acquatic'
      }
    });
    return false;
  });

  $(document.body).on('click', '.btn-map-sturgeon' ,function(){
    $(".video").fitVids();
    $('.side-panel').css('height', $('#dialog-sturgeon').height());
    $.magnificPopup.open({
      type: 'inline',
      fixedContentPos: false,
      fixedBgPos: true,
      overflowY: 'auto',
      closeBtnInside: true,
      preloader: false,
      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-zoom-in',
      callbacks : {
        open: function() {
          $('.side-panel').css('height', $('#dialog-sturgeon').height());
        }
      },
      items: {
        src: '#dialog-sturgeon'
      }
    });
    return false;
  });

});
