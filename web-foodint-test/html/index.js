
$(document).ready(function() {
	$('#form').submit(function(event) {
		event.preventDefault();
		var t = $('#search').val();
		console.log(t)
		$('#results').html('<div></div>');
		$.ajax({'url': '/j/find', 'type': 'POST', 'data': JSON.stringify({'t': t}),
			'contentType': 'application/json; charset=utf-8', 'dataType': 'json',
			'success': function(data) {
				console.log(data);
				var a = $('#results').children();
				console.log(a);
				for (var i=0, I=data.length; i<I; i++) {
					a.after('<div><small>'+JSON.stringify(data[i])+'</small></div>');
				}
			}
		});
	});
});
