angular.module('video-player')

.component('app', {
  bindings: {
    // videos: '<',
    // currentVideo: '<'
  },

  controller: function() {
    this.currentVideo = exampleVideoData[0];
    this.videos = exampleVideoData;

    this.selectVideo = (entry) => {
      this.currentVideo = entry;
    };
   
    this.searchResults = () => {};
    

  },
  
  
  templateUrl: 'src/templates/app.html' 

});