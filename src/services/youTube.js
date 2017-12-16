angular.module('video-player')
.service('youTube', function($http) {
  // Simple GET request example:
  this.search = function(options, callback = x=>x) {
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
  
  this.details = function(video, callback = x=>x) { //must have second API call bc URLs are different
    var data = {
      part: 'snippet,contentDetails,statistics',
      key: window.YOUTUBE_API_KEY,
      id: video.id.videoId,
    };
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/videos',
      params: data
    }).then(
      function successCallback(response) {
        return callback(response.data.items[0]);
      }, 
      function errorCallback(response) {
        console.log('failure', response);
      });
  };
});