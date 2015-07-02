// 商城
iapp.controller('ProductCtrl', ['$scope',function($scope) {
	$scope.products = [
		{'imgsrc':'images/cp-img.jpg','num':'12','dw':'包'},
		{'imgsrc':'images/cp-img.jpg','num':'3','dw':'包'},
		{'imgsrc':'images/cp-img.jpg','num':'12','dw':'包'},
		{'imgsrc':'images/cp-img.jpg','num':'2','dw':'包'},
		{'imgsrc':'images/cp-img.jpg','num':'12','dw':'包'},
		{'imgsrc':'images/cp-img.jpg','num':'12','dw':'包'},
		{'imgsrc':'images/cp-img.jpg','num':'12','dw':'包'},
		{'imgsrc':'images/cp-img.jpg','num':'12','dw':'包'},
	]
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