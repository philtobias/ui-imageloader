'use strict';

function Imageloader(aryImgElts) {
  this.aryImgElts = aryImgElts || [];
  this.queue = [];
}

Imageloader.prototype.load = function() {
  for(var i = 0, len = this.aryImgElts.length; i < len; i++) {
    this.loadImage(this.aryImgElts[i]);
  }
};

Imageloader.prototype.loadImage = function(imgElt) {
  var imgSrc = imgElt && imgElt.dataset && imgElt.dataset.src;

  if(imgSrc) {
    imgElt.classList.add('ui-imageloader--loading');
    var self = this;
    var img = new Image();
    img.src = imgSrc;
    img.onload = (function() {
      var isEmptyQueue = this.queue.length === 0;
      this.queue.push(imgElt);
      if(isEmptyQueue) {
        requestAnimationFrame(this.callback.bind(this));
      }
    }).bind(this);
  }
};

Imageloader.prototype.callback = function() {
  var imgElt = this.queue.shift();

  if(imgElt) {
    imgElt.classList.remove('ui-imageloader--loading');
    imgElt.src = imgElt.dataset.src;
    imgElt.classList.add('ui-imageloader--loaded');
  }

  if(this.queue.length > 0) {
    requestAnimationFrame(this.callback.bind(this));
  }
};