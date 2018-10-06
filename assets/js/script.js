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