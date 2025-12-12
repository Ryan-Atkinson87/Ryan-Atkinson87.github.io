// script.js

const projects = [
  {
    title: "Aquarium Monitoring Platform",
    brief: "IoT solution using MQTT and Raspberry Pi.",
    details: `A production-ready IoT solution that reads sensor data from Raspberry Pi GPIO pins and sends it to ThingsBoard over MQTT. Deployed via Cloudflare Tunnel and Docker.`,
    link: "https://github.com/Ryan-Atkinson87/mqtt_pi_monitoring",
    image: "./resources/images/Screenshot 2025-07-09 at 19.39.43.png",
    alt: "A monitoring dashboard for raspberry pi's",
    docs: `<p><a href="./pages/docs/docs.html">Click here<a/> for documentation.<p/><hr>`
  },
  {
    title: "Full-Stack Hobbyist Breeder Network",
    brief: "Web app connecting fish breeders with stores.",
    details: `Built with React (Vite) and Django. Features RESTful APIs, user auth, and a PostgreSQL backend, all containerised and hosted on a Raspberry Pi. SSL secured. Future updates include improved architecture for extensibility.`,
    link: "https://github.com/Ryan-Atkinson87/TriveDevHome",
    image: "./resources/images/Screenshot 2025-07-09 at 19.36.50.png",
    alt: "A screenshot of the start of a website",
    docs: `<br><hr>`
  },
  {
    title: "Raspberry Pi Robot",
    brief: "Python-based robot with 3D-printed enclosures.",
    details: `Custom robot controlled via PyGame, featuring modular parts and future enhancements like camera integration and articulated arm.`,
    link: "https://github.com/Ryan-Atkinson87",
    image: "./resources/images/IMG_0676.jpeg",
    alt: "A red wheeled robot",
    docs: `<br><hr>`
  },
  {
    title: "Portfolio Website",
    brief: "This personal site you're viewing now.",
    details: `Static website built with HTML, CSS, and JavaScript, styled with Bootstrap. Showcases personal projects and links to GitHub and LinkedIn.`,
    link: "https://github.com/Ryan-Atkinson87/Ryan-Atkinson87.github.io",
    image: "./resources/images/Screenshot 2025-07-09 at 19.43.58.png",
    alt: "A screenshot of this website",
    docs: `<br><hr>`
  }
];

const container = document.getElementById('projects-container');
const modal = new bootstrap.Modal(document.getElementById('projectModal'));

projects.forEach((project, index) => {
  const col = document.createElement('div');
  col.className = 'col-md-6 col-lg-4 mb-4';

  const card = document.createElement('div');
  card.className = 'card h-100';
  card.style.cursor = 'pointer';
  card.onclick = () => showModal(project);

  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';
  cardBody.innerHTML = `
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-text">${project.brief}</p>
                        ${project.docs}
                        <img src="${project.image}" alt="${project.alt}" height="300" class="img-fluid rounded">
                        `;

  card.appendChild(cardBody);
  col.appendChild(card);
  container.appendChild(col);
});

function showModal(project) {
  document.getElementById('projectModalLabel').textContent = project.title;
  document.getElementById('projectModalBody').textContent = project.details;
  document.getElementById('projectModalLink').href = project.link;
  modal.show();
}
