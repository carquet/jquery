$(document).ready(function(){
	$('select').change(function(){
		//get the value of the drop down menu
		var dropValue = $(this).val()

		//get the html from Ajax call and append it to current html
		$.ajax({
			type: "GET",
			url: 'http://sitelicon.eu/test/ajax_localidades.php/?id='+ dropValue,
			success: function(response){
			var response = response;
			var boxLocalidades = $('#box_localidades').empty().append(response);
			},
			error: handleError(err){
			console.log('err')
			}
		})
	})
})