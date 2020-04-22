(function (window) {
var helloSpeaker = {};
var speakWord = "Hello";
helloSpeaker.speak = function (named) {
  console.log(speakWord + " " + named);
}
		window.helloSpeaker = helloSpeaker;
}) (window);
