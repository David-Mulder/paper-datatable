/*
 IMPORTANT: Right now this Cache is **not** weak in the sense that it discards items based memory pressure, however
 it is written in a way that will allow this later to be added without rewriting the rest of the code and right now
 'emulates' the behaviour by having a fixed maximum of items.
 */
var WeakCache = function(limit){
	var values = [];
	var keys = [];
	return {
		set: function (key, obj) {
			var index = keys.indexOf(key);
			if(index  > -1){
				values[index] = obj;
				values.splice(values.length, 0, values.splice(index, 1)[0]);
				keys.splice(keys.length, 0, keys.splice(index, 1)[0]);
			}else{
				keys.push(key);
				values.push(obj);
				if(keys.length > limit){
					keys.shift();
					values.shift();
				}
			}
		},
		has: function(key){
			return keys.indexOf(key) > -1;
		},
		get: function(key){
			var index = keys.indexOf(key);
			return values[index];
		},
		delete: function(key){
			var index = keys.indexOf(key);
			values.splice(index, 1);
			keys.splice(index, 1);
		}
	}
}