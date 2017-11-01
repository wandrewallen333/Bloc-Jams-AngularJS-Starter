(function() {
  function AlbumCtrl() {
    this.albumData = angular.copy(albumAliveAndWell);
  }

  angular
    .module('blocJams')
    .controller('AlbumCtrl', AlbumCtrl);
})();
