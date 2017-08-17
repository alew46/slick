 (function() {
     function config($locationProvider, $stateProvider) {
         $locationProvider
             .html5Mode({
                 enabled: true,
                 requireBase: false
              });
 
         $stateProvider
            .state('home', {
                 url: '/',
                 controller: 'HomeCtrl as home',
                 templateUrl: '/templates/home.html'
             })
         
            .state('room', {
                 url: '/rooms',
                 controller: 'RoomCtrl as rooms',
                 templateUrl: '/templates/rooms.html'
            });
     }
     
     angular
         .module('slick', ['ui.router', 'firebase'])
         .config(config);
 })();