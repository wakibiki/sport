// // Header Scroll
$('#header').scrollToFixed();

$(document).scroll(function(){
	if($(document).scrollTop() > 120) {
		$('#header').addClass('active');
		$('body').addClass('active-banner');
	}else {
		$('#header').removeClass('active');
		$('body').removeClass('active-banner');
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