// Api接口
iapp.factory('APIService',['$http',function($http){
	
	// ajax请求接口
	var ajax = function(params) {
		var m = !params.method ? 'GET' : params.method;
		var url = params.url;
		var type = !params.dataType ? 'json' : params.dataType;
		var cache = !!params.isCache ? params.isCache : false;
		
		console.log('m:' + m+'url:'+url + 'type:'+type+'cache:'+cache);
		
		$http({
			url:url,
			method:m,
			dataType: type,
			params:params.data,
			cache:cache
		}).success(function(data){
		    params.success && params.success(data);
		    console.log(params.url + "request success.");
		}).error(function(data){
			params.error && params.error(data);
			console.log(params.url + "request error.");
		})
	}
	
	// 登陆api
	var login = function(data, success, error) {
		ajax({
			url:'http://app.linktrust-edu.com:6869/infocenter/intf/app/user/login',
			method:'POST',
			data:data,
			success:success,
			error:error
		});
	}
	
	return {
		login: function(data, success, error) {
			login(data, success, error);
		}
	}
}]);
