var express = require('express');
var webUI720pRouter = express.Router();

/* ###################################### HD Series ###################################### */

/* GET HD WebUI page. */
webUI720pRouter.route('/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series', {
            title: 'INSTAR Web User Interface HD Series',
            uplink: '/Web_User_Interface/1080p_Series/Overview/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li>',
          });
      });

/* ###################################### HD Series Software ###################################### */

/* GET HD WebUI page. */
webUI720pRouter.route('/Software/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Software', {
            title: 'Software Menu',
            uplink: '/Web_User_Interface/720p_Series/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series :: Software',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li><li><a href="/Web_User_Interface/720p_Series/Software/">Software</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Software/Language/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Software_Language', {
            title: 'Software Menu :: Language',
            uplink: '/Web_User_Interface/720p_Series/Software/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series :: Software :: Language',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li><li><a href="/Web_User_Interface/720p_Series/Software/">Software</a></li><li><a href="/Web_User_Interface/720p_Series/Software/Language/">Language</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Software/Backup/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Software_Backup', {
            title: 'Software Menu :: Backup',
            uplink: '/Web_User_Interface/720p_Series/Software/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series :: Software :: Backup',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li><li><a href="/Web_User_Interface/720p_Series/Software/">Software</a></li><li><a href="/Web_User_Interface/720p_Series/Software/Backup/">Backup</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Software/Update/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Software_Update', {
            title: 'Software Menu :: Update',
            uplink: '/Web_User_Interface/720p_Series/Software/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series :: Software :: Update',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li><li><a href="/Web_User_Interface/720p_Series/Software/">Software</a></li><li><a href="/Web_User_Interface/720p_Series/Software/Update/">Update</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Software/Reboot_Reset/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Software_Reboot_Reset', {
            title: 'Software Menu :: Reboot & Reset',
            uplink: '/Web_User_Interface/720p_Series/Software/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series :: Software :: Reset',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li><li><a href="/Web_User_Interface/720p_Series/Software/">Software</a></li><li><a href="/Web_User_Interface/720p_Series/Software/Reboot_Reset/">Reboot & Reset</a></li>',
          });
      });

/* ###################################### HD Series Network ###################################### */

/* GET HD WebUI page. */
webUI720pRouter.route('/Network/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Network', {
            title: 'Network Menu',
            uplink: '/Web_User_Interface/720p_Series/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series :: Network',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li><li><a href="/Web_User_Interface/720p_Series/Network/">Network</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Network/IP_Configuration/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Network_IP_Configuration', {
            title: 'Network Menu :: IP Configuration',
            uplink: '/Web_User_Interface/720p_Series/Network/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series :: Network :: IP Config',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li><li><a href="/Web_User_Interface/720p_Series/Network/">Network</a></li><li><a href="/Web_User_Interface/720p_Series/Network/IP_Configuration/">IP Configuration</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Network/WiFi/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Network_WiFi', {
            title: 'Network Menu :: WiFi',
            uplink: '/Web_User_Interface/720p_Series/Network/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series :: Network :: WiFi',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li><li><a href="/Web_User_Interface/720p_Series/Network/">Network</a></li><li><a href="/Web_User_Interface/720p_Series/Network/WiFi/">WiFi</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Network/DDNS/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Network_DDNS', {
            title: 'Network Menu :: DDNS',
            uplink: '/Web_User_Interface/720p_Series/Network/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series :: Network :: DDNS',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li><li><a href="/Web_User_Interface/720p_Series/Network/">Network</a></li><li><a href="/Web_User_Interface/720p_Series/Network/DDNS/">DDNS</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Network/P2P/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Network_P2P', {
            title: 'Network Menu :: P2P',
            uplink: '/Web_User_Interface/720p_Series/Network/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series :: Network :: P2P',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li><li><a href="/Web_User_Interface/720p_Series/Network/">Network</a></li><li><a href="/Web_User_Interface/720p_Series/Network/P2P/">P2P</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Network/UPnP/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Network_UPnP', {
            title: 'Network Menu :: UPnP',
            uplink: '/Web_User_Interface/720p_Series/Network/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series :: Network :: UPnP',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li><li><a href="/Web_User_Interface/720p_Series/Network/">Network</a></li><li><a href="/Web_User_Interface/720p_Series/Network/UPnP/">UPnP</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Network/Push_Service/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Network_Push_Service', {
            title: 'Network Menu :: Push Service',
            uplink: '/Web_User_Interface/720p_Series/Network/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series :: Network :: Push Service',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li><li><a href="/Web_User_Interface/720p_Series/Network/">Network</a></li><li><a href="/Web_User_Interface/720p_Series/Network/Push_Service/">Push Service</a></li>',
          });
      });

