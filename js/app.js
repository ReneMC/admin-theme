// Navbar button action
$(document).ready(function () {
	$('[data-toggle="offcanvas"]').click(function () {
		$('#side-menu').toggleClass('hidden-xs');
	});
});

// Chosen Select configuration
var config = {
	'.chosen-select' : {},
	'.chosen-select-deselect' : {allow_single_deselect: true},
	'.chosen-select-no-single' : {disable_search_treshold: 10},
	'.chosen-select-no-result' : {no_results_text: 'Oops, nothing found!'},
	'.chosen-select-width' : {width: "95%"}
}
for (var selector in config) {
	$(selector).chosen(config[selector]);
}