(function (window){
  var byeSpeaker = {
    speak: function speak(name) {
      console.log(speakWord + " " + name);
    }
  };
  window.byeSpeaker = byeSpeaker;
  var speakWord = "Good Bye";
})(window);