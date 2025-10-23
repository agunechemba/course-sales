// ====== Course Data ======
const courses = [
  {
    title: "Negotiating Salary",
    desc: "Practical techniques for salary and career negotiations.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    meta: "Self-paced | Free | Available Now",
    url: "https://online.hbs.edu/courses/negotiation/"
  },
  {
    title: "Effective Communication",
    desc: "Improve your workplace communication skills.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    meta: "4 weeks | Free | Starts Soon",
    url: "https://www.coursera.org/learn/wharton-communication"
  },
  {
    title: "Project Management Basics",
    desc: "Learn planning, execution, and delivery skills.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    meta: "6 weeks | Paid | Starts Next Month",
    url: "https://www.pmi.org/"
  },
  {
    title: "Negotiating Salary",
    desc: "Practical techniques for salary and career negotiations.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    meta: "Self-paced | Free | Available Now",
    url: "https://online.hbs.edu/courses/negotiation/"
  },
  {
    title: "Effective Communication",
    desc: "Improve your workplace communication skills.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    meta: "4 weeks | Free | Starts Soon",
    url: "https://www.coursera.org/learn/wharton-communication"
  },
  {
    title: "Project Management Basics",
    desc: "Learn planning, execution, and delivery skills.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    meta: "6 weeks | Paid | Starts Next Month",
    url: "https://www.pmi.org/"
  }
];

const courseGrid = document.getElementById("courseGrid");
const searchInput = document.getElementById("searchInput");

// ====== Render Courses ======
function renderCourses(courseList) {
  courseGrid.innerHTML = "";
  if (courseList.length === 0) {
    courseGrid.innerHTML = "<p>No courses found.</p>";
    return;
  }
  courseList.forEach(course => {
    const card = document.createElement("a");
    card.href = course.url;
    card.target = "_blank";
    card.classList.add("course-card");
    card.innerHTML = `
      <img src="${course.img}" alt="${course.title}">
      <div class="content">
        <h3>${course.title}</h3>
        <p>${course.desc}</p>
        <div class="meta">${course.meta}</div>
      </div>
    `;
    courseGrid.appendChild(card);
  });
}
renderCourses(courses);

// ====== Search Function ======
function searchCourses() {
  const query = searchInput.value.toLowerCase();
  const filtered = courses.filter(c =>
    c.title.toLowerCase().includes(query) ||
    c.desc.toLowerCase().includes(query)
  );
  renderCourses(filtered);
}
searchInput.addEventListener("keyup", searchCourses);

// ====== Donate Button ======
document.querySelectorAll(".donate-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    window.open("https://www.paypal.com/donate/?hosted_button_id=YOUR_BUTTON_ID", "_blank");
  });
});

// ====== Mobile Menu ======
function toggleMenu() {
  document.querySelector("nav").classList.toggle("active");
}

// ====== Toggle Search (mobile) ======
function toggleSearch() {
  document.querySelector(".search-box").classList.toggle("active");
}

// ====== Hero Slideshow ======
let slideIndex = 0;
const slides = document.querySelectorAll(".hero .slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

// Auto play every 5 seconds
setInterval(nextSlide, 5000);
