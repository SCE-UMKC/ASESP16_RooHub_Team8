// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ngResource','ngCordova','firebase','ngTwitter','ngCordovaOauth'])

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
    .state('listEvents', {
      url: '/listEvents',
      templateUrl: 'templates/listEvents.html',
      controller:'listCtrl'

    })
    .state('createEvent', {
      url: '/createEvent',
      templateUrl: 'templates/createEvent.html',
      controller: 'CreateEventCtrl'

    })
    .state('event', {
      url: '/event',
      templateUrl: 'templates/event.html',
      controller: 'EventCtrl'

    })

    .state('profile', {
      url: '/profile',
      templateUrl: 'templates/profile.html',
      controller: 'ProfileCtrl'

  })
    .state('share', {
      url: '/share',
      templateUrl: 'templates/share.html',
      controller: 'shareCtrl'

    })
      .state('update', {
      url: '/update',
      templateUrl: 'templates/update.html',
      controller: 'UpdateCtrl'

  })

   .state('twitterFeed', {
      url: '/twitterFeed',
      templateUrl: 'templates/twitterFeed.html',
     controller:'twitterFeedCtrl'
  })
    .state('twitterUserData', {
      url: '/twitterUserData',
      templateUrl: 'templates/twitterUserData.html',
      controller:'twitterUserDataCtrl'
    })
    .state('forgot', {
      url: '/forgot',
      templateUrl: 'templates/forgot.html',
      controller:'forgotCtrl'
    })
    .state('security', {
      url: '/security',
      templateUrl: 'templates/security.html',
      controller:'securityCtrl'
    })
    .state('reset', {
      url: '/reset',
      templateUrl: 'templates/reset.html',
      controller:'resetCtrl'
    })

    .state('record', {
      url: '/record',
      templateUrl: 'templates/record.html',
       //controller: 'recordController'

    })
    .state('file', {
      url: '/file',
      templateUrl: 'templates/file.html',
      //controller: 'recordController'

    })
    .state('firebase', {
      url: '/firebase',
      templateUrl: 'templates/firebase.html',
      controller:'FirebaseController'
    })

    .state('secure', {
      url: '/secure',
      templateUrl: 'templates/secure.html',
      controller: 'SecureController'

    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
