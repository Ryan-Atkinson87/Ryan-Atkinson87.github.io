
const aboutButton = document.getElementById("aboutButton");
const aboutMeSection = document.getElementById("aboutMeSection");

const projectsButton = document.getElementById("projectsButton");
const projectsSection = document.getElementById("projectsSection");

const project1Button = document.getElementById("project1Button");
const project1Section = document.getElementById("project1Section");

const project2Button = document.getElementById("project2Button");
const project2Section = document.getElementById("project2Section");

const project3Button = document.getElementById("project3Button");
const project3Section = document.getElementById("project3Section");

const project4Button = document.getElementById("project4Button");
const project4Section = document.getElementById("project4Section");



////////////////////////////////////////////////////////////////
// Button script for revealing the About Me section of the home page
////////////////////////////////////////////////////////////////
aboutButton.addEventListener("click", function () {
  if (aboutMeSection.style.display === "none") {
    aboutMeSection.style.display = "grid";
    aboutButton.textContent = "Less About Me";
  } else {
    aboutMeSection.style.display = "none";
    aboutButton.textContent = "More About Me";
  }
});
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// Button script for revealing the Projects section of the home page
////////////////////////////////////////////////////////////////
projectsButton.addEventListener("click", function () {
  if (projectsSection.style.display === "none") {
    projectsSection.style.display = "grid";
    projectsButton.textContent = "Less Projects";
  } else {
    projectsSection.style.display = "none";
    projectsButton.textContent = "More Projects";
  }
});
////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////
// Button script for revealing the First Project section of the home page
////////////////////////////////////////////////////////////////
project1Button.addEventListener("click", function () {
  if (project1Section.style.display === "none") {
    project1Section.style.display = "grid";
    project2Section.style.display = "none";
    project3Section.style.display = "none";
    project4Section.style.display = "none";
  } else {
    project1Section.style.display = "none";
  }
});
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// Button script for revealing the Second Project section of the home page
////////////////////////////////////////////////////////////////
project2Button.addEventListener("click", function () {
  if (project2Section.style.display === "none") {
    project1Section.style.display = "none";
    project2Section.style.display = "grid";
    project3Section.style.display = "none";
    project4Section.style.display = "none";
  } else {
    project2Section.style.display = "none";
  }
});
////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////
// Button script for revealing the Third Project section of the home page
////////////////////////////////////////////////////////////////
project3Button.addEventListener("click", function () {
  if (project3Section.style.display === "none") {
    project1Section.style.display = "none";
    project2Section.style.display = "none";
    project3Section.style.display = "grid";
    project4Section.style.display = "none";

  } else {
    project3Section.style.display = "none";
  }
});
////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////
// Button script for revealing the Fourth Project section of the home page
////////////////////////////////////////////////////////////////
project4Button.addEventListener("click", function () {
  if (project4Section.style.display === "none") {
    project1Section.style.display = "none";
    project2Section.style.display = "none";
    project3Section.style.display = "none";
    project4Section.style.display = "grid";

  } else {
    project4Section.style.display = "none";
  }
});
////////////////////////////////////////////////////////////////
