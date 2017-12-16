angular.module('video-player')
.service('youTube', function($http) {
  // Simple GET request example:
  this.search = function(options, callback) {
    var data = {
      part: 'snippet',
      key: window.YOUTUBE_API_KEY,
      q: 'cats',
      maxResults: 5,
      type: 'video',
      videoEmbeddable: 'true'
    };
    data = _.extend(data, options);
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: data
    }).then(
      function successCallback(response) {
        return callback(response.data.items);
      }, 
      function errorCallback(response) {
        console.log('failure', response);
      });
  };
});