var iapp = angular.module('iApp', ['ionic']);

//启动项
iapp.run(['$rootScope', '$state', 'APIService',function($rootScope, $state, APIService){
  // 1.通过获取openid
  APIService.getOpenId(function(data){
    var openid = data.openid;

    // 获取到openid 放入全局函数
    $rootScope.openid = openid; 
    
    // 2.判断是否绑定过 放入该函数是为了避免异步调用函数不同不引起的不必要的错误
    APIService.checkUserExist({open_id:openid},function(data) {
      var flag = data.status;
    
      // 2.1.绑定未激活用户 跳转帮助页面
      if (flag === 0) {
        $state.go('', {})
      }
    
      // 2.2.未绑定用户 跳转绑定页面
      if (flag === -1) {
        $state.go('', {})
      }

      // 2.3.已激活的用户跳转到商城页面
      if (flag === 1) {
        // 把返回的号码放入到全局方便我的选项卡调取个人信息等
        $rootScope.mobile = data.msg; 
        $state.go('', {});
      }
    });

  });
  
  
  

	// 第一次启动需要做的配置
	$rootScope.$on('$stateChangeSuccess', 
		function(event, toState, toParams, fromState, fromParams){
			$rootScope.hidetabs = (
				toState.name === 'tabs.cart-submit-order' 
				|| toState.name === 'tabs.cart-address-list' 
				|| toState.name === 'tabs.cart-address-edit'
				|| toState.name === 'tabs.cart-address-add' 
				|| toState.name === 'tabs.cart-payway-chose' 
				);
	});
}]);

//路由配置表
iapp.config(['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider', '$httpProvider',function($stateProvider, $urlRouterProvider, $ionicConfigProvider, $httpProvider) {
  
  $stateProvider
   .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "views/tabs.html"
    })
   // 商城首页 产品展示
    .state('tabs.mall', {
      url: "/mall",
      views: {
        'mall-tab': {
	      templateUrl: "views/mall.html",
	 	  controller: 'ProductCtrl'
	 	 }
       }
    })
    
    
    // 购物车
    .state('tabs.cart', {
      url: "/cart",
      views: {
        'cart-tab': {
          templateUrl: "views/cart.html",
          controller: 'CartCtrl'
        }
      }
    })
    // 购物车-提交订单页面
    .state('tabs.cart-submit-order', {
      url: "/cart-submit-order",
      views: {
        'cart-tab': {
          templateUrl: "views/cart-submit-order.html",
          controller: 'CartCtrl'
        }
      }
    })
    // 购物车-地址列表页面
    .state('tabs.cart-address-list', {
      url: "/cart-address-list",
      views: { 
        'cart-tab': {
          templateUrl: "views/cart-address-list.html",
          controller: 'CartCtrl'
        }
      }
    })
    // 购物车-添加新地址
    .state('tabs.cart-address-add', {
      url: "/cart-address-add",
      views: { 
        'cart-tab': {
          templateUrl: "views/cart-address-add.html",
          controller: 'CartCtrl'
        }
      }
    })
    // 购物车-编辑地址
    .state('tabs.cart-address-edit', {
      url: "/cart-address-edit",
      views: { 
        'cart-tab': {
          templateUrl: "views/cart-address-edit.html",
          controller: 'CartCtrl'
        }
      }
    })

    // 购物车-编辑地址
    .state('tabs.cart-payway-chose', {
      url: "/cart-payway-chose",
      views: { 
        'cart-tab': {
          templateUrl: "views/cart-payway-chose.html",
          controller: 'CartCtrl'
        }
      }
    })
    
    
    
    // 订单
    .state('tabs.order', {
      url: "/order",
      views: {
        'order-tab': {
          templateUrl: "views/order.html",
          controller: 'OrderCtrl'
        }
      }
    })
    // 个人中心
    .state('tabs.profile', {
      url: "/profile",
      views: {
        'my-tab': {
          templateUrl: "views/profile.html",
          controller: 'ProfileCtrl'
        }
      }
    })  
    // 登陆
    .state('login', {
      url: "/login",
      templateUrl: "views/login.html",
      controller: 'LoginCtrl'
    });
    
    // 设置上一级菜单名字 
    $ionicConfigProvider.backButton.previousTitleText('');
    // 设置返回按钮名称
    $ionicConfigProvider.backButton.text('');
    // 设置tabs的位置
	$ionicConfigProvider.tabs.position('bottom');
	// 设置标题位置
	$ionicConfigProvider.navBar.alignTitle('center');

	// 默认跳转页
	//$urlRouterProvider.otherwise("login");
	
	// 设置 http 请求头
	$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    // 序列化方法
    var param = function(obj) {
      var query = '', name, value, fullSubName, subName, subValue, innerObj,i;
      for(name in obj) {
          value = obj[name];

          if(value instanceof Array) {
              for(i = 0; i < value.length; ++i) {
                  subValue = value[i];
                  fullSubName = name + '[' + i + ']';
                  innerObj = {};
                  innerObj[fullSubName] = subValue;
                  query += param(innerObj) + '&';
              }
          } else if(value instanceof Object) {
              for(subName in value) {
                  subValue = value[subName];
                  fullSubName = name + '[' + subName + ']';
                  innerObj = {};
                  innerObj[fullSubName] = subValue;
                  query += param(innerObj) + '&';
              }
          } else if(value !== undefined && value !== null) {
              query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
          }
      }

      return query.length ? query.substr(0, query.length - 1) : query;
    }

	// 设置参数信息
	$httpProvider.defaults.transformRequest = [function(data) {
	     return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
	}];

}]);
