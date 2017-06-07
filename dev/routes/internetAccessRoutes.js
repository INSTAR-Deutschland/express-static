var express = require('express');
var internetAccessRouter = express.Router();
var appdata = require('../views/_partials/data/internetAccess.json');

/* GET Internet_Access page. */
internetAccessRouter.get('/', function(req, res) {
    res.render('./Internet_Access/Internet_Access', {
        title: 'Internet Access',
        ampimg: '/images/Search/IA_SearchThumb_AccessOverTheInternet.jpg',
        headline: 'Access your IP Camera over the Internet',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Internet_Access/">Internet Access</a></li>',
        canonical: '/Internet_Access/',
    		pacc: '',
    		ptab: 'hidden',
    		qiacc: '',
    		qitab: 'hidden',
    		mdacc: '',
    		mdtab: 'hidden',
    		iaacc: 'expanded',
    		iatab: '',
    		auacc: '',
    		autab: 'hidden',
    		hdacc: 'hidden',
    		hdtab: 'hidden',
    		fhdacc: 'hidden',
    		fhdtab: 'hidden',
    		sacc: 'hidden',
    		dlacc: 'hidden',
    		dltab: 'hidden',
      });
  });

internetAccessRouter.get('/The_DDNS_Service/', function(req, res) {
    res.render('./Internet_Access/The_DDNS_Service', {
        title: 'The DDNS Service',
        ampimg: '/images/Search/IA_SearchThumb_DDNSService.jpg',
        headline: 'The DDNS Service',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Internet_Access/">Internet Access</a></li><li><a href="/Internet_Access/The_DDNS_Service/">The DDNS Service</a></li>',
        canonical: '/Internet_Access/The_DDNS_Service/',
    		pacc: '',
    		ptab: 'hidden',
    		qiacc: '',
    		qitab: 'hidden',
    		mdacc: '',
    		mdtab: 'hidden',
    		iaacc: 'expanded',
    		iatab: '',
    		auacc: '',
    		autab: 'hidden',
    		hdacc: 'hidden',
    		hdtab: 'hidden',
    		fhdacc: 'hidden',
    		fhdtab: 'hidden',
    		sacc: 'hidden',
    		dlacc: 'hidden',
    		dltab: 'hidden',
      });
  });

internetAccessRouter.get('/Port_Forwarding/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding', {
        title: 'Port Forwarding',
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding.jpg',
        headline: 'Port Forwarding',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Internet_Access/">Internet Access</a></li><li><a href="/Internet_Access/Port_Forwarding/">Port Forwarding</a></li>',
        canonical: '/Internet_Access/Port_Forwarding/',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: '',
		mdtab: 'hidden',
		iaacc: 'expanded',
		iatab: '',
		auacc: '',
		autab: 'hidden',
		hdacc: 'hidden',
		hdtab: 'hidden',
		fhdacc: 'hidden',
		fhdtab: 'hidden',
		sacc: 'hidden',
		dlacc: 'hidden',
		dltab: 'hidden',
      });
  });

internetAccessRouter.get('/Port_Forwarding/AVM_Fritzbox/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_AVM_Fritzbox', {
        title: 'Port Forwarding AVM Fritzbox',
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding_Fritzbox.jpg',
        headline: 'Port Forwarding AVM Fritzbox',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Internet_Access/">Internet Access</a></li><li><a href="/Internet_Access/Port_Forwarding/">Port Forwarding</a></li><li><a href="/Internet_Access/Port_Forwarding/AVM_Fritzbox/">AVM Fritzbox</a></li>',
        canonical: '/Internet_Access/Port_Forwarding/AVM_Fritzbox/',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: '',
		mdtab: 'hidden',
		iaacc: 'expanded',
		iatab: '',
		auacc: '',
		autab: 'hidden',
		hdacc: 'hidden',
		hdtab: 'hidden',
		fhdacc: 'hidden',
		fhdtab: 'hidden',
		sacc: 'hidden',
		dlacc: 'hidden',
		dltab: 'hidden',
      });
  });

internetAccessRouter.get('/Port_Forwarding/Telekom_Speedport/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_Telekom_Speedport', {
        title: 'Port Forwarding Telekom Speedport',
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding_Speedport.jpg',
        headline: 'Port Forwarding Telekom Speedport',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Internet_Access/">Internet Access</a></li><li><a href="/Internet_Access/Port_Forwarding/">Port Forwarding</a></li><li><a href="/Internet_Access/Port_Forwarding/Telekom_Speedport/">Telekom Speedport</a></li>',
        canonical: '/Internet_Access/Port_Forwarding/Telekom_Speedport/',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: '',
		mdtab: 'hidden',
		iaacc: 'expanded',
		iatab: '',
		auacc: '',
		autab: 'hidden',
		hdacc: 'hidden',
		hdtab: 'hidden',
		fhdacc: 'hidden',
		fhdtab: 'hidden',
		sacc: 'hidden',
		dlacc: 'hidden',
		dltab: 'hidden',
      });
  });

