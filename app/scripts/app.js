'use strict';

var app = angular.module('mindmutexWebsiteApp', [
	'ngAnimate',
	'ngCookies',
	'ngResource',
	'ngRoute',
	'ngSanitize',
	'ngTouch', 
	'pascalprecht.translate'
  ]).config(function ($locationProvider, $routeProvider, $translateProvider) {
	$translateProvider.useStaticFilesLoader({
		prefix: 'scripts/locale/',
		suffix: '.json'
	});
	$translateProvider.registerAvailableLanguageKeys(["lv", "en"]);
	$translateProvider.determinePreferredLanguage();
  	
	$locationProvider.html5Mode(true);
	$routeProvider.when('/', {
			templateUrl: 'views/main.html',
			controller: 'MainCtrl'
			
		}).when('/contacts', {
			templateUrl: 'views/contacts.html',
			controller: 'ContactsCtrl'
			
		}).otherwise({
			redirectTo: '/'
		});
	});


app.controller('HeaderCtrl', function($translate, $scope) {
	var changeLanguage = function(key) {
		// this variable is used to change the flag icon
		$scope.currentLanguage = key === "en" ? "gb" : key;
	};
	
	changeLanguage($translate.proposedLanguage());
	$scope.language = function(language) {
		changeLanguage(language);
		$translate.use(language);
	};
});
