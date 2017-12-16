angular.module('video-player')

.component('search', {
  bindings: {
    searchfunction: '<'
  },

  controller: function() {
    this.log = () => console.log('clicked');
  },
  
  templateUrl: 'src/templates/search.html' });
