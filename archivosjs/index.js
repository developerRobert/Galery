
let  sliderI=1;
showSlider(sliderI)

 function slider(n) {
    showSlider(sliderI += n) 
 }

 function currentSlider(n) {
    showSlider(sliderI = n)
    
 }

 function showSlider(n) {
    // let i;
    let slide = document.getElementsByClassName("conteiner_imagen");
    let dots = document.getElementsByClassName("dot");

    if (n > slide.length) {
        sliderI = 1
    };
    if (n < 1) {
        sliderI = slide.length
    };

    for (let i = 0; i < slide.length; i++) {
      slide[i].style.display= "none"; 
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className= dots[i].className.replace("activo", "");
        
    }

    slide[sliderI - 1].style.display= "block";
    dots[sliderI - 1].className += "activo ";
    
 }
 