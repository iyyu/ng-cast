angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    entry: '<',
    click: '<'
  },

  controller: function() {
//    this.log = () => console.log(this);
  },
  
  templateUrl: 'src/templates/videoListEntry.html' 
});
