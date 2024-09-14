




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
