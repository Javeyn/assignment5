// Set the clock
var clock = $('#clock');
function update() {
	$('#clock').html(moment().format('MMMM DD YYYY H:mm:ss'));
}
setInterval(update, 1000);

// Create all necessary elements
var hourArry = ["9:00 a.m.", "10:00 a.m.", "11:00 a.m.", "12:00 p.m.", "1:00 p.m.", "2:00 p.m.", "3:00 p.m.", "4:00 p.m.", "5:00 p.m.", ]
var container = $(".container");

var date = moment("12/25/1995", "MM-DD-YYYY");

// FOR MULTI DAY PLANNER ADD NAVIGATE FUNCTIONS: PREV, TODAY, NEXT, AND SEARCH FIELD


// Build timeblocks
// FOR MULTI DAY PLANNER ADD FUNCTION TO BE CALLED ON LOAD AND WHEN NAVIGATE BUTTONS ARE PRESSED
for (let i = 0; i < hourArry.length; i++) {
// New row for each block of time
	var row = $("<div>");
	row.addClass("row");
	container.append(row);

	// Time block with text of hour
	var timeBlock = $("<div>");
	timeBlock.addClass("time-block col-md-2");
	timeBlock.text(hourArry[i]);
	row.append(timeBlock);

	var textArea = $("<textarea>");
	textArea.addClass("textarea col-md-9");
	textArea.attr('id', hourArry[i]);
	textArea.attr("placeholder", "What needs to be done?");
	if (localStorage.getItem(hourArry[i]) !== null) {
		textArea.text(localStorage.getItem(hourArry[i]))
		
	}
	row.append(textArea);
	

	// Change style based on past, present, future
	if (i+9 < parseInt(moment().format('HH'))) {
		textArea.addClass("past");
	} 	else if (i+9 === parseInt(moment().format('HH'))) {
		textArea.addClass("present");
	} 	else if (i+9 > parseInt(moment().format('HH'))) {
		textArea.addClass("future");
	}

	// Save button
	var saveBtn = $("<button>");
	saveBtn.addClass("saveBtn col-md-1");
	saveBtn.text("Save");
	row.append(saveBtn);

}
// }

// Get user input
$(document).ready(function () {
	$(".saveBtn").click(function () {
		localStorage.setItem($(this).parent().children("textarea").attr("id") , $(this).parent().children("textarea").val());
	});
});