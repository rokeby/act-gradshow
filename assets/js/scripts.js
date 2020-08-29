$( window ).on('load', function() {

	setTimeout( function() {

		footerPos = $('.Footer').position().top;
		pageEnd = footerPos + ($('.Footer').height()*2) - $(window).height();
				console.log("Footer at: " + footerPos)
				console.log("viewPort at: " + $(window).height())
				console.log("pageEnd at: " + pageEnd)

		$('.parallax').scroll(function() {
			x = $('.parallax').scrollTop();
		  console.log("scrollTop: " + x);
			if (x > pageEnd) {
				$('.parallax').scrollTop(pageEnd )
				console.log("the end is here")
			}
		})

	},1000)

})

var x = top.location.pathname;
if (x !== '/') {
		$(".Heading").click( function() {
		console.log("Go to Work!")
			$(".parallax").animate({
				scrollTop: $(".Work").offset().top + -20
			}, 300);
		});
} else {
		$(".Heading").click( function() {
		console.log("Go to Main!")
				$(".parallax").animate({
				scrollTop: $(".Main").offset().top + -20
			}, 300);
		})
}

if (x == "/emma-yimeng-zhu") {
	var video1 = new Vimeo.Player($('#video1'));
	var video2 = new Vimeo.Player($('#video2'));
	var video3 = new Vimeo.Player($('#video3'));
	var video4 = new Vimeo.Player($('#video4'));

	$( '.Emma-Overlay' ).click( function() {
				video1.play()
				video2.play()
				video3.play()
				video4.play()
})
}
