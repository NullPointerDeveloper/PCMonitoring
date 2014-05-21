function route(handle, pathname, res) {
  console.log("router.js About to route a request for " + pathname);
  if (typeof handle[pathname] === 'function') {
	  return handle[pathname](res);
	  } else {
	  console.log("router.js No request handler found for " + pathname);
	  return handle["clientFile"](pathname);
	  }
}

exports.route = route;