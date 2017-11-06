(function() {
  function SongPlayer(Fixtures) {
    var SongPlayer = {};

    /**
    * @desc Buzz object audio file
    * @type {Object}
    */
    var currentBuzzObject = null;

    /**
    * @desc stores album info
    * @type {Object}
    */
    var currentAlbum = Fixtures.getAlbum();

    /**
     * @function setSong
     * @desc Stops currently playing song and loads new audio file as currentBuzzObject
     * @param {Object} song
     */
    var setSong = function(song) {
      if (currentBuzzObject) {
        stopSong(song);
      }

      currentBuzzObject = new buzz.sound(song.audioUrl, {
        formats: ['mp3'],
        preload: true
    });

    SongPlayer.currentSong = song;
 };

    /**
     * @function playSong
     * @desc plays currently stopped song
     * @param {Object} song
     */
    var playSong = function(song) {
      currentBuzzObject.play();
      song.playing = true;
    }

    /**
     * @function stopSong
     * @desc stops currently playing song
     * @param {Object} song
     */
    var stopSong = function(song) {
      currentBuzzObject.stop();
      SongPlayer.currentSong.playing = null;
    }

  /**
    * @function getSongIndex
    * @desc Gets index of song currently playing
    * @param {Object} song
    */
    var getSongIndex = function(song) {
         return currentAlbum.songs.indexOf(song);
     };

    /**
    * @desc Active song object from song list
    * @type {Object}
    */
    SongPlayer.currentSong = null;


    SongPlayer.play = function(song) {
      song = song || SongPlayer.currentSong;
      if (SongPlayer.currentSong !== song) {
        setSong(song);
        playSong(song);
      } else if (SongPlayer.currentSong === song) {
         if (currentBuzzObject.isPaused()) {
             playSong(song);
         }
      }
    };
    /**
     * @function pause
     * @desc Pause current song
     * @param {Object} song
     */
    SongPlayer.pause = function(song) {
      song = song || SongPlayer.currentSong;
      currentBuzzObject.pause();
      song.playing = false;
    };

   /**
    * @function previous
    * @desc Changes song to previous song
    * @param {Object} song
    */
   SongPlayer.previous = function() {
     var currentSongIndex = getSongIndex(SongPlayer.currentSong);
     currentSongIndex--;

     if (currentSongIndex < 0) {
       stopSong(song);
     } else {
        var song = currentAlbum.songs[currentSongIndex];
        setSong(song);
        playSong(song);
     }
   };

  /**
  * @function next
  * @desc Changes song to next song
  * @param {Object} song
  */
  SongPlayer.next = function() {
      var currentSongIndex = getSongIndex(SongPlayer.currentSong);
      currentSongIndex++;

      if (currentSongIndex >= currentAlbum.songs.length) {
        stopSong(song);
      } else {
        var song = currentAlbum.songs[currentSongIndex];
        setSong(song);
        playSong(song);
      }
    };
    return SongPlayer;
  }

  angular
    .module('blocJams')
    .factory('SongPlayer', ['Fixtures', SongPlayer]);
})();
