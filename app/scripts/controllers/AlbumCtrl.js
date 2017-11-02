(function() {
  function AlbumCtrl(Fixtures) {
    this.albumData = Fixtures.getAlbum(12);
  }

  angular
    .module('blocJams')
    .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
})();
