(function () {
	var app = angular.module('puebloModule');

	app.controller('puebloCtrl', ['$scope', 'CRUDUtils', 'pueblo.context', function ($scope, CRUDUtils, context) {
			this.url = context;
			CRUDUtils.extendCtrl(this, $scope);
                        
                        
                        
			this.fetchRecords();
		}]);
            
            
                                    
            
            
})();