let img = document.querySelectorAll(".hero-img");
let prevBtn = document.querySelector(".control_prev");
let nextBtn = document.querySelector(".control_next");

let n = 0;

changeSlide=()=>{
    for(let i = 0; i < img.length; i++){
        img[i].style.display = "none";  // for hide images
    }
    img[n].style.display = "block";  // for visible images 
}

// change images by click button
changeSlide();
       // for left side button

 prevBtn.addEventListener('click',(evt)=>{
    if(n > 0){
        n--;
    }else{
        n = img.length - 1;
    }    
    changeSlide();
 })
   
        //for right side button

 nextBtn.addEventListener('click',()=>{
    if(n < img.length-1){
        n++;
    }else{
        n = 0;
    }
    changeSlide();
 })