/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader=function(){function e(){window.addEventListener("scroll",function(e){c||(c=!0,setTimeout(s,250))},!1)}function s(){var e=n();e>=r?(classie.add(a,"navbar-shrink"),classie.add(a,"success")):(classie.remove(a,"navbar-shrink"),classie.remove(a,"success")),c=!1}function n(){return window.pageYOffset||t.scrollTop}var t=document.documentElement,a=document.querySelector(".navbar-fixed-top"),c=!1,r=80,l=document.location.pathname;"/ru/"==l.substr(l.length-4)||"/en/"==l.substr(l.length-4)||l.includes("/platform-features.html")||l.includes("/platform-architecture.html")||l.includes("/platform-development-process.html")||l.includes("/platform-roadmap.html")?e():(classie.add(a,"success"),classie.add(a,"navbar-shrink"))}();