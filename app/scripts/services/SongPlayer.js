(function() {
  function SongPlayer() {

    /**
    * @desc empty object
    * @type {Object}
    */
    var SongPlayer = {};

    /**
    * @desc sets current song to null
    * @type {Object}
    */
    var currentSong = null;

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
    * @desc Buzz object audio file
    * @type {Object}
    */
    var currentBuzzObject = null;

    /**
     * @function setSong
     * @desc Stops currently playing song and loads new audio file as currentBuzzObject
     * @param {Object} song
     */
    var setSong = function(song) {
    if (currentBuzzObject) {
        currentBuzzObject.stop();
        currentSong.playing = null;
    }

    currentBuzzObject = new buzz.sound(song.audioUrl, {
        formats: ['mp3'],
        preload: true
    });

    currentSong = song;
 };

    SongPlayer.play = function(song) {
      if (currentSong !== song) {
        setSong(song);
        playSong(song);
      } else if (currentSong === song) {
         if (currentBuzzObject.isPaused()) {
             currentBuzzObject.play();
         }
      }
    };


    SongPlayer.pause = function(song) {
     currentBuzzObject.pause();
     song.playing = false;
 };

    return SongPlayer;
  }

  angular
    .module('blocJams')
    .factory('SongPlayer', SongPlayer);
})();
