var path = require("path");
var express = require("express");
var webpack = require("webpack");
var cookieParser = require("cookie-parser");
var axios = require('axios');
const settings = require('./settings');

const app = express(),
      NODE_ENV = process.env.NODE_ENV || 'development';
      DIST_DIR  = path.join(__dirname, "..", "dist"),
      HOME_HTML_FILE = path.join(DIST_DIR, "index.html"),
      COMMUNICATOR_HTML_FILE = path.join(DIST_DIR, "communicator", "index.html"),

      PRODUCTION_BUILD = process.env.NODE_ENV === "production",
      PRODUCTION_API = process.env.API_ENV === "production",
      DEFAULT_PORT  = 3000;

app.set("port", process.env.PORT || DEFAULT_PORT);

if (PRODUCTION_BUILD) {
  app.disable('x-powered-by');
  app.use(cookieParser());
  app.use(authChecker);
  app.use(express.static(DIST_DIR, { maxAge: settings.static_max_age }));
  app.get("/communicator*", (req, res) => res.sendFile(COMMUNICATOR_HTML_FILE));
  app.get("*", (req, res) => res.sendFile(HOME_HTML_FILE));
}

var permissions_url;

if (PRODUCTION_API) {
  var api_url = settings.api.url + ":" + settings.api.port;
  permissions_url = [api_url, settings.api.permissions_path].join('/');
} else {
  var api_url = settings.dev_api.url + ":" + settings.dev_api.port;
  permissions_url = [api_url, settings.api.permissions_path].join('/');
}

app.listen(app.get("port"), '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', app.get("port"), app.get("port"));
});

function authChecker(req, res, next) {
  if (/^\/marketplace.{0,}$/.test(req.path) ) {
    Promise.resolve(notAuthorized(req)).then(function (notAuth){
      if (notAuth) {
        res.redirect(settings.login_page + "?redirect=" + req.path);
      } else {
        next();
      }
    });
  } else {
    next();
  }
}

function notAuthorized(req) {
  if ( !(req.cookies && req.cookies.token) ) {
    console.log("missing token");
    return true;
  }

  return axios.get(permissions_url, {
    headers: {
      'Content-Type': 'application/json',
      'Token': req.cookies.token
    }
  }).then(function(response) {
    console.log("login ok");
    return false;

  }, function(rejected_body){
    console.log("rejected");
    return true;
  });
}
