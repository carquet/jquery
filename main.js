$(document).ready(function(){
	$('select').change(function(){
		//get the value of the drop down menu
		var dropValue = $(this).val()

		//get the html from Ajax call and append it to current html
		function handleSuccess(response){
			var response = response;
			var boxLocalidades = 
			$('#box_localidades').empty()
									.append(response);
		};


		function handleError(err){
			console.log('err')
		};

		$.ajax({
			type: "GET",
			url: 'http://sitelicon.eu/test/ajax_localidades.php/?id='+ dropValue,
			success: handleSuccess,
			error: handleError
			})
	
	})
})