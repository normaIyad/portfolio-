// script.js
// nav bar section 

let menu = document.querySelector("nav ul");
console.log(menu);
let nemudata = ["About me", "Skills", "Projects", "Contact me"]
for (let i = 0; i < nemudata.length; i++) {

  let list_item = document.createElement("li");
  let ancher = document.createElement("a");
  ancher.textContent = nemudata[i];
  ancher.href = `#section${i + 1}`;
  list_item.appendChild(ancher);
  menu.appendChild(list_item);
}

// Toggle menu on click
let menuTraggle = document.querySelector("nav .menu-toggle");

menuTraggle.addEventListener("click", function () {
  menu.classList.toggle("block");
  let contenerofnemu = document.querySelector("nav .container");
  contenerofnemu.classList.toggle("colom");
});

// Section 1
let section1 = () => {
  let section1 = document.getElementById("section1");
  let section1Contaner = document.createElement("div");
  section1Contaner.classList.add("container");
  section1Contaner.classList.add("landing");
  let text = document.createElement("dev");
  text.classList.add("text");
  let imgsection = document.createElement("div");
  imgsection.classList.add("img")
  imgsection.innerHTML = ` <img src="./imgs/normaImg.jpeg" alt="me">`;
  text.innerHTML = ` <h2>welcome to my site</h2>
        <h1>hi, i'm norma ,<span> front ned web developer.</span> </h1>
        <div class="pra">
          <p>
            Hi! I’m a passionate and dedicated front-end developer with a strong focus on creating beautiful,
            user-friendly, and responsive web applications. I specialize in crafting seamless interfaces using HTML,
            CSS, JavaScript, and frameworks like React. My goal is to transform ideas into functional and visually
            appealing designs that provide an exceptional user experience.
          </p>
          <a href="#apoutMe">see more</a>
     `;
  section1Contaner.appendChild(text);
  section1Contaner.appendChild(imgsection);
  section1.appendChild(section1Contaner);
}
section1();
// section 2
let section2 = () => {
  let section2 = document.getElementById("section2");
  let header = document.createElement("div");
  let h2text = document.createElement("h2");
  h2text.innerText = "skills";
  header.appendChild(h2text);
  let section2Contaner = document.createElement("div");
  section2Contaner.classList.add("container");
  section2Contaner.classList.add("flex");
  let img = document.createElement("dev");
  img.classList.add("img");
  img.innerHTML = ` <img src="./imgs/skills.png" alt="skills">  `;
  let ourSkils = document.createElement("div");
  ourSkils.classList.add("our-skills");
  let skils = document.createElement("div");
  skils.classList.add("skills");
  skils.innerHTML = `
    <div class="skill">
            <h3>HTML <span>90%</span></h3>
            <div class="the-progress">
              <span style="width: 0;" data-width="90%"></span>
            </div>
          </div>
          <div class="skill">
            <h3>CSS <span>85%</span></h3>
            <div class="the-progress">
              <span style="width: 0;" data-width="85%"></span>
            </div>
          </div>
          <div class="skill">
            <h3>JavaScript <span>70%</span></h3>
            <div class="the-progress">
              <span style="width: 0;" data-width="70%"></span>
            </div>
          </div>
          <div class="skill">
            <h3>TypeScript <span>50%</span></h3>
            <div class="the-progress">
              <span style="width: 0;" data-width="50%"></span>
            </div>
          </div>
  `;
  ourSkils.appendChild(skils);
  section2Contaner.appendChild(img);
  section2Contaner.appendChild(ourSkils);
  section2.appendChild(header);
  section2.appendChild(section2Contaner);
}
section2();
// section 3

