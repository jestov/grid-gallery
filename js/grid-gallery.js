const body = document.querySelector("body, html");
const images = document.querySelectorAll(".gg-box img");
const l = images.length;
const boxContainer = document.querySelector("#gg-screen");

for(var i = 0; i < l; i++) {
  images[i].addEventListener("click", function(i) {
    var route = this.src;
    var currentImg = this;
    const first = images[0].src;
    const last = images[l-1].src;
    boxContainer.hidden = false;
    body.style.overflow = 'hidden';
    boxContainer.innerHTML = '<div class="gg-image"></div><div class="gg-close gg-btn">&times</div><div class="gg-next gg-btn">&rarr;</div><div class="gg-prev gg-btn">&larr;</div>';
    const boxImg = document.querySelector(".gg-image");
    const prevBtn = document.querySelector(".gg-prev");
    const nextBtn = document.querySelector(".gg-next");
    const close = document.querySelector(".gg-close");
    boxImg.innerHTML = '<img src="' + route + '">';

    if (l > 1) {
      if (route == first) {
        prevBtn.hidden = true;
        var prevImg = false;
        var nextImg = currentImg.nextElementSibling;
      }
      else if (route == last) {
        nextBtn.hidden = true;
        var nextImg = false;
        var prevImg = currentImg.previousElementSibling;
      }
      else {
        var prevImg = currentImg.previousElementSibling;
        var nextImg = currentImg.nextElementSibling;
      }
    }
    else {
      prevBtn.hidden = true;
      nextBtn.hidden = true;
    }

    boxContainer.addEventListener("click", function(e) {
      if (e.target == this || e.target == close) {
        hide();
      }
    });

    body.addEventListener("keydown", function(e) {
      if (e.keyCode == 27 ) {
        hide();
      }
    });

    body.addEventListener("keydown", function(e) {
      if (e.keyCode == 37 || e.keyCode == 38) {
        prev();
      }
    });

    body.addEventListener("keydown", function(e) {
      if (e.keyCode == 39 || e.keyCode == 40) {
        next();
      }
    });

    prevBtn.addEventListener("click", function() {
      prev();
    });

    nextBtn.addEventListener("click", function() {
      next();
    });

    function prev() {
      prevImg = currentImg.previousElementSibling;
      boxImg.innerHTML = '<img src="' + prevImg.src + '">';
      currentImg = currentImg.previousElementSibling;
      var mainImg = document.querySelector(".gg-image > img").src;
      nextBtn.hidden = false;
      prevBtn.hidden = mainImg === first;
    };

    function next() {
      nextImg = currentImg.nextElementSibling;
      boxImg.innerHTML ='<img src="' + nextImg.src + '">';
      currentImg = currentImg.nextElementSibling;
      var mainImg = document.querySelector(".gg-image > img").src;
      prevBtn.hidden = false;
      nextBtn.hidden = mainImg === last;
    };

    function hide() {
      boxContainer.hidden = true;
      body.style.overflow = 'auto';
    };
  });
}

function gridGallery (options) {
  if (options.darkMode) {
    boxContainer.setAttribute("data-theme", "dark");
  }

  if (options.layout == "horizontal" || options.layout == "square") {
    body.setAttribute("data-layout", options.layout);
  }

  if (options.gapLenght) {
    body.style.setProperty('--gap-lenght', options.gapLenght + 'px');
  }

  if (options.rowHeight) {
    body.style.setProperty('--row-height', options.rowHeight + 'px');
  }

  if (options.columnWidth) {
    body.style.setProperty('--column-width', options.columnWidth + 'px');
  }
}