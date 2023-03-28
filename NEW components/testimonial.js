let currentslide = 0;

const sliders = document.querySelectorAll(".slider-ite");
const totalslides = sliders.length;
console.log(totalslides);

const prev = document.getElementById("btn-pre");
const next = document.getElementById("btn-nex");
prev.addEventListener("click", ()=>{
    dec();
})
next.addEventListener("click", ()=>{
    inc();
})

function update(){
    sliders.forEach(slide=>{
        slide.classList.remove("activ");
        slide.classList.add("hidde");
    });
    sliders[currentslide].classList.add("activ");
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
