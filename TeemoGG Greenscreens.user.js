// ==UserScript==
// @name         TeemoGG Greenscreens
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://teemo.gg/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let limiter = document.getElementsByClassName('limiter')[1];
    limiter.style.width = '85vw';

    let sideAd = document.getElementsByClassName('side-ad');

    sideAd[0].style.display = 'none';
    sideAd[1].style.display = 'none';

    new BABYLON.Layer("back", "https://i.imgur.com/ooLZB4W.png", scene, true);
})();



/*
// ==UserScript==
// @name         TeemoGG Greenscreens
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://teemo.gg/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var removeAd = document.getElementsByClassName("ad-container GoogleActiveViewElement");
    removeAd.style = 'display:none;!important';
    var canvasTamper = document.getElementById('champion-model');
    canvasTamper.style = 'width:1280px;height:640px;z-index:999;'

    new BABYLON.Layer("back", "https://i.imgur.com/ooLZB4W.png", scene, true);
})();
*/

/*  var removeAd = document.getElementsByClassName("side-ad");
    removeAd.style = 'display:none!important';
    var removeAd2 = document.getElementById('ad_unit');
    removeAd2.style = 'display:none!important';
    var removeAd3 = document.getElementById('products_logo');
    removeAd3.sytle = 'display:none!important;';
*/