
$(document).ready(function() {
	var results = $('.results');
	$('.start').click(function(){
		for (i=1; i<=100; i++){
			if (i%5 == 0 && i%3 == 0) {
				results.append('<li>FizzBuzz</li>').fadeIn()
			}
			else if (i%3 == 0) {
				results.append('<li>Fizz</li>').fadeIn()
			}
			else if (i%5 == 0) {
				results.append('<li>Buzz</li>').fadeIn()
			}
			
			else {
				results.append('<li>'+i+'</li>').fadeIn()
			}
		};
	});
});


