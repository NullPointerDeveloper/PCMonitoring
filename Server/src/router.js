function route(handle, pathname, res) {
  console.log("router.js About to route a request for " + pathname);
  if (typeof handle[pathname] === 'function') {
	  return handle[pathname](res);
	  } else {
	  console.log("router.js No request handler found for " + pathname);
	  return "404. Something you are loking for is not here";
	  }
}

exports.route = route;