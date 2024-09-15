




let bgcToggle = document.getElementById("background-toggle");
let aTagToggle = document.getElementsByTagName("a");
bgcToggle.onclick = function(){
    if(bgcToggle.src.includes("moon.png")) {
        bgcToggle.src = "sun.png";
        document.body.classList.add("black");
        document.body.classList.remove("white");
        for (let i = 0; i < aTagToggle.length; i++) {
            aTagToggle[i].classList.add("black");
        }
    }
    else {
        bgcToggle.src = "moon.png";
        document.body.classList.add("white");
        document.body.classList.remove("black");
        for (let i = 0; i < aTagToggle.length; i++) {
            aTagToggle[i].classList.remove("black");
        }
    }
}

// let skillOpenCloseToggle = document.getElementsByClassName("skill-header");
// let skillGrid = document.getElementsByClassName("skill-list-grid");
// let arrow = document.getElementsByClassName("fa-angle-down");

// skillOpenCloseToggle.addEventListener("click",()=>{
//     if(skillGrid.style.display.includes('none')){
//         console.log(200);
//         skillGrid.style.display = 'block';
//         setTimeout(() => {
//             arrow.classList.remove("fa-angle-down");
//             arrow.classList.add("fa-angle-up");
//         }, 3000);
//     }
//     else{
//         skillGrid.style.display = 'none';
//     }
// })

let skillOpenCloseToggle = document.getElementsByClassName("skill-header");
let skillGrid = document.getElementsByClassName("skill-list-grid");
let arrow = document.getElementsByClassName("fa-angle-down");

for (let i = 0; i < skillOpenCloseToggle.length; i++) {
    skillOpenCloseToggle[i].addEventListener("click", () => {
        if (skillGrid[i].style.display === 'none') {
            skillGrid[i].style.display = 'block';
        } else {

            skillGrid[i].style.display = 'none';
        }
    });
}
