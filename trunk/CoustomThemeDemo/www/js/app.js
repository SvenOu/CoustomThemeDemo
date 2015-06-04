// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.light', {
    url: "/light",
    views: {
      'menuContent': {
        templateUrl: "templates/bar-light.html"
      }
    }
  })

  .state('app.stable', {
    url: "/stable",
    views: {
      'menuContent': {
        templateUrl: "templates/bar-stable.html"
      }
    }
  })
    .state('app.positive', {
      url: "/positive",
      views: {
        'menuContent': {
          templateUrl: "templates/bar-positive.html"
        }
      }
    })

  .state('app.calm', {
    url: "/calm",
    views: {
      'menuContent': {
        templateUrl: "templates/bar-calm.html"
      }
    }
  })

  .state('app.balanced', {
    url: "/balanced",
    views: {
      'menuContent': {
        templateUrl: "templates/bar-balanced.html"
      }
    }
  })

  .state('app.energized', {
    url: "/energized",
    views: {
      'menuContent': {
        templateUrl: "templates/bar-energized.html"
      }
    }
  })

  .state('app.assertive', {
    url: "/assertive",
    views: {
      'menuContent': {
        templateUrl: "templates/bar-assertive.html"
      }
    }
  })

  .state('app.royal', {
    url: "/royal",
    views: {
      'menuContent': {
        templateUrl: "templates/bar-royal.html"
      }
    }
  })

  .state('app.dark', {
    url: "/dark",
    views: {
      'menuContent': {
        templateUrl: "templates/bar-dark.html"
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/light');
});
