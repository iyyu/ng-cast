angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    video: '<',
    autoplay: '<'
  },

  controller: function() {
    
  },
  
  templateUrl: 'src/templates/videoPlayer.html' });
