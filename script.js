// Click events for buttons
const portfolio = document.getElementById("portfolio");
const portfolioBtn = document.getElementById("portfolio-btn");
const skills = document.getElementById("skills");
const skillsBtn = document.getElementById("skills-btn");

portfolioBtn.addEventListener("click", (event) => {
  skills.style.display = "none";
  portfolio.style.display = "flex";
  skillsBtn.classList.remove("active-btn");
  portfolioBtn.classList.add("active-btn");
});

skillsBtn.addEventListener("click", (event) => {
  skills.style.display = "flex";
  portfolio.style.display = "none";
  portfolioBtn.classList.remove("active-btn");
  skillsBtn.classList.add("active-btn");
});

// Light & Dark Theme
document.addEventListener("DOMContentLoaded", () => {
  const toggleThemeButton = document.getElementById("toggleTheme");
  const themeIcon = document.querySelector('img[alt="theme icon"]');
  const githubLogo = document.querySelector('img[alt="github logo"]');
  const linkedinLogo = document.querySelector('img[alt="linkedin logo"]');
  const emailLogo = document.querySelector('img[alt="email logo"]');

  const lightLogos = {
    github: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-128.png",
    linkedin: "https://cdn1.iconfinder.com/data/icons/social-networks-15/512/LinkedIn_social_network_logo-128.png",
    email: "https://cdn0.iconfinder.com/data/icons/essentials-solid-glyphs-vol-1/100/Email-Letter-Mail-128.png",
    theme: "https://cdn0.iconfinder.com/data/icons/business-finance-flat-line-vol-1/55/creativity__idea__bulb__ligth__lamp-512.png",
  };

  const darkLogos = {
    github: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-128.png",
    linkedin: "https://cdn1.iconfinder.com/data/icons/social-networks-15/512/LinkedIn_social_network_logo-128.png",
    email: "https://cdn0.iconfinder.com/data/icons/essentials-solid-glyphs-vol-1/100/Email-Letter-Mail-128.png",
    theme: "https://cdn0.iconfinder.com/data/icons/business-finance-flat-line-vol-1/55/creativity__idea__bulb__ligth__lamp-512.png",
  };

  function setTheme(isDark) {
    githubLogo.src = isDark ? darkLogos.github : lightLogos.github;
    linkedinLogo.src = isDark ? darkLogos.linkedin : lightLogos.linkedin;
    emailLogo.src = isDark ? darkLogos.email : lightLogos.email;
    themeIcon.src = isDark ? darkLogos.theme : lightLogos.theme;
  }

  toggleThemeButton.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");
    localStorage.setItem("isDark", isDark);

    setTheme(isDark);
  });

  const loadTheme = () => {
    const isDark = localStorage.getItem("isDark") === "true";
    document.body.classList.toggle("dark-theme", isDark);

    setTheme(isDark);
  };

  // Load saved theme from local storage or default to light theme
  loadTheme();
});