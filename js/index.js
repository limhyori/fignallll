$(document).ready(function () {
	$(".play").on("click", function () {
		$(".song")[0].play();
	})

	$(".pause").on("click", function () {
		$(".song")[0].pause();
	})
})

