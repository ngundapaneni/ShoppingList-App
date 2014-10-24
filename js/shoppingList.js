var counter = 0;
$(document).ready(function() {
	$(".inputDiv input#enteredItem").on("keypress", function(event) {
		if(event.which == 13) {
			if($("#enteredItem").val() == "") {
				alert("Item cannot be empty");
			}
			else {
				showListItems(counter);
				counter = counter;
			}
		}
	});

	$("#listItems").on("click", "li", function() {
		$(this).toggleClass("strikeThrough");
	});

	$("#deleteBtn").on("click", function() {
		var checkedstuff = $(this).closest('.inputDiv').find('.checkedItem:checked').parent();
 		checkedstuff.hide();
	});
});

function showListItems() {
	counter = counter + 1;
	var enteredText = $("#enteredItem").val();
	var item = "<div id='listContainer'><input class='checkedItem' type='checkbox' id='chkBox" + counter + "'/><li class='listItem' id='item" + counter + "' >" + enteredText + "</li></div>";

	$("#listItems").append(item);
	$(".shopListItems").show();
	$("#enteredItem").val("");
}

