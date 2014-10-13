function goToByScroll(id){
	$('html,body').animate({scrollTop: $("#"+id).offset().top},'slow');
}

$(document).ready(function () {
	console.log("blah");
	$(".slide-box").click(
		function (event) {
			var strId = $(this).attr("id");
			var idn = strId.split("slide")[1];
			var intIdn = parseInt(idn);
			var next_id = "slide" + (intIdn+1).toString();
			goToByScroll(next_id);
	});
});



