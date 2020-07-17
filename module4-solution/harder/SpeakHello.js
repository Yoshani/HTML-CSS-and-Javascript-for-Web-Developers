(function (window){
  var helloSpeaker = {
    speak: function speak(name) {
      console.log(speakWord + " " + name);
    }
  };
  window.helloSpeaker = helloSpeaker;
  var speakWord = "Hello";
})(window);
