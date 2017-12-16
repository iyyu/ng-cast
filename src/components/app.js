angular.module('video-player')

.component('app', {
  bindings: {
    // videos: '<',
    // currentVideo: '<'
  },

  controller: function(youTube) {
    this.currentVideo = exampleVideoData[0];
    this.videos = exampleVideoData;
    //youTube.search();
    this.selectVideo = (entry) => {
      this.currentVideo = entry;
    };
   
    this.searchResults = function(options) {
      var results = youTube.search(options);
      this.videos = results;
      this.currentVideo = results[0];
    };
  },
  
  
  templateUrl: 'src/templates/app.html' 

});