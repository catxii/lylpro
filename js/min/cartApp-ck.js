var cartApp=angular.module("cartApp",[]);cartApp.controller("productCtrl",["$scope",function(t){t.products=[],t.totalPrice=0,t.cost=78;for(var c=0;10>c;c++){var r={name:"日丰-PN2.0热水管日丰PN2.0热水",unit:"包",spec:"25*3.5",price:"26.75",count:0};t.products.push(r)}t.addCart=function(t){t.count++,o()},t.delCart=function(t){t.count>0&&t.count--,o()};var o=function(){for(var c=t.products,r=c.length,o=0,n=0;r>n;n++){var a=c[n].count,u=c[n].price;o+=a*u}t.totalPrice=o+t.cost}}]);