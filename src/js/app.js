'use strict';

var aryImgElts = document.querySelectorAll('.project__image');
var imgLoader = new Imageloader(aryImgElts);
imgLoader.load();