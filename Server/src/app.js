var server = require("./server");
var router = require("./router");
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandler");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/getData"] = requestHandlers.getData;
handle["/favicon.ico"] = requestHandlers.getTabIcon;

server.start(router.route, handle);
