function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();

		reader.onload = function (e) {
			$('.favicon')
				.attr('src', e.target.result)
				.width(16)
				.height(16);
		};

		reader.readAsDataURL(input.files[0]);
	}
}

$('document').ready(function() {
	$('.custom').click(function() {
		var customURL = $('.customURL').val();
		$('.favicon')
			.attr('src', customURL)
			.width(16)
			.height(16);
	});
	$('.custom').click(function(){
		if( $('.customURL').val().length === 0 ) {
		    $('.favicon').attr('src', 'assets/images/google-favicon.svg');
		}
	});
	$(".customURL").keydown(function(e){
	    if(e.which === 13){
	        $(".custom").click();
	    }
	});
	$('.about').on('click', function() {
		$('.overlay').show();
		$('.overlay-bg').addClass('in');
		$('.overlay-container').addClass('in');
	});
	$('.overlay-bg, .close-overlay').on('click', function() {
		$('.overlay').hide();
		$('.overlay-bg').removeClass('in');
		$('.overlay-container').removeClass('in');
	})
})