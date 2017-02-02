var express = require('express');
var internetAccessRouter = express.Router();
var appdata = require('../views/_partials/data/internetAccess.json');

/* GET Internet_Access page. */
internetAccessRouter.get('/', function(req, res) {

    var iaPicture = []; /* Get all Pictures from gallery.json for the gallery */
    var iaPictureAlt = [];
    var iaHref = [];
    appdata.articles.forEach(function(item) {
        iaPicture = iaPicture.concat(item.iaPic);
        iaPictureAlt = iaPictureAlt.concat(item.iaPicAlt);
        iaHref = iaHref.concat(item.iaUrl);
      });

    res.render('./Internet_Access/Internet_Access', {
        title: 'Internet Access',
        iaPic: iaPicture,
        iaPicAlt: iaPictureAlt,
        iaUrl: iaHref,
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Internet_Access/">Access your Camera over the Internet</a></li>',
      });
  });

internetAccessRouter.get('/The_DDNS_Service/', function(req, res) {
    res.render('./Internet_Access/The_DDNS_Service', {
        title: 'The DDNS Service',
        uplink: '/Internet_Access/',
        ampimg: '/images/Search/IA_SearchThumb_DDNSService.jpg',
        headline: 'The DDNS Service',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Internet_Access/">Internet Access</a></li><li><a href="/Internet_Access/The_DDNS_Service/">The DDNS Service</a></li>',
      });
  });

internetAccessRouter.get('/Port_Forwarding/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding', {
        title: 'Port Forwarding',
        uplink: '/Internet_Access/',
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding.jpg',
        headline: 'Port Forwarding',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Internet_Access/">Internet Access</a></li><li><a href="/Internet_Access/Port_Forwarding/">Port Forwarding</a></li>',
      });
  });

internetAccessRouter.get('/Port_Forwarding/AVM_Fritzbox/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_AVM_Fritzbox', {
        title: 'Port Forwarding AVM Fritzbox',
        uplink: '/Internet_Access/Port_Forwarding/',
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding.jpg',
        headline: 'Port Forwarding AVM Fritzbox',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Internet_Access/">Internet Access</a></li><li><a href="/Internet_Access/Port_Forwarding/">Port Forwarding</a></li><li><a href="/Internet_Access/Port_Forwarding/AVM_Fritzbox/">AVM Fritzbox</a></li>',
      });
  });

internetAccessRouter.get('/Port_Forwarding/Telekom_Speedport/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_Telekom_Speedport', {
        title: 'Port Forwarding Telekom Speedport',
        uplink: '/Internet_Access/Port_Forwarding/',
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding.jpg',
        headline: 'Port Forwarding Telekom Speedport',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Internet_Access/">Internet Access</a></li><li><a href="/Internet_Access/Port_Forwarding/">Port Forwarding</a></li><li><a href="/Internet_Access/Port_Forwarding/Telekom_Speedport/">Telekom Speedport</a></li>',
      });
  });

internetAccessRouter.get('/Port_Forwarding/D-Link/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_D-Link', {
        title: 'Port Forwarding D-Link',
        uplink: '/Internet_Access/Port_Forwarding/',
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding.jpg',
        headline: 'Port Forwarding D-Link',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Internet_Access/">Internet Access</a></li><li><a href="/Internet_Access/Port_Forwarding/">Port Forwarding</a></li><li><a href="/Internet_Access/Port_Forwarding/D-Link/">D-Link</a></li>',
      });
  });

internetAccessRouter.get('/Port_Forwarding/TP-Link/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_TP-Link', {
        title: 'Port Forwarding TP-Link',
        uplink: '/Internet_Access/Port_Forwarding/',
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding.jpg',
        headline: 'Port Forwarding TP-Link',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Internet_Access/">Internet Access</a></li><li><a href="/Internet_Access/Port_Forwarding/">Port Forwarding</a></li><li><a href="/Internet_Access/Port_Forwarding/TP-Link/">TP-Link</a></li>',
      });
  });

