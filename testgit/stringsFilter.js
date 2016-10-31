/**
 * 字符串截取
 */
define([ 'jquery', 'app' ], function($, app) {
/*
 * app.filter("reverse",function(){
 * 
 * });
 */  /*  app.config(['$filterProvider', function ($filterProvider) {
	       app.filter=$filterProvider.register;
       }]);*/
	 return app.filter("sfmat", ['$translate', function($translate) {
		
			return function(value, max) {
				
				if(value){
					
					return value.substr(0,max);
				}
			};
		}]);
})
