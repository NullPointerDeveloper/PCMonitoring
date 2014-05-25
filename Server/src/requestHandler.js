var exec = require("child_process").exec;
var os = require('os');
var fs = require('fs');

function start(res) {
	console.log("requestHandler.js Request handler 'start' was called.");
	var result = new Object();
    result.body = fs.readFileSync('../../Client/src/Index.html','utf8');
    result.body.replace
    result.encoding = 'utf8';
    result.contentType = 'text/html';
	return result;


}

function getClientFile(pathname) {
	console.log("requestHandler.js Request handler 'start' was called.");
	var result = new Object();
	try{
	    result.body = fs.readFileSync('../../Client/src' + pathname,'utf8');
	} catch(e){
		return null;
	}
    if (pathname.indexOf(".css", pathname.length - 4) !== -1){
    	result.contentType = 'text/css';
    	result.encoding = 'utf8';
	} else if (pathname.indexOf(".js", pathname.length - 3) !== -1){
    	result.contentType = 'text/javascript';
    	result.encoding = 'utf8';
	} else if (pathname.indexOf(".png", pathname.length - 3) !== -1){
    	result.contentType = 'image/png';
    	result.encoding = 'binary';
	} else {
		result.contentType = 'text/plain';
		result.encoding = 'utf8';
	}
	
    
	return result;
	
}

function upload(res) {
	console.log("requestHandler.js Request handler 'upload' was called.");
	return "Hello Upload";

}

function getData(res) {
	console.log("requestHandler.js Request handler 'getData' was called.");
	var result = new Object();
	var freeMem = os.freemem();
	var currentData = new Object();
	currentData.totalRam = os.totalmem();
	currentData.freeRam = os.freemem();
	result.body = JSON.stringify(currentData);
	result.contentType = 'text/json';
	result.encoding = 'utf8';
	console.log("requestHandler.js freeMem = " + freeMem);
	return result; // + "" for converting response to String
}

function getTabIcon(res){
	var img = fs.readFileSync('./resources/logo.gif');
    var result = new Object();
    result.body = img;
    result.encoding = 'binary';
    result.contentType = 'image/gif';
    return result;
}



exports.start = start;
exports.upload = upload;
exports.getData = getData;
exports.getTabIcon = getTabIcon;
exports.getClientFile = getClientFile;

