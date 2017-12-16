angular.module('video-player')

.component('app', {
  bindings: {
    // videos: '<',
    // currentVideo: '<'
  },

  controller: function(youTube) {
    this.$onInit = () => this.searchResults({q: 'test'});
    this.selectVideo = (entry) => {
      this.currentVideo = entry;
    };
    this.searchResults = (options) => { //arrow functions bind 'this' appropriately
      youTube.search(options, (results) => { //arrow functions bind 'this' appropriately
        this.videos = results;
        this.selectVideo(results[0]);   
      });

    };
  },
  

  templateUrl: 'src/templates/app.html' 

});