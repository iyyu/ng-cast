angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    clickFunction: '<'
  },

  controller: function() {
    this.click = () => console.log('hello');
  },
  
  templateUrl: 'src/templates/videoList.html' 
});
