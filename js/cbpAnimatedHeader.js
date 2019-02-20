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
var cbpAnimatedHeader=function(){function e(){window.addEventListener("scroll",function(e){t||(t=!0,setTimeout(s,250))},!1)}function s(){var e=a();e>=c?(classie.add(r,"navbar-shrink"),classie.add(r,"success")):(classie.remove(r,"navbar-shrink"),classie.remove(r,"success")),t=!1}function a(){return window.pageYOffset||n.scrollTop}var n=document.documentElement,r=document.querySelector(".navbar-fixed-top"),t=!1,c=80,o=document.location.pathname;"/ru/"==o.substr(o.length-4)||o.includes("/ru/platform-features.html")||o.includes("/ru/platform-architecture.html")||o.includes("/ru/platform-development-process.html")||o.includes("/ru/platform-roadmap.html")?e():(classie.add(r,"success"),classie.add(r,"navbar-shrink"))}();