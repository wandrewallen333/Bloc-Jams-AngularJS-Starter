(function() {
  function timecode() {
    return function(seconds) {
      var seconds = buzz.toTimer(seconds);


      return seconds;
    };
  }

  angular
    .module('blocJams')
    .filter('timecode', timecode);
})();
