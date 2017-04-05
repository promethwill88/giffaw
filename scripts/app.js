$(document).on("ready", function(){

	$('.btn').on('click', (element) => {
		element.preventDefault();
		$('.gif-gallery').empty();
		searchGif();	
    
   		function searchGif() {
		    // ajax call
		    $.ajax({

		    // What kind of request
		    method: "GET",

		    // The URL for the request
		    url: "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC",

		    // The data to send aka query parameters
		    data: $("form").serialize(),

		    // Code to run if the request succeeds;
		    // the response is passed to the function
		    success: onSuccess,

		    // Code to run if the request fails; the raw request and
		    // status codes are passed to the function
		    error: onError
		    
			});


			function onSuccess(json) {
				for(let i = 0; i < json.data.length; i++){
					let gif = json.data[i].images.fixed_height.url;
					$('.gif-gallery').append("<img src=" + gif + ">");
				}	

			}
			
			function onError(xhr, status, errorThrown) {
				alert("Sorry, there was a problem!");
				console.log("Error: " + errorThrown);
				console.log("Status: " + status);
				console.dir(xhr);
			}
		}	
	})
})

