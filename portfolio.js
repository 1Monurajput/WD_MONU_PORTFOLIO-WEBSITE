const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
    var dots = elem.getAttribute('data-dots')
    var marked = elem.getAttribute('data-percent');
    var percent = Math.floor(dots * marked / 100);
    var rotate = 360 / dots;
    var points = "";
    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i: ${i}; --rot: ${rotate}deg"></div>`;
    }
    elem.innerHTML = points;
    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked')
    }
})


// typed js-----------------------------------------
var typed = new Typed(".autoType", {
    strings:["Frontend Developer", "Web Developer", "Software Tester","Search Engine optimizer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})
var typed = new Typed(".one", {
    strings:["Let's <br>work together"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:2000,
    loop:true
})

var typed = new Typed(".skillTitle1", {
    strings:["Skills..."],
    typeSpeed:400,
    backSpeed:200,
    backDelay:2000,
    loop:true
})

var typed = new Typed(".latestProjects", {
    strings:["Latest <br> projects..."],
    typeSpeed:200,
    backSpeed:400,
    backDelay:2000,
    loop:true
})

function dark(){
    document.body.classList.toggle("darkTheme");
    let cnt = 0;
    if(document.body.classList.contains("darkTheme")){
        cnt = 1;
    }
    if(cnt == 1){
        document.querySelector("#darkMode").style.opacity="1";
        document.querySelector("#brightMode").style.opacity="0";
    }
    else{
        document.querySelector("#darkMode").style.opacity="0";
        document.querySelector("#brightMode").style.opacity="1";
    }

}


let count = 0;
function button(){
    if(count == 0){
        document.querySelector(".buttonMenu").style.display="block";
        count = 1;
    }
    else{
        document.querySelector(".buttonMenu").style.display="none";
        count = 0;
    }
}

let cv = document.getElementById("downloadCv");
cv.addEventListener("click",()=>{
    alert("Download complete");
})