internetAccessRouter.get('/Port_Forwarding/D-Link/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_D-Link', {
        title: 'Port Forwarding D-Link',
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding_DLink.jpg',
        headline: 'Port Forwarding D-Link',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Internet_Access/">Internet Access</a></li><li><a href="/Internet_Access/Port_Forwarding/">Port Forwarding</a></li><li><a href="/Internet_Access/Port_Forwarding/D-Link/">D-Link</a></li>',
        canonical: '/Internet_Access/Port_Forwarding/D-Link/',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: '',
		mdtab: 'hidden',
		iaacc: 'expanded',
		iatab: '',
		auacc: '',
		autab: 'hidden',
		hdacc: 'hidden',
		hdtab: 'hidden',
		fhdacc: 'hidden',
		fhdtab: 'hidden',
		sacc: 'hidden',
		dlacc: 'hidden',
		dltab: 'hidden',
      });
  });

internetAccessRouter.get('/Port_Forwarding/TP-Link/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_TP-Link', {
        title: 'Port Forwarding TP-Link',
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding_TPLink.jpg',
        headline: 'Port Forwarding TP-Link',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Internet_Access/">Internet Access</a></li><li><a href="/Internet_Access/Port_Forwarding/">Port Forwarding</a></li><li><a href="/Internet_Access/Port_Forwarding/TP-Link/">TP-Link</a></li>',
        canonical: '/Internet_Access/Port_Forwarding/TP-Link/',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: '',
		mdtab: 'hidden',
		iaacc: 'expanded',
		iatab: '',
		auacc: '',
		autab: 'hidden',
		hdacc: 'hidden',
		hdtab: 'hidden',
		fhdacc: 'hidden',
		fhdtab: 'hidden',
		sacc: 'hidden',
		dlacc: 'hidden',
		dltab: 'hidden',
      });
  });

internetAccessRouter.get('/Port_Forwarding/Netgear/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_Netgear', {
        title: 'Port Forwarding Netgear',
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding_Netgear.jpg',
        headline: 'Port Forwarding Netgear',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Internet_Access/">Internet Access</a></li><li><a href="/Internet_Access/Port_Forwarding/">Port Forwarding</a></li><li><a href="/Internet_Access/Port_Forwarding/Netgear/">Netgear</a></li>',
        canonical: '/Internet_Access/Port_Forwarding/Netgear/',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: '',
		mdtab: 'hidden',
		iaacc: 'expanded',
		iatab: '',
		auacc: '',
		autab: 'hidden',
		hdacc: 'hidden',
		hdtab: 'hidden',
		fhdacc: 'hidden',
		fhdtab: 'hidden',
		sacc: 'hidden',
		dlacc: 'hidden',
		dltab: 'hidden',
      });
  });

internetAccessRouter.get('/Port_Forwarding/Vodafone_Easybox/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_Vodafone_Easybox', {
        title: 'Port Forwarding Vodafone Easybox',
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding_Easybox.jpg',
        headline: 'Port Forwarding Vodafone Easybox',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Internet_Access/">Internet Access</a></li><li><a href="/Internet_Access/Port_Forwarding/">Port Forwarding</a></li><li><a href="/Internet_Access/Port_Forwarding/Vodafone_Easybox/">Vodafone Easybox</a></li>',
        canonical: '/Internet_Access/Port_Forwarding/Vodafone_Easybox/',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: '',
		mdtab: 'hidden',
		iaacc: 'expanded',
		iatab: '',
		auacc: '',
		autab: 'hidden',
		hdacc: 'hidden',
		hdtab: 'hidden',
		fhdacc: 'hidden',
		fhdtab: 'hidden',
		sacc: 'hidden',
		dlacc: 'hidden',
		dltab: 'hidden',
      });
  });

internetAccessRouter.get('/Port_Forwarding/Pirelli/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_Pirelli', {
        title: 'Port Forwarding Pirelli',
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding_Pirelli.jpg',
        headline: 'Port Forwarding Pirelli',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Internet_Access/">Internet Access</a></li><li><a href="/Internet_Access/Port_Forwarding/">Port Forwarding</a></li><li><a href="/Internet_Access/Port_Forwarding/Pirelli/">Pirelli</a></li>',
        canonical: '/Internet_Access/Port_Forwarding/Pirelli/',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: '',
		mdtab: 'hidden',
		iaacc: 'expanded',
		iatab: '',
		auacc: '',
		autab: 'hidden',
		hdacc: 'hidden',
		hdtab: 'hidden',
		fhdacc: 'hidden',
		fhdtab: 'hidden',
		sacc: 'hidden',
		dlacc: 'hidden',
		dltab: 'hidden',
      });
  });

