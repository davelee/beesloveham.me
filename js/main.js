var numSlides = 3;

function goToByScroll(id){
	$('html,body').animate({scrollTop: $("#"+id).offset().top},'slow');
}

$(document).ready(function () {
	$(".slide-box").click(
		function (event) {
			var strId = $(this).attr("id");
			var idn = strId.split("slide")[1];
			var intIdn = parseInt(idn);
			intIdn = (intIdn == numSlides) ? 1 : intIdn+1;
			var next_id = "slide" + intIdn.toString();
			goToByScroll(next_id);
	});
});