internetAccessRouter.get('/Port_Forwarding/Netgear/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_Netgear', {
        title: 'Port Forwarding Netgear',
        uplink: '/Internet_Access/Port_Forwarding/',
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding.jpg',
        headline: 'Port Forwarding Netgear',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Internet_Access/">Internet Access</a></li><li><a href="/Internet_Access/Port_Forwarding/">Port Forwarding</a></li><li><a href="/Internet_Access/Port_Forwarding/Netgear/">Netgear</a></li>',
      });
  });

internetAccessRouter.get('/Port_Forwarding/Vodafone_Easybox/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_Vodafone_Easybox', {
        title: 'Port Forwarding Vodafone Easybox',
        uplink: '/Internet_Access/Port_Forwarding/',
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding.jpg',
        headline: 'Port Forwarding Vodafone Easybox',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Internet_Access/">Internet Access</a></li><li><a href="/Internet_Access/Port_Forwarding/">Port Forwarding</a></li><li><a href="/Internet_Access/Port_Forwarding/Vodafone_Easybox/">Vodafone Easybox</a></li>',
      });
  });

internetAccessRouter.get('/Port_Forwarding/Pirelli/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_Pirelli', {
        title: 'Port Forwarding Pirelli',
        uplink: '/Internet_Access/Port_Forwarding/',
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding.jpg',
        headline: 'Port Forwarding Pirelli',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Internet_Access/">Internet Access</a></li><li><a href="/Internet_Access/Port_Forwarding/">Port Forwarding</a></li><li><a href="/Internet_Access/Port_Forwarding/Pirelli/">Pirelli</a></li>',
      });
  });

internetAccessRouter.get('/DDNS_Provider/', function(req, res) {
    res.render('./Internet_Access/DDNS_Provider', {
        title: 'Third Party DDNS Provider',
        uplink: '/Internet_Access/',
        ampimg: '/images/Search/IA_SearchThumb_DDNSService.jpg',
        headline: 'Third Party DDNS Provider',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Internet_Access/">Internet Access</a></li><li><a href="/Internet_Access/DDNS_Provider/">DDNS Provider</a></li>',
      });
  });

internetAccessRouter.get('/DDNS_Provider/NoIP/', function(req, res) {
    res.render('./Internet_Access/DDNS_Provider_NoIP', {
        title: 'NoIP DDNS Provider',
        uplink: '/Internet_Access/DDNS_Provider/',
        ampimg: '/images/Search/IA_SearchThumb_DDNSService.jpg',
        headline: 'Third Party DDNS Provider',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Internet_Access/">Internet Access</a></li><li><a href="/Internet_Access/DDNS_Provider/">DDNS Provider</a></li><li><a href="/Internet_Access/DDNS_Provider/NoIP/">NoIP</a></li>',
      });
  });

internetAccessRouter.get('/DDNS_Provider/Selfhost/', function(req, res) {
    res.render('./Internet_Access/DDNS_Provider_Selfhost', {
        title: 'Selfhost DDNS Provider',
        uplink: '/Internet_Access/DDNS_Provider/',
        ampimg: '/images/Search/IA_SearchThumb_DDNSService.jpg',
        headline: 'Third Party DDNS Provider',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Internet_Access/">Internet Access</a></li><li><a href="/Internet_Access/DDNS_Provider/">DDNS Provider</a></li><li><a href="/Internet_Access/DDNS_Provider/Selfhost/">Selfhost</a></li>',
      });
  });

internetAccessRouter.get('/DDNS_Provider/DDNSS/', function(req, res) {
    res.render('./Internet_Access/DDNS_Provider_DDNSS', {
        title: 'DDNSS DDNS Provider',
        uplink: '/Internet_Access/DDNS_Provider/',
        ampimg: '/images/Search/IA_SearchThumb_DDNSService.jpg',
        headline: 'Third Party DDNS Provider',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Internet_Access/">Internet Access</a></li><li><a href="/Internet_Access/DDNS_Provider/">DDNS Provider</a></li><li><a href="/Internet_Access/DDNS_Provider/DDNSS/">DDNSS</a></li>',
      });
  });

module.exports = internetAccessRouter;
