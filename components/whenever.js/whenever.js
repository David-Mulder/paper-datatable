var Whenever = function(){
	var callbacks = [];
	var ready = false;
	var args;
	return {
		ready: function(){
			args = arguments;
			callbacks.forEach(function(callback){
				callback.apply(this, args);
			});
			ready = this;
		},
		whenReady: function(callback){
			if(ready){
				callback.apply(this, args);
			}else{
				callbacks.push(callback);
			}
		}
	}
};