// Content for both languages
const content = {
  en: {
    // Hero
    heroTitle: "Hi, I'm <span class='highlight'>Stanislav Vikliuk</span>",
    heroSubtitle: ".NET Developer & Game Dev Enthusiast",
    learnMore: "Learn More",
    // About
    aboutTitle: "About Me",
    aboutText: "I am a software developer with foundational experience in C#, C++, Java, HTML/CSS/JS, and SQL. Skilled in Unity3D, ASP.NET, Angular, Windows Forms, WPF, MySQL, Blender, and Figma. Graduated from Chernivtsi Polytechnic Professional College (2022–2025) with a Junior Bachelor degree.",
    // Skills
    skillsTitle: "Skills & Technologies",
    skill1: "C# • .NET (ASP.NET, WPF, Windows Forms)",
    skill2: "C++ • Java",
    skill3: "HTML • CSS • JavaScript • Angular",
    skill4: "Unity3D • Blender",
    skill5: "MySQL • SQL",
    skill6: "Git • Figma • draw.io",
    skill7: "Windows • Linux",
    // Projects
    projectsTitle: "Projects",
    proj1Title: "Electronic Amnesia",
    proj1Desc: "2D metroidvania",
    proj1DidLabel: "What I did:",
    proj1Did: "Built UI, designed levels and created traps",
    proj1TechLabel: "Tech used:",
    proj1Tech: "Unity3D, C#, Blender, Figma",
    proj2Title: "Cinema Poster Web App",
    proj2Desc: "Web app for ticket booking and schedule management.",
    proj2DidLabel: "What I did:",
    proj2Did: "Developed REST API, responsive interface, set up MySQL database.",
    proj2TechLabel: "Tech used:",
    proj2Tech: "ASP.NET Core, Angular, MySQL, HTML/CSS, TypeScript",
    proj3Title: "Movie Poster App",
    proj3Desc: "Desktop app for cinema session management.",
    proj3DidLabel: "What I did:",
    proj3Did: "Implemented file storage, created UI with Windows Forms.",
    proj3TechLabel: "Tech used:",
    proj3Tech: "C++, .NET Windows Forms",
    // Education
    educationTitle: "Education",
    educationText: "Chernivtsi Polytechnic Professional College (Programming & Radio Engineering), Junior Bachelor in Computer Engineering (2022–2025)",
    // Contact
    contactTitle: "Contact",
    contactEmail: "Email: stas.vikluyuk@gmail.com",
    contactPhone: "Phone: +380992289582",
    contactGit: "GitHub: UAGAMER"
  },
  uk: {
    // Hero
    heroTitle: "Привіт, я <span class='highlight'>Станіслав Віклюк</span>",
    heroSubtitle: ".NET-розробник і ентузіаст геймдеву",
    learnMore: "Докладніше",
    // About
    aboutTitle: "Про мене",
    aboutText: "Я програміст з базовим досвідом у C#, C++, Java, HTML/CSS/JS та SQL. Вмію працювати в Unity3D, ASP.NET, Angular, Windows Forms, WPF, MySQL, Blender і Figma. Закінчив Чернівецький політехнічний професійний коледж (2022–2025) з молодшим бакалавром.",
    // Skills
    skillsTitle: "Навички та технології",
    skill1: "C# • .NET (ASP.NET, WPF, Windows Forms)",
    skill2: "C++ • Java",
    skill3: "HTML • CSS • JavaScript • Angular",
    skill4: "Unity3D • Blender",
    skill5: "MySQL • SQL",
    skill6: "Git • Figma • draw.io",
    skill7: "Windows • Linux",
    // Projects
    projectsTitle: "Проєкти",
    proj1Title: "Electronic Amnesia",
    proj1Desc: "2D метроідванія",
    proj1DidLabel: "Що зробив:",
    proj1Did: "Розробив UI, створив рівні і пастки, ",
    proj1TechLabel: "Технології:",
    proj1Tech: "Unity3D, C#, Blender, Figma",
    proj2Title: "Cinema Poster Web App",
    proj2Desc: "Веб-застосунок для бронювання квитків і управління розкладом.",
    proj2DidLabel: "Що зробив:",
    proj2Did: "Розробив REST API, адаптивний інтерфейс, налаштував базу MySQL.",
    proj2TechLabel: "Технології:",
    proj2Tech: "ASP.NET Core, Angular, MySQL, HTML/CSS, TypeScript",
    proj3Title: "Movie Poster App",
    proj3Desc: "Десктопний застосунок для керування сеансами кінотеатру.",
    proj3DidLabel: "Що зробив:",
    proj3Did: "Реалізував файлове зберігання, створив UI на Windows Forms.",
    proj3TechLabel: "Технології:",
    proj3Tech: "C++, .NET Windows Forms",
    // Education
    educationTitle: "Освіта",
    educationText: "Чернівецький політехнічний професійний коледж (Програмування та радіоінженерія), молодший бакалавр комп’ютерної інженерії (2022–2025)",
    // Contact
    contactTitle: "Контакти",
    contactEmail: "Email: stas.vikluyuk@gmail.com",
    contactPhone: "Phone: +380992289582",
    contactGit: "GitHub: UAGAMER"
  }
};

let lang = 'uk';
const toggleBtn = document.getElementById('toggleLang');

function updateLanguage() {
  const data = content[lang];
  document.documentElement.lang = lang;
  // Hero
  document.getElementById('heroTitle').innerHTML = data.heroTitle;
  document.getElementById('heroSubtitle').textContent = data.heroSubtitle;
  document.getElementById('learnMore').textContent = data.learnMore;
  // About
  document.getElementById('aboutTitle').textContent = data.aboutTitle;
  document.getElementById('aboutText').textContent = data.aboutText;
  // Skills
  document.getElementById('skillsTitle').textContent = data.skillsTitle;
  ['skill1','skill2','skill3','skill4','skill5','skill6','skill7'].forEach(id => {
    document.getElementById(id).textContent = data[id];
  });
  // Projects
  document.getElementById('projectsTitle').textContent = data.projectsTitle;
  ['proj1','proj2','proj3'].forEach(prefix => {
    document.getElementById(prefix+'Title').textContent = data[prefix+'Title'];
    document.getElementById(prefix+'Desc').textContent = data[prefix+'Desc'];
    document.getElementById(prefix+'DidLabel').textContent = data[prefix+'DidLabel'];
    document.getElementById(prefix+'Did').textContent = data[prefix+'Did'];
    document.getElementById(prefix+'TechLabel').textContent = data[prefix+'TechLabel'];
    document.getElementById(prefix+'Tech').textContent = data[prefix+'Tech'];
  });
  // Education
  document.getElementById('educationTitle').textContent = data.educationTitle;
  document.getElementById('educationText').textContent = data.educationText;
  // Contact
  document.getElementById('contactTitle').textContent = data.contactTitle;
  document.getElementById('contactEmail').textContent = data.contactEmail;
  document.getElementById('contactPhone').textContent = data.contactPhone;
  document.getElementById('contactGit').textContent = data.contactGit;
  // Toggle button text
  toggleBtn.textContent = lang === 'en' ? 'Українська' : 'English';
}

toggleBtn.addEventListener('click', () => {
  lang = lang === 'en' ? 'uk' : 'en';
  updateLanguage();
});

// Initialize
updateLanguage();

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});