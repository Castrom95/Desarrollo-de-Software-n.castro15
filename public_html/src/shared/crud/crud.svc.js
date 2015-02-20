(function () {
	var crud = angular.module('CrudModule');

	crud.factory('CRUDUtils', ['Restangular', function (RestAngular) {
			function CRUD($scope) {
				this.api = RestAngular.all(this.url);
				$scope.currentRecord = {};
				$scope.records = [];
				this.editMode = false;

				this.fetchRecords = function () {
					var self = this;
					this.api.getList().then(function (data) {
						$scope.records = data;
						$scope.currentRecord = {};
						self.editMode = false;
					});
				};
				this.createRecord = function () {
					this.editMode = true;
					$scope.currentRecord = {};
				};
				this.saveRecord = function () {
					var self = this;
					if ($scope.currentRecord.id) {
						$scope.currentRecord.put().then(function () {
							self.fetchRecords();
						});
					} else {
						this.api.post($scope.currentRecord).then(function () {
							self.fetchRecords();
						});
					}
				};
                                this.promedEdad = function (record)
                                  {
                                      $scope.currentRecord = RestAngular.copy(record);
                                      var x = $scope.currentRecord.maxAge;
                                      var y = $scope.currentRecord.minAge;
                                      var resp = (x+y)/2;
                                      alert('El Promedio de edades es: ' + resp);
                                  }
                                  
                                  this.totalPoblacion = function (record)
                        {
                             $scope.currentRecord = RestAngular.copy(record);
                             var x = $scope.currentRecord.numHombres;
                                      var y = $scope.currentRecord.numMujeres;
                                      var resp = (x+y);
                                      
                                      alert('El Promedio de edades es: ' + resp);
                        }
				this.deleteRecord = function (record) {
					var self = this;
					record.remove().then(function () {
						self.fetchRecords();
					});
				};
				this.editRecord = function (record) {
					$scope.currentRecord = RestAngular.copy(record);
					this.editMode = true;
				};
			}
			;
			return {
				extendCtrl: function (obj, scope) {
					CRUD.call(obj, scope);
				}
			};
		}]);
})();