var exec = require("child_process").exec;
var os = require('os');
var fs = require('fs');

function start(res) {
	console.log("requestHandler.js Request handler 'start' was called.");
	var result = new Object();
    result.body = fs.readFileSync('../../Client/src/Index.html','utf8');
    result.encoding = 'utf8';
    result.contentType = 'text/html';
	return result;


}

function getClientFile(pathname) {
	console.log("requestHandler.js Request handler 'start' was called.");
	var result = new Object();
    result.body = fs.readFileSync('../../Client/src' + pathname,'utf8');
    result.encoding = 'utf8';
    result.contentType = 'text/plain';
	return result;
	
}

function upload(res) {
	console.log("requestHandler.js Request handler 'upload' was called.");
	return "Hello Upload";

}

function getData(res) {
	console.log("requestHandler.js Request handler 'getData' was called.");
	var freeMem = os.freemem(); 
	console.log("requestHandler.js freeMem = " + freeMem);
	return freeMem + ""; // + "" for converting response to String
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

