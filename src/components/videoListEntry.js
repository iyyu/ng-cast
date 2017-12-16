angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    onClick: '<'
  },

  controller: function() {
//    this.log = () => console.log(this);
  },
  
  templateUrl: 'src/templates/videoListEntry.html' 
});
