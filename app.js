const slides = document.querySelectorAll(".slide")
const prevBtn = document.querySelector(".prevBtn")
const nextBtn = document.querySelector(".nextBtn")
slides.forEach((slide,index)=>{
    slide.style.left = `${index * 100}%`
})
 let counter = 0
prevBtn.addEventListener("click",()=>{
    counter--
    carousel()
})
nextBtn.addEventListener("click",()=>{
    counter++
    carousel()
})
function carousel(){
// if(counter === counter.length){
//     counter = 0
// }
// else if(counter <1){
//     counter = counter.length-1
// }
if(counter > slides.length-1){
    nextBtn.style.display = `none`
}else{
    nextBtn.style.display = `block`
}
if(counter < 1){
    prevBtn.style.display = `none`
}else{
    prevBtn.style.display = `block`

}

    slides.forEach((slide)=>{
        slide.style.transform = `translateX(-${counter*100}%)`
    })
}