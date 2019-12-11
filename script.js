$(".btn").on("click", function () {
    console.log("it worked");
    prompt("Enter a task");
    window.localStorage.setItem('nine', '');
});
// $("#ten").on("click", function () {
//     audioElement.pause();
// });
// $("#eleven").on("click", function () {
//     audioElement.pause();
// });
// $("#twelve").on("click", function () {
//     audioElement.pause();
// });
// $("#one").on("click", function () {
//     audioElement.pause();
// });
// $("#two").on("click", function () {
//     audioElement.pause();
// });
// $("#three").on("click", function () {
//     audioElement.pause();
// });
// $("#four").on("click", function () {
//     audioElement.pause();
// });
// $("#five").on("click", function () {
//     audioElement.pause();
// });
// $("btn-primary").on("click", function () {
//     console.log("it worked");});
// $(document).ready(function() {
//     $("#btn-primary").click(function(){
//         alert("button");
//     }); 
// });
var currentDay = $("#currentDay");
currentDay.text (moment().format("dddd, MMMM Do YYYY"));