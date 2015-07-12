var cartApp = angular.module('cartApp', []); //函数主入口，对应html里面的ng-app 

// 订单处理模块  对应body上的ng-controller
cartApp.controller('productCtrl', ['$scope',function($scope) {
	$scope.products = [];// 商品列表
	$scope.totalPrice = 0; // 总价格
	$scope.cost = 78; // SHIPPING COST 运费
	var defaultProduct = []; // 默认商品列表

	// 初始化商品 以后是从服务器读取
	for (var i = 0; i < 10; i++) {
		var product = {name:'日丰-PN2.0热水管'+i,unit:'包', spec:'25*3.5', price:(i + 1), count:'0'};
		
		$scope.products.push(product);
		defaultProduct.push({name:'日丰-PN2.0热水管'+i,unit:'包', spec:'25*3.5', price:(i + 1), count:'0'});
	}

	// 添加产品数量
	$scope.addCount = function(product){
		product.count++;
		calculate();
	}

	// 删除产品数量 
	$scope.delCount = function(product){
		if (product.count > 0) product.count--; // 判断是否已经是0 数量是0 不能再减
		calculate();
	}

	// 计算价格
	var calculate = function() {
		var products = $scope.products;
		var len = products.length;		
		var totalPrice = 0;
		for (var i = 0; i < len; i++) {
			var count = products[i].count;
			var price = products[i].price;
			totalPrice += (count * price);
		}

		// 计算所有产品价格 带 运费
		$scope.totalPrice = totalPrice + $scope.cost;
	}

	// 首先计算
	calculate();

 	// 删除商品
	$scope.delProduct = function(idx) {
		$scope.products.splice(idx, 1); //删除选中项
		calculate(); // 计算价格

		if ($scope.products.length === 0) {
			$scope.products = defaultProduct;
			$(".add-shopcat").show();
			$(".buy-area").hide();
			$(".swiper-container").show();
			$(".delete-cp").hide();
		}
	}

	// 确认添加购物车
	$scope.addToCart = function() {
		var products = $scope.products;
		var len = products.length;
		var finalList =[];
		for (var i = 0; i < len; i++) {
			var count = products[i].count;
			if (count > 0) finalList.push(products[i]);
		}
		$scope.products = finalList;
		$(".add-shopcat").hide();
		$(".buy-area").show();
		$(".swiper-container").hide();
		$(".delete-cp").show();
	}
}]);