let section3 = () => {
  let section3 = document.getElementById("section3");
  let header = document.createElement("div");
  let h2text = document.createElement("h2");
  h2text.innerText = "projects";
  header.appendChild(h2text);
  let section3Contaner = document.createElement("div");
  section3Contaner.classList.add("container");
  let wrap = document.createElement("div");
  wrap.classList.add("wrap");
  wrap.innerHTML = `
        <div class="project">
        <img src="./imgs/projects/project1.png" alt="project1">
        <div class="info">
          <h3>E-commerce Website </h3>
          <p>Description: Built a fully functional e-commerce website using React, HTML, and CSS.
            Implemented product filtering, user authentication, and a shopping cart system. Utilized API
            for data fetching and operations. Technologies: React, HTML, CSS, Bootstrap</p>
          <a href="https://github.com/normaIyad/react-e-commerse"> link in git hup</a>
        </div>
      </div>
      <div class="project">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzTalNW2G3OiOzhbp2CCm-7dWsbdARxIWYPg&s"
          alt="project2">
        <div class="info">
          <h3>To-Do List App</h3>
          <p> Description: Created a to-do list app allowing users to add, edit, and delete asks.
            Technologies: React, CSS, JavaScript</p>
          <a href="https://github.com/normaIyad/TO-DO-LIST">git hup link</a>
        </div>
      </div>
      <div class="project">
        <img src="./imgs/projects/project2.png" alt="project3">
        <div class="info">
          <h3>Movie Search App</h3>
          <p> Description: Developed a movie search application using the OMDB API to fetch and display
            movie data based on user input. Implemented features for sorting and filtering results.
            Technologies: HTML, CSS, JavaScript, API</p>
            <a href="https://github.com/normaIyad/GSG-move-project">github link </a>
        </div>
      </div>
      <div class="project">
        <img src="./imgs/projects/project3.png" alt="project4">
        <div class="info">
          <h3> Portfolio Template</h3>
          <p>
            Description: Designed and developed a responsive portfolio template featuring smooth
            scrolling and modern design elements. Technologies: HTML, CSS, JavaScript
          </p>
          <a href="https://github.com/normaIyad/project--HTML-CSS">github link </a>
        </div>
      </div>
  `;
  section3Contaner.appendChild(wrap);
  section3.appendChild(header);
  section3.appendChild(section3Contaner);
}
section3();

// section 4

let section4 = () => {
  let section4 = document.getElementById("section4");
  let header = document.createElement("div");
  let h2text = document.createElement("h2");
  h2text.innerText = "contact me";
  header.appendChild(h2text);
  let section4Contaner = document.createElement("div");
  section4Contaner.classList.add("container");
  let contactfrom = document.createElement("contact-form");
  contactfrom.classList.add("contact-form");
  let form = document.createElement("form");
  // form.classList.add("contact-form");
  form.innerHTML = `
    <input type="text" name="name" placeholder="Name">
    <input type="email" name="email" placeholder="Email">
    <textarea name="message" placeholder="Message"></textarea>
    <button type="submit">Send</button>
  `;
  contactfrom.appendChild(form);
  section4Contaner.appendChild(contactfrom);
  section4.appendChild(header);
  section4.appendChild(section4Contaner);
}

section4();
//footer 

let footer = () => {
  let footer = document.createElement("footer");
  let contaner = document.createElement("div");
  contaner.classList.add("container");
  contaner.innerHTML = ` 
      <p>Copyright &copy; 2024 GSG. All rights reserved.</p>
  `;
  let social = document.createElement("div");
  social.classList.add("social-media");
  social.innerHTML = `
     <a href="#"><i class="fab fa-facebook-f"></i></a>
    <a href="https://www.linkedin.com/in/norma-alkhanafsah-249b37248/"><i class="fa-brands fa-linkedin-in"></i></a>
    <a href="https://www.instagram.com/normamo2001/"><i class="fab fa-instagram"></i></a>
    <a href="https://github.com/normaIyad?tab=repositories"><i class="fab fa-github"></i></a>
  `;
  footer.appendChild(contaner);
  footer.appendChild(social);
  document.body.appendChild(footer);
}

footer();
// Function to animate progress bars
function animateProgressBars() {
  const progressBars = document.querySelectorAll('.the-progress span');
  progressBars.forEach(bar => {
    const targetWidth = bar.getAttribute('data-width'); // Get target width from data attribute
    bar.style.width = targetWidth; // Apply width dynamically
  });
}
function section() {
  const section = document.querySelector("#section1");
  section.style.width = "100vh";
}

// Trigger animation when the section is in view
window.addEventListener('scroll', () => {
  const skillsSection = document.querySelector('.our-skills');
  const skillsSectionTop = (skillsSection.getBoundingClientRect().top + 400);
  const windowHeight = window.innerHeight;
  if (skillsSectionTop < windowHeight) {
    animateProgressBars();
  }
});
// Function to handle adding active class to navigation items
function setActiveNav() {
  const sections = document.querySelectorAll("section"); // Select all sections
  const navLinks = document.querySelectorAll("nav ul li a"); // Select all nav links
   console.log(navLinks);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const navLink = document.querySelector(`nav ul li a[href="#${entry.target.id}"]`);
      console.log(`${entry.target.id}`);
      sections.forEach((section) => section.classList.remove("active"));
      // Add active class to the current section
      entry.target.classList.add("active");
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove("active")); // Remove active class from all links
        navLink.classList.add("active"); // Add active class to the corresponding link
      }
    });
    console.log(observer);
  }, { threshold: 0.6 }); // Adjust threshold as needed for when section is considered "in view"

  sections.forEach((section) => observer.observe(section));
}

// Call the function to activate the observer
setActiveNav();
