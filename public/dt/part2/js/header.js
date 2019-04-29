let showHeader = true;


function toggleHeader() {
	showHeader = !showHeader;

	if (showHeader) {
		$('#header').css('display', 'block');
		$('#header-toggle').html(`
			Hide info
			<i class="material-icons right">arrow_drop_up</i>
		`);
	}
	else {
		$('#header').css('display', 'none');
		$('#header-toggle').html(`
			Show info
			<i class="material-icons right">arrow_drop_down</i>
		`);
	}
}

$('#header-toggle').click('on', toggleHeader);
