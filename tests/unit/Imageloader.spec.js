'use strict';

describe('Imageloader', function() {
  var loader, images;

  describe('constructor', function() {
    beforeEach(function() {
      loader = new Imageloader(['a', 'b', 'c']);
    });

    it('assigns aryImgElts public property', function() {
      expect(loader.aryImgElts).toEqual(['a', 'b', 'c']);
    });

    it('creates queue property', function() {
      expect(loader.queue).toEqual([]);
    });
  });

  describe('load()', function() {
    beforeEach(function() {
      loader = new Imageloader(['a', 'b', 'c']);
    });

    it('calls loadImage() for each element in aryImgElts', function() {
      spyOn(loader, 'loadImage');
      loader.load();

      expect(loader.loadImage).toHaveBeenCalledWith('a');
      expect(loader.loadImage).toHaveBeenCalledWith('b');
      expect(loader.loadImage).toHaveBeenCalledWith('c');
    });

    it('does not call loadImage() for empty aryImgElts', function() {
      var emptyLoader = new Imageloader();
      spyOn(emptyLoader, 'loadImage');

      emptyLoader.load();

      expect(emptyLoader.loadImage).not.toHaveBeenCalled();
    });
  });

  describe('loadImage()', function() {
    beforeEach(function() {
      var img;
      images = [];

      for(var i = 0; i < 3; i++) {
        img = document.createElement('img');
        img.dataset.src = i + '.jpg';
        images.push(img);
      }

      loader = new Imageloader(images);
    });

    it('adds loading css class', function() {
      var img = images[0];
      loader.loadImage(img);
      expect(img.classList).toContain('ui-imageloader--loading');
    });
  });

  describe('callback()', function() {
    var img;
    beforeEach(function() {
      img = document.createElement('img');
      img.dataset.src = 'http://fakepath/1.jpg';

      loader = new Imageloader();
      loader.queue = [img];
    });

    it('loads first image on the queue', function() {
      loader.callback();
      expect(img.classList).not.toContain('ui-imageloader--loading');
      expect(img.src).toEqual('http://fakepath/1.jpg');
      expect(img.classList).toContain('ui-imageloader--loaded');
      expect(loader.queue.length).toBe(0);
    });
  });
});