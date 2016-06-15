module.exports = new function () {
	var NODE_ENV = '';
	global.IMAGE_FORMATS = '{png,gif,jpg,jpeg,svg}';
	global.JS_FORMATS = '{js,jsx}';
	global.JS_FORMATS_ARRAY = ['', '.js','.jsx'];
	global.NODE_ENV = NODE_ENV ? NODE_ENV : "dev" ;
};
