## ui-imageloader

Image loader Component

## Install Requirements

[install node](https://nodejs.org/download/)

```
sudo gem install sass
npm i
```

## To run server and unit tests

```
grunt
``` 


## Example
```
var aryImgElts = document.querySelectorAll('.project__image');
var imgLoader = new Imageloader(aryImgElts);
imgLoader.load();
```