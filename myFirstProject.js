document.body.style.backgroundColor = "#EAB543";
var done =  document.getElementsByClassName("myInput")


function disableInput() {
	for (var i = 0 ; i < done.length ; i++){
  	done[i].disabled = true ;

	}
	console.log(done)
}

var counter = 1;


function addTodo() {

	//we need to store the div's Id  and the button Id that we are going to use later:
var currentId = "#" + counter;
var currentDiv = "#div" + counter; 

//each time we run the function a new list item will be appended to the Ordered list with the value of the input:
	$("#todosOl").append("<div class='list-to' id=" + 'div' + counter + ">"  + "<li class='item-todo'>" + $("#inp-todo").val() + "</li>" + "<button class='btn-delete' id=" + counter.toString() + ">Done</button>" + "</div>")
//after appending the list item we need to empty the input:
	$("#inp-todo").val("")
	//
	$(currentId).click(function() {
		$(currentDiv).hide()
	})
	
	
counter++
}

    