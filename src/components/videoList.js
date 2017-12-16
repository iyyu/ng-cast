angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    click: '<'
  },

  controller: function() {
  },
  
  templateUrl: 'src/templates/videoList.html' 
});