/* ###################################### HD Series System ###################################### */

/* GET HD WebUI page. */
webUI720pRouter.route('/System/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System', {
            title: 'System Menu',
            uplink: '/Web_User_Interface/720p_Series/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series :: System',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li><li><a href="/Web_User_Interface/720p_Series/System/">System</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/System/Info/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_Info', {
            title: 'System Menu :: Info',
            uplink: '/Web_User_Interface/720p_Series/System/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series :: System :: Info',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li><li><a href="/Web_User_Interface/720p_Series/System/">System</a></li><li><a href="/Web_User_Interface/720p_Series/System/Info/">Info</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/System/Date_Time/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_Date_Time', {
            title: 'System Menu :: Date & Time',
            uplink: '/Web_User_Interface/720p_Series/System/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series :: System :: Time',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li><li><a href="/Web_User_Interface/720p_Series/System/">System</a></li><li><a href="/Web_User_Interface/720p_Series/System/Date_Time/">Date & Time</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/System/User/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_User', {
            title: 'System Menu :: User',
            uplink: '/Web_User_Interface/720p_Series/System/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series :: System :: User',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li><li><a href="/Web_User_Interface/720p_Series/System/">System</a></li><li><a href="/Web_User_Interface/720p_Series/System/User/">User</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/System/Status_LED/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_Status_LED', {
            title: 'System Menu :: Status LED',
            uplink: '/Web_User_Interface/720p_Series/System/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series :: System :: Status LED',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li><li><a href="/Web_User_Interface/720p_Series/System/">System</a></li><li><a href="/Web_User_Interface/720p_Series/System/Status_LED/">Status LED</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/System/IR_LED/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_IR_LED', {
            title: 'System Menu :: IR LED',
            uplink: '/Web_User_Interface/720p_Series/System/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series :: System :: IR LEDs',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li><li><a href="/Web_User_Interface/720p_Series/System/">System</a></li><li><a href="/Web_User_Interface/720p_Series/System/IR_LED/">IR LED</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/System/ONVIF/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_ONVIF', {
            title: 'System Menu :: ONVIF',
            uplink: '/Web_User_Interface/720p_Series/System/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series :: System :: ONVIF',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li><li><a href="/Web_User_Interface/720p_Series/System/">System</a></li><li><a href="/Web_User_Interface/720p_Series/System/ONVIF/">ONVIF</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/System/PTZ/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_PTZ', {
            title: 'System Menu :: PTZ',
            uplink: '/Web_User_Interface/720p_Series/System/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series :: System :: PTZ',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li><li><a href="/Web_User_Interface/720p_Series/System/">System</a></li><li><a href="/Web_User_Interface/720p_Series/System/PTZ/">PTZ</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/System/PTZ_Tour/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_PTZ_Tour', {
            title: 'System Menu :: PTZ Tour',
            uplink: '/Web_User_Interface/720p_Series/System/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series :: System :: PTZ Tour',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li><li><a href="/Web_User_Interface/720p_Series/System/">System</a></li><li><a href="/Web_User_Interface/720p_Series/System/PTZ_Tour/">PTZ Tour</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/System/System_Log/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_System_Log', {
            title: 'System Menu :: System Log',
            uplink: '/Web_User_Interface/720p_Series/System/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series :: System :: System Log',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li><li><a href="/Web_User_Interface/720p_Series/System/">System</a></li><li><a href="/Web_User_Interface/720p_Series/System/System_Log/">System Log</a></li>',
          });
      });

