$(document).ready(function () {

	//насколько понял что нужно сделать
	$(window).on('mousemove',function(event){
		let widthW = $(window).width();
		$(".js-scroll-animate-block").each(function(){
			let elemX = $(this).data('move-x'),
			 elemY = $(this).data('move-y');
			 $(this).css('transform', `translate(${event.clientX/widthW * elemX}px,${event.clientY/widthW * elemY}px)`);
		});
	});
	

	$('.owl-carousel').owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		navText: ["<img src='assets/img/right-arrow.svg'>","<img src='assets/img/right-arrow.svg'>"],
		dots: true,
		responsive:{
			0:{
				nav:false,
				dots: false,
			},
			768:{
				nav:true,
				dots: true,
			},
		}
	});

});
