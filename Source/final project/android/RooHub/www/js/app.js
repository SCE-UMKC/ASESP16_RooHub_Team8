
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ngResource','ngCordova','ngCordovaOauth'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'HomeCtrl'

  })
   .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
  })
  .state('register', {
      url: '/register',
      templateUrl: 'templates/register.html',
      controller: 'RegisterCtrl'
  })

    .state('profile', {
      url: '/profile',
      templateUrl: 'templates/profile.html',
      controller: 'ProfileCtrl'

  })
      .state('update', {
      url: '/update',
      templateUrl: 'templates/update.html',
      controller: 'UpdateCtrl'

  })

    .state('boardroom', {
      url: '/boardroom',
      templateUrl: 'templates/boardRoom.html',
      controller:'BoardRoomCtrl'
    })

    .state('ASE', {
      url: '/ASE',
      templateUrl: 'templates/ase.html',
      controller:'AseCtrl'
    })

    .state('PB', {
      url: '/PB',
      templateUrl: 'templates/PB.html',
      controller:'PbCtrl'
    })

    .state('NA1', {
      url: '/NA1',
      templateUrl: 'templates/NA1.html',
      controller:'Na1Ctrl'
    })

    .state('taskTracker', {
      url: '/taskTracker',
      templateUrl: 'templates/taskTracker.html',
      controller:'EventCtrl'
    })

    .state('newTask', {
      url: '/newTask',
      templateUrl: 'templates/newTask.html',
      controller:'CreateEventCtrl'
    })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
