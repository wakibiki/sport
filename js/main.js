// // Header Scroll
$('#header').scrollToFixed();

(function($){
  $(document).ready(function(){
    $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
      event.preventDefault(); 
      event.stopPropagation(); 
      $(this).parent().siblings().removeClass('open');
      $(this).parent().toggleClass('open');
    });
  });
})(jQuery);

$(document).scroll(function(){
	if($(document).scrollTop() > 120) {
		$('#header').addClass('active');
	}else {
		$('#header').removeClass('active');
	}
});

$('.video_slider').slick({
  autoplay: true,
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
  {
    breakpoint: 1024,
    settings: {
      arrows: true,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 2
    }
  },
  {
    breakpoint: 768,
    settings: {
      arrows: true,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 1
    }
  }
  ]
});

$('.matchHeight').matchHeight();


$('.btn-toggle').click(function() {
    $(this).find('.btn').toggleClass('active');  
    
    if ($(this).find('.btn-primary').length>0) {
      $(this).find('.btn').toggleClass('btn-primary');
    }
       
});

$('form').submit(function(){
  var radioValue = $("input[name='options']:checked").val();
  if(radioValue){
     alert("You selected - " + radioValue);
   };
    return false;
});


