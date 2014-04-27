var exec = require("child_process").exec;
var os = require('os');

function start() {
	console.log("requestHandler.js Request handler 'start' was called.");
	var content = "empty";
	
//	exec("ls -lah", function (error, stdout, stderr) {
//	content = stdout;
//	});
	
	return content;


}

function upload() {
	console.log("requestHandler.js Request handler 'upload' was called.");
	return "Hello Upload";

}

function getData() {
	console.log("requestHandler.js Request handler 'getData' was called.");
	var freeMem = os.freemem(); 
	console.log("requestHandler.js freeMem = " + freeMem);
	return freeMem + ""; // + "" for converting response to String
}


exports.start = start;
exports.upload = upload;
exports.getData = getData;

