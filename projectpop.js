$(document).ready(function() {

	// {"title":" ","url":" ","imgsrc":" ","subtitle":" ","contenthtml":" "}, 

	$.getJSON("http://zevpogrebin.com/data/sitestatus.json", function(projectarray) { //change url to fix
		var title, imgsrc, subtitle, url;
		for (var i = 0; i < projectarray.length; i++) {
			title = projectarray[i].title;
			imgsrc = projectarray[i].imgsrc;
			subtitle = projectarray[i].subtitle;
			url = projectarray[i].url;
			year = projectarray[i].year;
			tags = projectarray[i].tags;
			//Console Log Page Names
			console.log(i+", "+title+", "+subtitle+", "+imgsrc+", "+url+", ");
			//handle creating html for each square
			if (url != "") {
				$("article").append(
					'<a href="'+url+'">' +
						'<div class="projectsquare">' + 
							'<div class="projectsquaresend"><p>&#x21F1;</p></div>'+
							'<div class="projectsquareflag">' +
								'<h6><img src="./resources/clock.svg"/>'
								+year+'</h6><h6><img src="./resources/tags.svg"/>'
								+tags+'</h6></div><img src="'
								+imgsrc+'"><h4>'
								+title+'</h4><h6>'
								+subtitle+'</h6>' +
							'</div>'+
						'</div>'+
					'</a>')
			} else {
				$("article").append(
					'<div class="projectsquarealt">' + 
						'<div class="projectsquareflag">' +
							'<h6><img src="./resources/clock.svg"/>'
							+year+'</h6><h6><img src="./resources/tags.svg"/>'
							+tags+'</h6></div><img src="'
							+imgsrc+'"><h4>'
							+title+'</h4><h6>'
							+subtitle+'</h6>' +
						'</div>'+
					'</div>'
				)
			}
		}
	});
	
});