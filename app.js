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

// Theme toggle logic
const backgroundToggle = document.getElementById('background-toggle');
const body = document.body;

function setTheme(theme) {
  if (theme === 'dark') {
    body.classList.add('dark-mode');
    backgroundToggle.src = './images/sun.png';
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-mode');
    backgroundToggle.src = './images/moon.png';
    localStorage.setItem('theme', 'light');
  }
}

// On load, set theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  setTheme('dark');
} else {
  setTheme('light');
}

backgroundToggle.addEventListener('click', () => {
  if (body.classList.contains('dark-mode')) {
    setTheme('light');
  } else {
    setTheme('dark');
  }
});
