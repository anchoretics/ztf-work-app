var request = require('request')

var URL_CAS = "http://172.17.11.182/cas/login";
var URL_HOME = "http://172.17.11.52/Default.aspx";
var URL_EOSS = "http://172.17.11.98:8080/home.jsp";
var URL_ASSESS = "http://172.17.11.67:8080/assess/";

// let get_option = {
// 	url: "http://172.17.11.182/cas/login",
// 	headers: {
// 		'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
// 		'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6,zh-TW;q=0.4',
// 		'Content-Type': 'application/x-www-form-urlencoded',
// 		'Connection': 'keep-alive',
// 		'Cache-Control': 'max-age=0',
// 		'Cookie': "CASTGC=TGT-32126-7zbgom4XciSBgCE1K03zYvKUfobiJXCavdoCw6drZ4z7ZwZNKd-cas01.ccssoft.com.cn; JSESSIONID=953BE74B666562B24C0F6373299F84EE",
// 		'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36'
// 	},
// }
// request(get_option, function(error, res, body){

// 	console.log('error:', error); // Print the error if one occurred
// 	console.log('statusCode:', res && res.statusCode); // Print the response status code if a response was received
// 	console.log('body:', body); // Print the HTML for the Google homepage.
// 	console.log(res.headers);

// 		request("http://172.17.11.98:8080/home.jsp", function(error, res, body){

// 			console.log(body);
// 			console.log('error:', error); // Print the error if one occurred
// 			console.log('statusCode:', res && res.statusCode);
// 			console.log(res.headers);
// 		});
// });

// var options = {
//   url: 'https://cas.ztf.io/cas/login' || 'https://api.github.com/repos/request/request',
//   method: 'POST',
//   headers: {
//     'User-Agent': 'request'
//   }
// };
//
// function callback(error, response, body) {
//   if (!error && response.statusCode == 200) {
//
//     console.log(error, response, body);
//   }else{
//     console.log(error, response, body);
//   }
// }
//
// request(options, callback);
//
// return true;

var login_options = {
	url: "https://cas.ztf.io/cas/login" || "http://172.17.11.182/cas/login",
	method: 'POST',
	headers: {
		'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
		'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6,zh-TW;q=0.4',
		'Content-Type': 'application/x-www-form-urlencoded',
		'Connection': 'keep-alive',
		'Cache-Control': 'max-age=0',
		'Cookie': '',
		'Host': '172.17.11.182',
		'Origin': 'http: //172.17.11.182',
		'Referer': 'http://172.17.11.182/cas/login',
		'Upgrade-Insecure-Requests':1,
		'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36'
	},
	form: {
		username: "lianglingfeng",
		password: "xvfOki0Wuj5PZhW",
		lt: '',
		execution: '',
		_eventId: '',
		submit: '登录'
	}
};


request({
		url: "https://cas.ztf.io/cas/login" || "http://172.17.11.182/cas/login",
	}, function (error, response, body) {
	console.log('error:', error); // Print the error if one occurred
	console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	// console.log('body:', body); // Print the HTML for the Google homepage.
	console.log(response.headers);

	login_cookie = (response.headers['set-cookie'])[0].match(/JSESSIONID=.{32}/)[0];
	let lt = body.match(/value=\"LT.*"/g)[0].replace(/value|\"|\=/g, '');
	let execution = body.match(/execution\" value=\".*"/g)[0].replace(/execution|value|\"|\=|\s/g, '');
	let _eventId = "submit";
	login_options.headers.Cookie = login_cookie;
	login_options.form.lt = lt;
	login_options.form.execution = execution;
	login_options.form._eventId = _eventId;
	login_options.url += ';jsessionid=' + login_cookie.replace(/JSESSIONID=/,'');

	console.log(login_cookie);
	console.log(lt);
	console.log(login_options);
	console.log("******************************************************************************");
	console.log("******************************************************************************");
	request({
    url: "https://cas.ztf.io/cas/login",
    method: 'POST',
    headers: {
      Cookie: login_cookie
    },
    form: login_options.form
  }, function(error, res, body2){
		// console.log(body2);
		console.log('error:', error); // Print the error if one occurred
		console.log('statusCode:', res && res.statusCode);
		console.log(res.headers);
		// console.log(res);
		console.log("******************************************************************************");
		console.log("******************************************************************************");

		request("https://eoss.ztf.io/index.jsp", function(error, res, body){

			// console.log(body);
			console.log('error:', error); // Print the error if one occurred
			console.log('statusCode:', res && res.statusCode);
			console.log(res.headers);
		});
	});
});
