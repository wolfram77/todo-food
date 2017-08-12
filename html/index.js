$(document).ready(function() {
	var query = ace.edit('query');
	query.setOptions({
		'enableBasicAutocompletion': true
	});
	query.setTheme('ace/theme/github');
	query.getSession().setMode('ace/mode/sql');
	var addIng = ace.edit('add-ing');
	addIng.setTheme('ace/theme/github');
	addIng.getSession().setMode('ace/mode/text');
	var addNut = ace.edit('add-nut');
	addNut.setTheme('ace/theme/github');
	addNut.getSession().setMode('ace/mode/text');
	console.log('done');
});
