$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    // EmailJS to send contact form data
$("#contact-form").submit(function (event) {
    event.preventDefault(); // Prevent the default form submission
//  submit the form to Formspree as a fallback
$("#contact-form").off("submit").submit();
});
});
    // <!-- emailjs to mail contact form data -->



document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Saurabh Kumar";
            $("#favicon").attr("href", "assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/images/favicon.png");
        }
    });


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["frontend development", "backend development", "web designing", "Data Analyst", "web development"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->

async function fetchData(type = "skills") {
    let response
    type === "skills" ?
        response = await fetch("skills.json")
        :
        response = await fetch("./projects/projects.json")
    const data = await response.json();
    return data;
}

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}
//<!--skills call-->
fetchData().then(data => {
    showSkills(data);
});



// <!--Article section -->
const articleContainer = document.querySelector(".article-container");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let isDragging = false;
let startX, scrollLeft;
let articleWidth = articleContainer.children[0].offsetWidth + 20; // Article width + gap
let currentIndex = 0;

// Move to a specific slide
function moveSlide(index) {
  currentIndex = index;
  articleContainer.scrollLeft = index * articleWidth;
  updateDots();
}

// Update active dot
function updateDots() {
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}

// Arrow button navigation
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    moveSlide(currentIndex - 1);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < dots.length - 1) {
    moveSlide(currentIndex + 1);
  }
});

// Mouse drag scrolling
articleContainer.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX - articleContainer.offsetLeft;
  scrollLeft = articleContainer.scrollLeft;
});

articleContainer.addEventListener("mouseleave", () => isDragging = false);
articleContainer.addEventListener("mouseup", () => isDragging = false);
articleContainer.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - articleContainer.offsetLeft;
  const walk = (x - startX) * 2; // Drag speed
  articleContainer.scrollLeft = scrollLeft - walk;
});

// Click event for dots
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    moveSlide(index);
  });
});

// Sync dots with scroll event
articleContainer.addEventListener("scroll", () => {
  let newIndex = Math.round(articleContainer.scrollLeft / articleWidth);
  if (newIndex !== currentIndex) {
    currentIndex = newIndex;
    updateDots();
  }
});

// Initialize the first dot as active
updateDots();




//Awards section................
document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".slider-track");
    const items = Array.from(track.children);
  
    // Clone items to ensure infinite loop
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      track.appendChild(clone);
    });
  });
  


// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// <!-- tilt js effect ends -->
  

// pre loader start
// function loader() {
//     document.querySelector('.loader-container').classList.add('fade-out');
// }
// function fadeOut() {
//     setInterval(loader, 500);
// }
// window.onload = fadeOut;
// pre loader end

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}



/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .facebook', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 100 });
srtop.reveal('.skills .container .bar', { delay: 100 });

/* SCROLL PROJECTS */
srtop.reveal('.projects .container', { delay: 100 });
srtop.reveal('.projects .container .box', { delay: 100 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 200 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL AWARDS *

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });


// Prevent copying without credit
document.addEventListener("copy", (event) => {
    const selectedData = window.getSelection().toString();
    const customMessage = `Sorry! 🫵You can't copy any content from my personal Portfolio 😎😀😎\n[CopyRight © Saurabh Kumar] Thank you!🤣\nFollow me on Linkedin👇 \nhttps://www.linkedin.com/in/saurabhtbj1201/`;
    event.clipboardData.setData("text/plain", customMessage);
    event.preventDefault();
});
