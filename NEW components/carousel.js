let currentslide = 0;

const sliders = document.querySelectorAll(".slider-item");
const totalslides = sliders.length;
console.log(totalslides);

const prev = document.getElementById("btn-prev");
const next = document.getElementById("btn-next");
prev.addEventListener("click", ()=>{
    dec();
})
next.addEventListener("click", ()=>{
    inc();
})

function update(){
    sliders.forEach(slide=>{
        slide.classList.remove("active");
        slide.classList.add("hidden");
    });
    sliders[currentslide].classList.add("active");
}

function dec(){
    if(currentslide == 0){
        currentslide = totalslides - 1;
    }
    else{
        currentslide--;
    }
    update();
}

function inc(){
    if(currentslide == totalslides - 1){
        currentslide = 0;
    }
    else{
        currentslide++;
    }
    
    update();
}
setInterval(()=>{
    if(currentslide == sliders.length-1){
        currentslide = 0;
    }
    else{
        currentslide++;
    }
    update();
},3000)
