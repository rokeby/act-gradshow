if (top.location.pathname !== '/act-gradshow/')
{
		$(".Heading").click( function() {
		console.log("Go to Work!")
			$(".parallax").animate({
				scrollTop: $(".Work").offset().top + -20
			}, 300);
		});
}
 else {

		$(".Portal").click( function() {
		console.log("clicked portal!")
		$(".parallax").animate({
			scrollTop: '0px'
		}, 600);
		});

		$(".Heading").click( function() {
		console.log("Go to Main!")
				$(".parallax").animate({
				scrollTop: $(".Main").offset().top + -20
			}, 300);
		})
}

