$(document).ready(function() {

	// {"title":" ","url":" ","imgsrc":" ","subtitle":" ","contenthtml":" "}, 

	$.getJSON("http://zevpogrebin.com/data/projectdata.json", function(status) { //change url to fix
		status = 
		//Console Log status
		console.log(status.status);
		//handle creating html
		("#status").append('<span style="color: '+status.color+';">'+status.status+'</span>');
	});
	
});