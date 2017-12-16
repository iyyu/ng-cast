angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    entry: '<',
    click: '<'
  },

  controller: function() {
  },
  
  templateUrl: 'src/templates/videoListEntry.html' 
});
