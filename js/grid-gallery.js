const body = document.querySelector("body");
const images = document.querySelectorAll(".gg-box img");
const l = images.length;
for(var i = 0; i < l; i++) {
    images[i].addEventListener("click", function(i) {
        const boxContainer = document.querySelector("#gg-screen");
        var route = this.src;
        var currentImg = this;
        const first = images[0].src;
        const last = images[l-1].src;
        boxContainer.hidden = false;
        body.style.overflow = 'hidden';
        boxContainer.innerHTML='<div class="gg-image"></div><div class="gg-close gg-bt">&times</div><div class="gg-next gg-bt">&rarr;</div><div class="gg-prev gg-bt">&larr;</div>';
        const boxImg = document.querySelector(".gg-image");
        const prevBtn = document.querySelector(".gg-prev");
        const nextBtn = document.querySelector(".gg-next");
        const close = document.querySelector(".gg-close");
        if (l > 1) {
            if (route == first){
                prevBtn.hidden = true;
                var prevImg = false;
                var nextImg = currentImg.nextElementSibling;
            }
            else if (route == last){
                nextBtn.hidden = true;
                var nextImg = false;
                var prevImg = currentImg.previousElementSibling;
            }
            else{
                var prevImg = currentImg.previousElementSibling;
                var nextImg = currentImg.nextElementSibling;
            }
        }
        else{
            prevBtn.hidden = true;
            nextBtn.hidden = true;
        }
        boxImg.innerHTML = '<img src="' + route + '">';
        boxContainer.addEventListener("click", function(e){
            if (e.target == this || e.target == close){
              boxContainer.hidden = true;
              body.style.overflow = 'auto';
            }
        });
        prevBtn.addEventListener("click", function(){
            prev();
        });
        nextBtn.addEventListener("click", function(){
            next();
        });
        body.addEventListener("keydown", function(e){
            if (e.keyCode == 37 || e.keyCode == 38) {
                prev();
            }
        });
        body.addEventListener("keydown", function(e){
            if (e.keyCode == 39 || e.keyCode == 40) {
                next();
            }
        });
        function prev(){
            prevImg = currentImg.previousElementSibling;
            boxImg.innerHTML = '<img src="' + prevImg.src + '">';
            currentImg = currentImg.previousElementSibling;
            var mainImg = document.querySelector(".gg-image > img").src;
            if (mainImg == first){
                prevBtn.hidden = true;
            }
            else{
                prevBtn.hidden = false;
                nextBtn.hidden = false;
            }
        };
        function next(){
            nextImg = currentImg.nextElementSibling;
            boxImg.innerHTML ='<img src="' + nextImg.src + '">';
            currentImg = currentImg.nextElementSibling;
            var mainImg = document.querySelector(".gg-image > img").src;
            if (mainImg == last){
                nextBtn.hidden = true;
            }
            else{
                nextBtn.hidden = false;
                prevBtn.hidden = false;
            }
        };
  });
}