/* ###################################### HD Series Multimedia ###################################### */

/* GET HD WebUI page. */
webUI720pRouter.route('/Multimedia/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Multimedia', {
            title: 'Multimedia Menu',
            uplink: '/Web_User_Interface/720p_Series/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series :: Multimedia',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li><li><a href="/Web_User_Interface/720p_Series/Multimedia/">Multimedia</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Multimedia/Audio/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Multimedia_Audio', {
            title: 'Multimedia Menu :: Audio',
            uplink: '/Web_User_Interface/720p_Series/Multimedia/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series :: Multimedia :: Audio',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li><li><a href="/Web_User_Interface/720p_Series/Multimedia/">Multimedia</a></li><li><a href="/Web_User_Interface/720p_Series/Multimedia/Audio/">Audio</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Multimedia/Video/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Multimedia_Video', {
            title: 'Multimedia Menu :: Video',
            uplink: '/Web_User_Interface/720p_Series/Multimedia/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series :: Multimedia :: Video',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li><li><a href="/Web_User_Interface/720p_Series/Multimedia/">Multimedia</a></li><li><a href="/Web_User_Interface/720p_Series/Multimedia/Video/">Video</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Multimedia/Image/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Multimedia_Image', {
            title: 'Multimedia Menu :: Image',
            uplink: '/Web_User_Interface/720p_Series/Multimedia/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series :: Multimedia :: Image',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li><li><a href="/Web_User_Interface/720p_Series/Multimedia/">Multimedia</a></li><li><a href="/Web_User_Interface/720p_Series/Multimedia/Image/">Image</a></li>',
          });
      });

/* ###################################### HD Series Alarm ###################################### */

/* GET HD WebUI page. */
webUI720pRouter.route('/Alarm/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm', {
            title: 'Alarm Menu',
            uplink: '/Web_User_Interface/720p_Series/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series :: Alarm',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/">Alarm</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Alarm/Areas/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_Areas', {
            title: 'Alarm Menu :: Areas',
            uplink: '/Web_User_Interface/720p_Series/Alarm/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series :: Alarm :: Areas',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/Areas/">Areas</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Alarm/Privacy_Mask/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_Privacy_Mask', {
            title: 'Alarm Menu :: Privacy Mask',
            uplink: '/Web_User_Interface/720p_Series/Alarm/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series :: Alarm :: Privacy Mask',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/Privacy_Mask/">Privacy Mask</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Alarm/Actions/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_Actions', {
            title: 'Alarm Menu :: Actions',
            uplink: '/Web_User_Interface/720p_Series/Alarm/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series :: Alarm :: Actions',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/Actions/">Actions</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Alarm/Schedule/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_Schedule', {
            title: 'Alarm Menu :: Schedule',
            uplink: '/Web_User_Interface/720p_Series/Alarm/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series :: Alarm :: Schedule',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/Schedule/">Schedule</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Alarm/SMTP_Server/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_SMTP_Server', {
            title: 'Alarm Menu :: SMTP Server',
            uplink: '/Web_User_Interface/720p_Series/Alarm/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series :: Alarm :: SMTP Server',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/SMTP_Server/">SMTP Server</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Alarm/Email/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_Email', {
            title: 'Alarm Menu :: Email',
            uplink: '/Web_User_Interface/720p_Series/Alarm/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series :: Alarm :: Email',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/Email/">Email</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Alarm/FTP/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_FTP', {
            title: 'Alarm Menu :: FTP',
            uplink: '/Web_User_Interface/720p_Series/Alarm/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series :: Alarm :: FTP',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/FTP/">FTP</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Alarm/Audio_Alarm/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_Audio_Alarm', {
            title: 'Alarm Menu :: Audio Alarm',
            uplink: '/Web_User_Interface/720p_Series/Alarm/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series :: Alarm :: Audio Alarm',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/Audio_Alarm/">Audio Alarm</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Alarm/Alarmserver/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_Alarmserver', {
            title: 'Alarm Menu :: Alarmserver',
            uplink: '/Web_User_Interface/720p_Series/Alarm/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series :: Alarm :: Alarmserver',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/Alarmserver/">Alarmserver</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Alarm/SD_Card/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_SD_Card', {
            title: 'Alarm Menu :: SD Card',
			uplink: '/Web_User_Interface/720p_Series/Alarm/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series :: Alarm :: SD Card',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/SD_Card/">SD_Card</a></li>',
          });
      });

