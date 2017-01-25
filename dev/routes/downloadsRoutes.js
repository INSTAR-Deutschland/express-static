var express = require('express');
var downloadsRouter = express.Router();


/* ###################################################### Indoor Cameras ###################################################### */

downloadsRouter.route('/IN-8015_HD/')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-8015_Downloads', {
      title: 'IN-8015 HD Downloads',
	  uplink: '/Indoor_Cameras/IN-8015_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Downloads/">Downloads</a></li>',
    });
});


downloadsRouter.route('/IN-6014_HD/')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6014_Downloads', {
      title: 'IN-6014 HD Downloads',
	  uplink: '/Indoor_Cameras/IN-6014_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/">IN-6014 HD</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/Downloads/">Downloads</a></li>',
    });
});


downloadsRouter.route('/IN-6012_HD/')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6012_Downloads', {
      title: 'IN-6012 HD Downloads',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/">IN-6012 HD</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/Downloads/">Downloads</a></li>',
    });
});


downloadsRouter.route('/IN-6001_HD/')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6001_Downloads', {
      title: 'IN-6001 HD Downloads',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/">IN-6001 HD</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/Downloads/">Downloads</a></li>',
    });
});


downloadsRouter.route('/IN-3011/')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-3011_Downloads', {
      title: 'IN-3011 Downloads',
    });
});


/* ###################################################### Outdoor Cameras ###################################################### */


downloadsRouter.route('/IN-9008_HD/')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-9008_Downloads', {
      title: 'IN-9008 HD Downloads',
    });
});


downloadsRouter.route('/IN-7011_HD/')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-7011_Downloads', {
      title: 'IN-7011 HD Downloads',
    });
});


downloadsRouter.route('/IN-5907_HD/')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-5907_Downloads', {
      title: 'IN-5907 HD Downloads',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/">IN-5907 HD</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/Downloads/">Downloads</a></li>',
    });
});


downloadsRouter.route('/IN-5905_HD/')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-5905_Downloads', {
      title: 'IN-5905 HD Downloads',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/">IN-5905 HD</a></li><li><a href="/Outdoor_Cameras/IN-5905_HD/Downloads/">Downloads</a></li>',
    });
});


downloadsRouter.route('/IN-4011/')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-4011_Downloads', {
      title: 'IN-4011 Downloads',
    });
});


downloadsRouter.route('/IN-4010_V2/')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-4010_V2_Downloads', {
      title: 'IN-4010 V2 Downloads',
    });
});


downloadsRouter.route('/IN-2908/')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-2908_Downloads', {
      title: 'IN-2908 Downloads',
    });
});


downloadsRouter.route('/IN-2905_V2/')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-2905_V2_Downloads', {
      title: 'IN-2905 V2 Downloads',
    });
});

module.exports = downloadsRouter;
