$(function() {

	// ibg class
		if('objectFit' in document.documentElement.style === false){
		  Array.prototype.forEach.call(document.querySelectorAll('._fit'), function(el){

		    var image = el.querySelector('_fit-img');
		    el.style.backgroundImage = 'url("'+image.src+'")';
		    el.classList.add('ibg');
		    el.classList.remove('_fit');
 		 });
		}
	// End ibg class

	// .webp browser support detection
		function testWebP(callback) {
			var webP = new Image(); 
			webP.onload = webP.onerror = function () {
			 callback(webP.height == 2); 
			}; 
			webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
		}

		testWebP(function (support) {
			if (support == true) {
			 document.querySelector('body').classList.add('webp'); 
			}else{ 
				document.querySelector('body').classList.add('no-webp'); 
			}
		});
	
	// END .webp browser support detection

	// service slider
		if($('.service-slider').length > 0){
			$('.service-slider').slick({
				slidesToScroll: 1,
				slidesToShow: 1,
				fade: true
			});
		}
	// END service slider

	// profiles slider
		if($('.product-kinds-slider').length > 0){
			$('.product-kinds-slider').slick({
				slidesToScroll: 1,
				slidesToShow: 2,
				responsive: [
		
					{
						breakpoint: 481,
						settings: {
							
							slidesToShow: 1

						}	
					},
				]
			});
		}
	// END profiles slider

	// colors slider
		if($('.product-colors-slider').length > 0){
			$('.product-colors-slider').slick({
				slidesToScroll: 1,
				slidesToShow: 4,
				responsive: [
		
					{
						breakpoint: 1101,
						settings: {
							
							slidesToShow: 3

						}	
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 4
						}	
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 3
						}	
					},
					{
						breakpoint: 577,
						settings: {
							slidesToShow: 2
						}	
					},
					{
						breakpoint: 321,
						settings: {
							slidesToShow: 1
						}	
					}
				]
			});
		}
	// END colors slider


});

$(window).load(function() {
	// sticky-sidebar
		if($('.ukom-page-sidebar__inner').length > 0){
			$('.ukom-page-sidebar').stickySidebar({
			    topSpacing: 70,
			    // bottomSpacing: 100,
			    minWidth: 991
			});
		}
	// END sticky-sidebar

});
