angular.module('video-player')
.service('youTube', function($http) {
  // Simple GET request example:
  this.search = function(options) {
    var data = {
      part: 'snippet',
      key: window.YOUTUBE_API_KEY,
      q: 'dogs',
      maxResults: 5,
      type: 'video',
      videoEmbeddable: 'true'
    };
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: data
    }).then(function successCallback(response) {
      console.log(response.data.items);
    }, function errorCallback(response) {
      console.log(response);
    });
  };
});