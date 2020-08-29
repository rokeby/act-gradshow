
var x = top.location.pathname

if (x !== '/')

{
		$(".Heading").click( function() {
		console.log("Go to Work!")
			$(".parallax").animate({
				scrollTop: $(".Work").offset().top + -20
			}, 300);
		});
}

 else {

		$(".Heading").click( function() {
		console.log("Go to Main!")
				$(".parallax").animate({
				scrollTop: $(".Main").offset().top + -20
			}, 300);
		})
}
