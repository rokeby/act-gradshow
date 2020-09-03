// make page stop at the end of logos
$( window ).on('load', function() {

	setTimeout( function() {
		footerPos = $('.Footer').position().top;
		pageEnd = footerPos + ($('.Footer').height()*2) - $(window).height();
		// console.log("Footer at: " + footerPos)
		// console.log("viewPort at: " + $(window).height())
		// console.log("pageEnd at: " + pageEnd)

		$('.parallax').scroll(function() {
			x = $('.parallax').scrollTop();
		  // console.log("scrollTop: " + x);
			if (x > pageEnd) {
				$('.parallax').scrollTop(pageEnd )
				// console.log("the end is here")
			}});
	},1000)

})

// Randomise bg
$( window ).ready( function() {

	var bg = ["<img src='/assets/img/bg/tree2.jpg'/>","<img src='/assets/img/bg/tree3.jpg'/>","<img src='/assets/img/bg/tree4.jpg'/>","<img src='/assets/img/bg/tree5.jpg'/>","<img src='/assets/img/bg/tree8.jpg'/>","<img src='/assets/img/bg/tree9.jpg'/>","<img src='/assets/img/bg/tree10.jpg'/>"]
	var fore = ["<img src='/assets/img/bg/fore.png'/>","<img src='/assets/img/bg/fore2.png'/>","<img src='/assets/img/bg/fore3.gif'/>","<img src='/assets/img/bg/fore4.gif'/>","<img src='/assets/img/bg/fore5.png'/>","<img src='/assets/img/bg/fore6.gif'/>","<img src='/assets/img/bg/fore7.png'/>"]

	var randoBg = bg[Math.floor(Math.random()* bg.length)];
	var randoFore = fore[Math.floor(Math.random()* fore.length)];

	console.log(randoFore)
	console.log(randoBg)

	for (var i = 0; i < 10; i++) {
		$('.parallax__layer--base').append(randoFore)
		$('.parallax__layer--deep').append(randoBg)
	}
})

// Click Heading for scrolldown
if (x !== '/') {
		$(".Heading").click( function() {
			$(".parallax").animate({
				scrollTop: $(".Work").offset().top + -20
			}, 300);
		});
} else {
		$(".Heading").click( function() {
				$(".parallax").animate({
				scrollTop: $(".Main").offset().top + -20
			}, 300);
		})
}

// Emma videos volume on click
var x = top.location.pathname;
if (x == "/emma-yimeng-zhu/") {
	var video1 = new Vimeo.Player($('#video1'));
	var video2 = new Vimeo.Player($('#video2'));
	var video3 = new Vimeo.Player($('#video3'));
	var video4 = new Vimeo.Player($('#video4'));

	$( '.Emma-Overlay' ).click( function() {
				video1.setVolume(1)
				video2.setVolume(1)
				video3.setVolume(1)
				video4.setVolume(1)
			})
}
