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

    this.searchResults = (options, callback) => { //arrow functions bind 'this' appropriately
      youTube.search(options, (results) => { //arrow functions bind 'this' appropriately
        this.videos = results;
        this.currentVideo = results[0];   
      });

    };
  },
  

  templateUrl: 'src/templates/app.html' 

});