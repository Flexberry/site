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
var cbpAnimatedHeader = (function() {

  var docElem = document.documentElement,
    header = document.querySelector( '.navbar-fixed-top' ),
    didScroll = false,
    changeHeaderOn = 80,
    pathname = document.location.pathname;

  function init() {
    window.addEventListener( 'scroll', function( event ) {
      if( !didScroll ) {
        didScroll = true;
        setTimeout( scrollPage, 250 );
      }
    }, false );
  }

  function scrollPage() {
    var sy = scrollY();
    if ( sy >= changeHeaderOn) {
      classie.add( header, 'navbar-shrink' );
      classie.add( header, 'success' );
    } else {
      classie.remove( header, 'navbar-shrink' );
      classie.remove( header, 'success' );
    }
    didScroll = false;
  }

  function scrollY() {
    return window.pageYOffset || docElem.scrollTop;
  }

  if (( pathname.substr(pathname.length - 4) == "/ru/")
    ||(pathname.includes("/ru/platform-features.html"))
    ||(pathname.includes("/ru/platform-architecture.html"))
    ||(pathname.includes("/ru/platform-development-process.html"))
    ||(pathname.includes("/ru/platform-roadmap.html"))) {
      init();

  } else {
    classie.add( header, 'success' );
    classie.add( header, 'navbar-shrink' );
  }
})();