'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})




function projectClick(e) { 
    // prevent the page from reloading      
    e.preventDefault();
    // In an event handler, $(this) refers to      
    // the object that triggered the event   

    $('#friendsname').click(function(){
   		$(this).text("Test");
	});   

    //$(this).text(anagrammedName(name));
    
   // $("#friendsname").click(function(e) {
	//	$(this).text(anagrammedName(name));
}


/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");

/*
	$('#friendsname').click(function(e) {
            $(this).text(anagrammedName(name));
            });
            */

/*
	$("#friendsname").click(function () {
		$(#friendsname).text(anagrammedName(name));
	})
*/

	$("a.thumbnail").click(projectClick);
	
}



function anagrammedName(name) {
	// Thanks, Internet Anagram Server!
	
	if (name == "Doug Engelbart") {
		return "Notable Grudge";
	} 
	else if (name == "Ivan Sutherland") {
		return "Vandal Heist Run";
	}
	else if (name == "JCR Licklider") {
		return "Crick Rid Jell";
	}
	else if (name == "Vannevar Bush") {
		return "Ravens Van Hub";
	}
	else if (name == "Alan C. Kay") {
		return "Canal Yak";
	}
	else if (name == "Allen Newell") {
		return "Ellen All New";
	}
	else if (name == "Lucy Suchman") {
		return "Lunacy Chums";
	}
	else if (name == "Grace Hopper") {
		return "Gear Chopper";
	}
	else {
		console.log(name + " not known for anagramming.");
		return name;
	}
}

