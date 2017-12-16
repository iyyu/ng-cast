angular.module('video-player')

.component('search', {
  bindings: {
    result: '<',
    autoplayToggle: '<'
  },

  controller: function() {

  },
  
  templateUrl: 'src/templates/search.html' });
