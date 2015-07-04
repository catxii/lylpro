// 商城
iapp.controller('ProductCtrl', ['$scope',function($scope) {
	$scope.products = [
		{'imgsrc':'images/cp-img.jpg','name':'示范产品1','num':'12','dw':'包'},
		{'imgsrc':'images/cp-img.jpg','name':'示范产品2','num':'3','dw':'包'},
		{'imgsrc':'images/cp-img.jpg','name':'示范产品3','num':'12','dw':'包'},
		{'imgsrc':'images/cp-img.jpg','name':'示范产品4','num':'2','dw':'包'},
		{'imgsrc':'images/cp-img.jpg','name':'示范产品5','num':'12','dw':'包'},
		{'imgsrc':'images/cp-img.jpg','name':'示范产品6','num':'12','dw':'包'},
		{'imgsrc':'images/cp-img.jpg','name':'示范产品7','num':'12','dw':'包'},
		{'imgsrc':'images/cp-img.jpg','name':'示范产品8','num':'12','dw':'包'},
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