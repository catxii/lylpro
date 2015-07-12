
// 商城
iapp.controller('ProductCtrl', ['$scope','$http',function($scope, $http) {
	
	$http({
		url:"http://testwuhan.ybgplatform.com/product/ajaxBrandList",
		method:"GET",
		dataType: "json",
		cache:true
	}).success(function(data){
	    //console.log(data[i])  
	    $scope.products = data;
	    console.log("123"+products[0])
	}).error(function(data){
		alert("请求失败")
	})
}]);

// 个人中心 
iapp.controller('ProfileCtrl', ['$scope',function($scope) {
}]);

// 购物车
iapp.controller('CartCtrl', ['$scope',function($scope) {
}]);

// 订单
iapp.controller('OrderCtrl', ['$scope',function($scope) {
}]);

// 用户登陆控制器
iapp.controller('LoginCtrl', ['$scope', 'APIService', '$state',function($scope, APIService, $state) {
	
	// 登陆信息
	$scope.user = {};
	
	// 登陆
	$scope.signIn = function() {
		
	// 	var user = $scope.user;
		
	// 	// 判断用户名密码是否为空
	// 	if (!user.username || !user.password) {
	// 		// toast 
	// 		alert('用户名密码不能为空！');
	// 		return;
	// 	}
	// 	// 登陆
	// 	APIService.login(user,function(data) {
	// 		alert('登陆成功');
	// 		$state.go('tabs.mall', {});
	// 	}, function() {
			
	// 	});
		$state.go('tabs.mall', {});
	}

	

}]);