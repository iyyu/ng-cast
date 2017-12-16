angular.module('video-player')

.component('app', {
  bindings: {

  },
  
  controller: function(youTube, $location) {
    console.log($location.absUrl());
    this.$onInit = () => this.searchResults({q: ''});
    
    this.selectVideo = (entry) => {
      this.currentVideo = entry;
      this.autoplayDelay = this.autoplay; //prevents video interruption/restarting video upon checkbox change in the middle of a video
      this.getDetails();
      $location.path('/videos/' + this.currentVideo.id.videoId); //technically adds unique URL for each vid but is not referential as a URL should be
    };
    this.searchResults = (options) => { //arrow functions bind 'this' appropriately
      youTube.search(options, (results) => { //arrow functions bind 'this' appropriately
        this.videos = results;
        this.selectVideo(results[0]);   
      });
    };
    
    this.getDetails = () => { 
      youTube.details(this.currentVideo, (results) => { //takes currentVideo displayed in player and adds description and statistics
        this.currentVideo = results;
      });
    };
    
    this.autoplay = 0;
    this.autoplayDelay = 0;
    this.autoplayToggle = () => {
      this.autoplay = (this.autoplay + 1) % 2; //using 0 or 1 instead of T/F bc autoplay YT URL config is 0 or 1
    };
    
  },
  

  templateUrl: 'src/templates/app.html' 

});