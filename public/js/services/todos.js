angular.module('todoService', [])

	// super simple service
	// each function returns a promise object
	.factory('Todos', ['$http',function($http) {
		return {
			get : function() {
				// return $http.get('/api/todos');
				return this;
			},
			create : function(todoData) {
				// return $http.post('/api/todos', todoData);
				console.log(todoData);
				this.data.push(todoData);
				return this;
			},
			delete : function(id) {
				// return $http.delete('/api/todos/' + id);
				this.data.splice(id, 1);
				return this;
			},
			success: function(cb){
				cb(this.data);
			},
			data:[]

			// success(function(data) {
			// 	$scope.loading = false;
			// 	$scope.formData = {}; // clear the form so our user is ready to enter another
			// 	$scope.todos = data; // assign our new list of todos
			// });
		}
	}]);
