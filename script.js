
var clock = $('#clock');
function update() {
	$('#clock').html(moment().format('MMMM DD YYYY H:mm:ss'));
}
setInterval(update, 1000);


var hours = ["9:00 a.m.", "10:00 a.m.", "11:00 a.m.", "12:00 p.m.", "1:00 p.m.", "2:00 p.m.", "3:00 p.m.", "4:00 p.m.", "5:00 p.m.",]
var container = $(".container");

var date = moment("12/25/1995", "MM-DD-YYYY");


var cityName = $("#cityName").val();
console.log(cityName);

const apiKey = "27428ea9a3d610198180273b120a59fc";
// to call the api
const ApiAddress = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName},usa&appid=${apiKey}`;


// function getdata() {

	$.ajax({
		url: ApiAddress,
		method: "GET"
	})
		.then(function (response) {
			console.log(response.list[i].main.temp)


			for (let i = 0; i < 5; i++) {




				let forecastBox = $("#forecastBox");
				var temp = response.list[i].main.temp;
				let forecastDiv = $("<div/>");
				let forecastUl = $("<ul>");

				$(forecastUl).append(`<li>${temp}</li>`);


				$(forecastUl).appendTo(forecastDiv);
				$(forecastDiv).append(forecastUl);
				$("#forecastBox").append(forecastDiv);
			}
		})

// }


$("#search").on("click", function (e) {
	e.preventDefault();
	console.log("teting")
	// getdata();


})



for (let i = 0; i < hours.length; i++) {
	var row = $("<div>");
	row.addClass("row");
	container.append(row);


	var timeBlock = $("<div>");
	timeBlock.addClass("time-block col-md-2");
	timeBlock.text(hours[i]);
	row.append(timeBlock);

	var textArea = $("<textarea>");
	textArea.addClass("textarea col-md-9");
	textArea.attr('id', hours[i]);
	textArea.attr("placeholder", "What needs to be done?");
	if (localStorage.getItem(hours[i]) !== null) {
		textArea.text(localStorage.getItem(hours[i]))

	}
	row.append(textArea);



	if (i + 9 < parseInt(moment().format('HH'))) {
		textArea.addClass("past");
	} else if (i + 9 === parseInt(moment().format('HH'))) {
		textArea.addClass("present");
	} else if (i + 9 > parseInt(moment().format('HH'))) {
		textArea.addClass("future");
	}


	var saveBtn = $("<button>");
	saveBtn.addClass("saveBtn col-md-1");
	saveBtn.text("Save");
	row.append(saveBtn);

}

$(document).ready(function () {
	$(".saveBtn").click(function () {
		localStorage.setItem($(this).parent().children("textarea").attr("id"), $(this).parent().children("textarea").val());
	});
});