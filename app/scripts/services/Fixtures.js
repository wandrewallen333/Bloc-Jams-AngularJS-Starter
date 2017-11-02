(function() {
  function Fixtures() {
    var Fixtures = {};

    var albumAliveAndWell = {
      title: 'Alive and Well',
      artist: 'Break Night',
      label: 'Adapted Records',
      year: '2017',
      albumArtUrl: '/assets/images/album_covers/AliveAndWell.jpg',
      songs: [
        { title: 'Alive and Well', duration: '249.6', audioUrl: '/assets/music/Alive And Well' },
        { title: 'Jive', duration: '244.8', audioUrl: '/assets/music/Jive' },
        { title: 'Lost Chords', duration: '244.8', audioUrl: '/assets/music/Lost Chords' },
        { title: 'Sick Fam', duration: '307.2', audioUrl: '/assets/music/Sick Fam' },
        { title: 'Skedaddle', duration: '183', audioUrl: '/assets/music/Skedaddle'}
      ]
    };

    var albumPicasso = {
         title: 'The Colors',
         artist: 'Pablo Picasso',
         label: 'Cubism',
         year: '1881',
         albumArtUrl: '/assets/images/album_covers/01.png',
         songs: [
             { title: 'Blue', duration: '161.71', audioUrl: '/assets/music/blue' },
             { title: 'Green', duration: '103.96', audioUrl: '/assets/music/green' },
             { title: 'Red', duration: '268.45', audioUrl: '/assets/music/red' },
             { title: 'Pink', duration: '153.14', audioUrl: '/assets/music/pink' },
             { title: 'Magenta', duration: '374.22', audioUrl: '/assets/music/magenta' }
         ]
     };

     Fixtures.getAlbum = function() {
       return albumAliveAndWell;
     };

     Fixtures.getCollection = function(numberOfAlbums) {
       var array = [];
       for (var i=0; i < numberOfAlbums; i++) {
         array.push(albumAliveAndWell);
         return array;
       };
     };

    return Fixtures;
  }

  angular
    .module('blocJams')
    .factory('Fixtures', Fixtures);
})();
