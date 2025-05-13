




let bgcToggle = document.getElementById("background-toggle");
let aTagToggle = document.getElementsByTagName("a");
bgcToggle.onclick = function(){
    if(bgcToggle.src.includes("/images/moon.png")) {
        bgcToggle.src = "/images/sun.png";
        document.body.classList.add("black");
        document.body.classList.remove("white");
        for (let i = 0; i < aTagToggle.length; i++) {
            aTagToggle[i].classList.add("black");
        }
    }
    else {
        bgcToggle.src = "/images/moon.png";
        document.body.classList.add("white");
        document.body.classList.remove("black");
        for (let i = 0; i < aTagToggle.length; i++) {
            aTagToggle[i].classList.remove("black");
        }
    }
}



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


const experienceData = {
    experience: [
      {
      "title": "1 month as a Web Developer Intern at OctaNet Services PVT LTD",
      "duration": "1 month",
      "description": "Gained comprehensive experience in frontend development at OctaNet over 4 months, contributing to critical projects and honing in front-end",
      "technologies": ["React", "Bootstrap", "Javascript", "HTML-CSS"],
      "image": "./images/CodeSoft.jpg"
    },
    {
      "title": "3 months as a Front-End Developer Intern at SUN NGO",
      "duration": "3 months",
      "description":"Contributed meaningfully to impactful community projects at SUN NGO over a 4-month period, gaining hands-on experience in full-stack development while building solutions that support education, outreach, and social upliftment initiatives.",
      "technologies": ["React", "Bootstrap", "Javascript", "FireBase"],
      "image": "./images/SunIntern.jpg"
    }
    ]
  };

  const experienceContainer = document.getElementById("experience");

  experienceData.experience.forEach((item) => {
    const project = document.createElement("div");
    project.id = "project1";

    project.innerHTML = `
      <div id="experience-image">
        <img src="${item.image}" alt="Experience image">
      </div>
      <div class="experience-container">
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        <div id="experience-buttons">
          ${item.technologies.map(tech => `<button>${tech}</button>`).join('')}
        </div>
      </div>
    `;

    experienceContainer.appendChild(project);
  });