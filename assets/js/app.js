$(document).ready(function(){
	var imgItems = $('.slider li').length;
	var imgPosition = 1;

	for(i = 0; i < imgItems; i++){
		$('.pagination').append('<li><i class="fa fa-square" aria-hidden="true"></i></li>');
	}

	$('.slider li').hide();
	$('.slider li:first').show();
	$('.pagination li:first').css({'color': '#CD6E2E'});


	$('.pagination li').click(pagination);
	$('.right span').click(nextSlider);
	$('.left span').click(prevSlider);

	setInterval(function(){
		nextSlider();
	}, 8000);

	function pagination(){
		var paginationPosition = $(this).index() + 1;

		$('.slider li').hide();
		$('.slider li:nth-child('+ paginationPosition +')').fadeIn();

		$('.pagination li').css({'color': '#858585'});
		$(this).css({'color': '#CD6E2E'});

		imgPosition = paginationPosition;

	}

	function nextSlider(){
		if( imgPosition >= imgItems){
            imgPosition = 1;
        }
		else {
            imgPosition++;
        }

		$('.pagination li').css({'color': '#858585'});
		$('.pagination li:nth-child(' + imgPosition +')').css({'color': '#CD6E2E'});

		$('.slider li').hide();
		$('.slider li:nth-child('+ imgPosition +')').fadeIn();
	}

	function prevSlider(){
		if( imgPosition <= 1){
            imgPosition = imgItems;
        }
		else {
            imgPosition--;
        }

		$('.pagination li').css({'color': '#858585'});
		$('.pagination li:nth-child(' + imgPosition +')').css({'color': '#CD6E2E'});

		$('.slider li').hide();
		$('.slider li:nth-child('+ imgPosition +')').fadeIn(); 
	}

});