internetAccessRouter.get('/DDNS_Provider/', function(req, res) {
    res.render('./Internet_Access/DDNS_Provider', {
        title: 'Third Party DDNS Provider',
        ampimg: '/images/Search/IA_SearchThumb_ThirdPartyDDNS.jpg',
        headline: 'Third Party DDNS Provider',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Internet_Access/">Internet Access</a></li><li><a href="/Internet_Access/DDNS_Provider/">DDNS Provider</a></li>',
        canonical: '/Internet_Access/DDNS_Provider/',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: '',
		mdtab: 'hidden',
		iaacc: 'expanded',
		iatab: '',
		auacc: '',
		autab: 'hidden',
		hdacc: 'hidden',
		hdtab: 'hidden',
		fhdacc: 'hidden',
		fhdtab: 'hidden',
		sacc: 'hidden',
		dlacc: 'hidden',
		dltab: 'hidden',
      });
  });

internetAccessRouter.get('/DDNS_Provider/NoIP/', function(req, res) {
    res.render('./Internet_Access/DDNS_Provider_NoIP', {
        title: 'NoIP DDNS Provider',
        ampimg: '/images/Search/IA_SearchThumb_ThirdPartyDDNS_noIP.jpg',
        headline: 'Third Party DDNS Provider',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Internet_Access/">Internet Access</a></li><li><a href="/Internet_Access/DDNS_Provider/">DDNS Provider</a></li><li><a href="/Internet_Access/DDNS_Provider/NoIP/">NoIP</a></li>',
        canonical: '/Internet_Access/DDNS_Provider/NoIP/',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: '',
		mdtab: 'hidden',
		iaacc: 'expanded',
		iatab: '',
		auacc: '',
		autab: 'hidden',
		hdacc: 'hidden',
		hdtab: 'hidden',
		fhdacc: 'hidden',
		fhdtab: 'hidden',
		sacc: 'hidden',
		dlacc: 'hidden',
		dltab: 'hidden',
      });
  });

internetAccessRouter.get('/DDNS_Provider/Selfhost/', function(req, res) {
    res.render('./Internet_Access/DDNS_Provider_Selfhost', {
        title: 'Selfhost DDNS Provider',
        ampimg: '/images/Search/IA_SearchThumb_ThirdPartyDDNS_selfhost.jpg',
        headline: 'Third Party DDNS Provider',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Internet_Access/">Internet Access</a></li><li><a href="/Internet_Access/DDNS_Provider/">DDNS Provider</a></li><li><a href="/Internet_Access/DDNS_Provider/Selfhost/">Selfhost</a></li>',
        canonical: '/Internet_Access/DDNS_Provider/Selfhost/',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: '',
		mdtab: 'hidden',
		iaacc: 'expanded',
		iatab: '',
		auacc: '',
		autab: 'hidden',
		hdacc: 'hidden',
		hdtab: 'hidden',
		fhdacc: 'hidden',
		fhdtab: 'hidden',
		sacc: 'hidden',
		dlacc: 'hidden',
		dltab: 'hidden',
      });
  });

internetAccessRouter.get('/DDNS_Provider/DDNSS/', function(req, res) {
    res.render('./Internet_Access/DDNS_Provider_DDNSS', {
        title: 'DDNSS DDNS Provider',
        ampimg: '/images/Search/IA_SearchThumb_ThirdPartyDDNS_ddnss.jpg',
        headline: 'Third Party DDNS Provider',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Internet_Access/">Internet Access</a></li><li><a href="/Internet_Access/DDNS_Provider/">DDNS Provider</a></li><li><a href="/Internet_Access/DDNS_Provider/DDNSS/">DDNSS</a></li>',
        canonical: '/Internet_Access/DDNS_Provider/DDNSS/',
		pacc: '',
		ptab: 'hidden',
		qiacc: '',
		qitab: 'hidden',
		mdacc: '',
		mdtab: 'hidden',
		iaacc: 'expanded',
		iatab: '',
		auacc: '',
		autab: 'hidden',
		hdacc: 'hidden',
		hdtab: 'hidden',
		fhdacc: 'hidden',
		fhdtab: 'hidden',
		sacc: 'hidden',
		dlacc: 'hidden',
		dltab: 'hidden',
      });
  });

module.exports = internetAccessRouter;