/* ###################################### HD Series Recording ###################################### */

/* GET HD WebUI page. */
webUI720pRouter.route('/Recording/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Recording', {
            title: 'Recording Menu',
			uplink: '/Web_User_Interface/720p_Series/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series :: Recording',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li><li><a href="/Web_User_Interface/720p_Series/Recording/">Recording</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Recording/Schedule/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Recording_Schedule', {
            title: 'Recording Menu :: Schedule',
			uplink: '/Web_User_Interface/720p_Series/Recording/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series :: Recording :: Schedule',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li><li><a href="/Web_User_Interface/720p_Series/Recording/">Recording</a></li><li><a href="/Web_User_Interface/720p_Series/Recording/Schedule/">Schedule</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Recording/Video/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Recording_Video', {
            title: 'Recording Menu :: Video',
			uplink: '/Web_User_Interface/720p_Series/Recording/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series :: Recording :: Video',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li><li><a href="/Web_User_Interface/720p_Series/Recording/">Recording</a></li><li><a href="/Web_User_Interface/720p_Series/Recording/Video/">Video</a></li>',
          });
      });

/* GET HD WebUI page. */
webUI720pRouter.route('/Recording/Photoseries/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Recording_Photoseries', {
            title: 'Recording Menu :: Photoseries',
			uplink: '/Web_User_Interface/720p_Series/Recording/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series :: Recording :: Photoseries',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li><li><a href="/Web_User_Interface/720p_Series/Recording/">Recording</a></li><li><a href="/Web_User_Interface/720p_Series/Recording/Photoseries/">Photoseries</a></li>',
          });
      });

/* ###################################### HD Series Menu Bar ###################################### */

/* GET HD WebUI page. */
webUI720pRouter.route('/Menu_Bar/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Menu_Bar', {
            title: 'Menu Bar',
			uplink: '/Web_User_Interface/720p_Series/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series :: Menu Bar',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li><li><a href="/Web_User_Interface/720p_Series/Menu_Bar/">Menu Bar</a></li>',
          });
      });

/* ###################################### HD Series Video Menu Bar ###################################### */

/* GET HD WebUI page. */
webUI720pRouter.route('/Video_Menu_Bar/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Video_Menu_Bar', {
            title: 'Video Menu Bar',
			uplink: '/Web_User_Interface/720p_Series/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series :: Video Menu Bar',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li><li><a href="/Web_User_Interface/720p_Series/Video_Menu_Bar/">Video Menu Bar</a></li>',
          });
      });

/* ###################################### HD Series PTZ ###################################### */

/* GET HD WebUI page. */
webUI720pRouter.route('/PTZ_Control/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_PTZ_Control', {
            title: 'PTZ Control',
			uplink: '/Web_User_Interface/720p_Series/',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            headline: 'INSTAR Web User Interface HD Series :: PTZ Control',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Web User Interface</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Series</a></li><li><a href="/Web_User_Interface/720p_Series/PTZ_Control/">PTZ Control</a></li>',
          });
      });

module.exports = webUI720pRouter;
