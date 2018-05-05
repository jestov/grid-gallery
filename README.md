# grid-gallery

A simple and light Grid Gallery

## Demo

[https://jestov.github.io/grid-gallery/](https://jestov.github.io/grid-gallery/)

## Usage

1) Add a link to the css file in your `<head>`:

```html
<link rel="stylesheet" type="text/css" href="css/grid-gallery.css"/>
// Or for the minified file, add this:
<link rel="stylesheet" type="text/css" href="css/grid-gallery.min.css"/>
```
2) On your ```<body>``` tag add:
```html
<div id="gg-screen"></div>
<div class="gg-box">
  <div class="gg-element">
    <img src="img/your-image-1.jpg">
  </div>
  <div class="gg-element">
    <img src="img/your-image-2.jpg">
  </div>
  <div class="gg-element">
    <img src="img/your-image-3.jpg">
  </div>
  <div class="gg-element">
    <img src="img/your-image-n.jpg">
  </div>
</div>
```

3) Before your closing ```<body>``` tag add:

```html
<script type="text/javascript" src="js/grid-gallery.js"></script>
// Or for the minified file, add this:
<script type="text/javascript" src="js/grid-gallery.min.js"></script>
```

### Credits

All images from [Unsplash](https://www.unsplash.com)
