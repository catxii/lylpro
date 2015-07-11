
var obj = angular.module('iapp', []);
 
// 创建控制器和注入angularjs的$scope范围
obj.controller('PhoneListCtrl', function($scope) {
 
    console.log("123")
	$scope.obj={text:'what'};
	$scope.things=[{'name':'zzz','age':'123'},{'name':'zzz2','age':'1234'},{'name':'zzz3','age':'1235'},{'name':'zzz3','age':'1235'},{'name':'zzz3','age':'1235'},{'name':'zzz3','age':'1235'},{'name':'zzz3','age':'1235'},{'name':'zzz3','age':'1235'},{'name':'zzz3','age':'1235'},{'name':'zzz3','age':'1235'},]	
	if( $scope.things.length >5){
		$scope.things = $scope.things.slice(0,2)
	}
	
});