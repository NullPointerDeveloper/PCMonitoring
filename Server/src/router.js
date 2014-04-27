function route(handle, pathname) {
  console.log("router.js About to route a request for " + pathname);
  if (typeof handle[pathname] === 'function') {
	  return handle[pathname]();
	  } else {
	  console.log("router.js No request handler found for " + pathname);
	  return "404. Something you are loking for is not here";
	  }
}

exports.route = route;