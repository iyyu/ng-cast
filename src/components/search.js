angular.module('video-player')

.component('search', {
  bindings: {
    result: '<'
  },

  controller: function() {
    this.log = () => console.log('clicked');
  },
  
  templateUrl: 'src/templates/search.html' });
