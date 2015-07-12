// Api接口
iapp.factory('APIService',['$http',function($http){
	
	// url前缀
	var prefix = "http://ybgplatform.com";

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


	// 获取微信openid
	var getOpenId = function(success, error) {
		ajax({
			url:prefix + '/wechat/ajaxGetOpenid',
			data:{},
			success:success,
			error:error
		});
	}

	// 获取地理位置信息
	var getLocalSite = function(success, error) {
		ajax({
			url:prefix + '/wechat/ajaxGetLocalSite',
			data:{},
			success:success,
			error:error
		});
	}

	// 注册绑定
	var registerBind = function(data, success, error) {
		// 参数包含 openid、mobile、localsite
		ajax({
			url:prefix + '/wechat/ajaxBindOpenId',
			data:data,
			success:success,
			error:error
		});
	}


	// 检查用户是否存在
	var checkUserExist = function(data, success, error) {
		// 参数包含 openid
		ajax({
			url:prefix + '/wechat/ajaxCheckCustomer',
			data:data,
			success:success,
			error:error
		});
	}

    // 商品接口
	var mallproductsInfo = function( success, error) {
		// 参数包含 openid
		ajax({
			url:'json/ajaxgoogdList.json',
			data:{},
			success:success,
			error:error
		});
	}


	
	return {
		login: function(data, success, error) {
//			login(data, success, error);
		},
		getOpenId: function(success, error) {
//			getOpenId(success, error);
		},
		getLocalSite: function(success, error) {
//			getLocalSite(success, error);
		},
		checkUserExist: function(data, success, error) {
//			checkUserExist(data, success, error);
		},
		registerBind: function(data, success, error) {
//			registerBind(data, success, error);
		},
		mallproductsInfo: function(success, error) {
			mallproductsInfo( success, error);
		}
	}
	
	//商城
	
	
	
	
}]);
