(function () {

	var mainApp = angular.module('mainApp', ['ngRoute', 'sportModule','puebloModule']);

	mainApp.config(['$routeProvider', function ($routeProvider) {
			$routeProvider.when('/sport', {
				templateUrl: 'src/modules/sport/sport.tpl.html'
			}).when('/pueblo', {
				templateUrl: 'src/modules/pueblo/pueblo.tpl.html'
			}).otherwise('/');
		}]);

	//Configuración módulo sport
	var sportModule = angular.module('sportModule', ['CrudModule', 'MockModule']);

	sportModule.constant('sport.context', 'sports');

	sportModule.config(['sport.context', 'MockModule.urlsProvider', function (context, urlsProvider) {
			urlsProvider.registerUrl(context);
		}]);
            
            //Configuración módulo pueblo
	var puebloModule = angular.module('puebloModule', ['CrudModule', 'MockModule']);

	puebloModule.constant('pueblo.context', 'pueblos');

	puebloModule.config(['pueblo.context', 'MockModule.urlsProvider', function (context, urlsProvider) {
			urlsProvider.registerUrl(context);
		}]);
})();