 /*
 JSON.stringify(data.map(function(item){
	 item.name = {
		 first: item.first,
		 last: item.last
	 };
	 delete item.last;
	 delete item.first;
	 item.location = item.location.split(", ");
	 item.location = {
	 lat: parseFloat(item.location[0]),
	 lng: parseFloat(item.location[1])
	 };
	 return item;
 }));
 */


var data = new Whenever();

if(localStorage.getItem('users') !== null){
	data.ready(JSON.parse(localStorage.users));
}else{
	httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = function(){
		if (httpRequest.readyState === XMLHttpRequest.DONE) {
			if (httpRequest.status === 200) {
				data.ready(JSON.parse(httpRequest.responseText));
			}
		}
	}
	httpRequest.open('GET', '../data/userData.js');
	httpRequest.send();
}


window.db = {
	count: function(columns, like, orderBy, skip, limit){
		return new Promise(function(resolve, reject){
			data.whenReady(function (users) {
				if (like.length > 0) {
					searchedUsers = users.filter(function (user) {
						if (user.name.first.toLowerCase().indexOf(like.toLowerCase()) > -1) return true;
						if (user.name.last.toLowerCase().indexOf(like.toLowerCase()) > -1) return true;
						if (user.about.toLowerCase().indexOf(like.toLowerCase()) > -1) return true;
					});
				} else {
					searchedUsers = users;
				}
				resolve(searchedUsers.length);
			});
		});
	},
	select: function(columns, like, orderBy, skip, limit){
		if(typeof like === 'object'){
			return new Promise(function (resolve, reject) {
				data.whenReady(function (users) {
					setTimeout(function(){
						resolve(users.filter((user) => like.indexOf(user.id) > -1 ));
					}, Math.random() * 500);
				});
			});
		}else{
			return new Promise(function (resolve, reject) {
				data.whenReady(function (users) {
					setTimeout(function () {
						if (like.length > 0) {
							searchedUsers = users.filter(function (user) {
								if (user.name.first.toLowerCase().indexOf(like.toLowerCase()) > -1) return true;
								if (user.name.last.toLowerCase().indexOf(like.toLowerCase()) > -1) return true;
								if (user.about.toLowerCase().indexOf(like.toLowerCase()) > -1) return true;
							});
						} else {
							searchedUsers = users;
						}

						if (orderBy) {

							searchedUsers.sort(function (a, b) {
								if (orderBy.direction == 'desc') {
									var c = a;
									a = b;
									b = c;
								}

								if (orderBy.property == 'name') {
									a = a[orderBy.property].last + '    ' + a[orderBy.property].first;
									b = b[orderBy.property].last + '    ' + b[orderBy.property].first;
								} else {
									a = a[orderBy.property];
									b = b[orderBy.property];
								}

								a = typeof a === 'string' ? a.toLowerCase() : a;
								b = typeof b === 'string' ? b.toLowerCase() : b;

								if (a > b) return 1;
								if (a < b) return -1;
								return 0;
							});
						}
						if (columns === 'id') {
							resolve(searchedUsers.slice(skip, limit).map((item) => item.id));
						} else if (columns === '*') {
							resolve(searchedUsers.slice(skip, limit));
						} else {
							console.warn('This is a *fake* db, remember');
						}
					}, Math.random() * 100);
				});
			});
		}
	},
	update: function(id, property, value){
		return new Promise(function(resolve, reject){
			data.whenReady(function (users) {
				setTimeout(function () {
					var myItem = users.find(function (thisItem) {
						return thisItem.id == id;
					});
					myItem[property] = value;
					localStorage.users = JSON.stringify(users);
					resolve(true);
				}, Math.random() * 100);
			});
		});
	}
};