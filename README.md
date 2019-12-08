# grid-gallery

A simple and light Grid Gallery

## Demos

[https://jestov.com/grid-gallery/](https://jestov.com/grid-gallery/)

## Usage

1. Add a link to the css file in your `<head>`:

```html
<link rel="stylesheet" type="text/css" href="css/grid-gallery.css"/>
// Or for the minified file, add this:
<link rel="stylesheet" type="text/css" href="css/grid-gallery.min.css"/>
```
2. On your ```<body>``` tag add:
```html
<div class="gg-container">
  <div class="gg-box">
    <img src="img/your-image-1.jpg">
    <img src="img/your-image-2.jpg">
    <img src="img/your-image-n.jpg">
  </div>
</div>
```
3. Before your closing ```<body>``` tag add:

```html
<script type="text/javascript" src="js/grid-gallery.js"></script>
// Or for the minified file, add this:
<script type="text/javascript" src="js/grid-gallery.min.js"></script>
```
## Multiple Galleries

 Can have multiple galleries:
 
```html
<div class="gg-container">
  <div class="gg-box"> <!-- first gallery --->
    <img src="img/your-image-1.jpg">
    <img src="img/your-image-2.jpg">
    <img src="img/your-image-n.jpg">
  </div>
  
  <div class="gg-box"> <!-- second gallery -->
    <img src="img/your-image-1.jpg">
    <img src="img/your-image-2.jpg">
    <img src="img/your-image-n.jpg">
  </div>
</div>
```
## Settings

Option | Type | Default | Description | options
------ | ---- | ------- | ----------- | -------
selector | string | null | Element to which the settings are applied to customize the options of a specific gallery | ".class", "#id"
darkMode | boolean | false | Enable a dark theme for the gallery | true
layout | string | "vertical" | Adapts the layout of the gallery box | "horizontal", "square"
gapLength | number | 2 | Modify the thickness in pixels of the gaps between images 
rowHeight | number | 200 | Modify the height of images
columnWidth | number | 220 | Customize the width of images

## Customize especific gallery 

```html
<div class="gg-container">
  <div class="gg-box"> <!-- This gallery takes it the default values -->
    <img src="img/your-image-1.jpg">
    <img src="img/your-image-2.jpg">
    <img src="img/your-image-n.jpg">
  </div>
  
  <div class="gg-box" id="square-dark">
    <img src="img/your-image-1.jpg">
    <img src="img/your-image-2.jpg">
    <img src="img/your-image-n.jpg">
  </div>
  
  <div class="gg-box" id="horizontal-dark">
    <img src="img/your-image-1.jpg">
    <img src="img/your-image-2.jpg">
    <img src="img/your-image-n.jpg">
  </div>
</div>
```
After the main JS file, add:

```javascript
gridGallery({
 selector: "#square-dark",
 darkMode: true,
 layout: "square",
 gapLength: 4,
 rowHeight: 180,
 columnWidth: 200
});

gridGallery({
 selector: "#horizontal-dark",
 darkMode: true,
 layout: "horizontal",
 gapLength: 10,
 rowHeight: 150,
 columnWidth: 190
});
```

## Customize multiple galleries

```html
<div class="gg-container">
  <div class="gg-box square-gallery">
    <img src="img/your-image-1.jpg">
    <img src="img/your-image-2.jpg">
    <img src="img/your-image-n.jpg">
  </div>
  
  <div class="gg-box square-gallery">
    <img src="img/your-image-1.jpg">
    <img src="img/your-image-2.jpg">
    <img src="img/your-image-n.jpg">
  </div>
</div>
```
After the main JS file, add:

```javascript
gridGallery({
 selector: ".square-gallery",
 layout: "square",
 gapLength: 1,
 columnWidth: 200
});
```

### Credits

All images from [Unsplash](https://www.unsplash.com)
