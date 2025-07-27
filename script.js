// Smooth Scroll for all Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Typing Effect Title
  function typingEffect(element, text, speed) {
    let i = 0;
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  }
  window.onload = function() {
    const title = document.querySelector('.typing-title');
    if (title) {
      typingEffect(title, title.dataset.text, 80);
    }
  };
  
  // Reveal Elements on Scroll
  const reveals = document.querySelectorAll('.reveal');
  window.addEventListener('scroll', function() {
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const revealTop = reveals[i].getBoundingClientRect().top;
      if (revealTop < windowHeight - 50) {
        reveals[i].classList.add('active');
      }
    }
  });
  
  // Dark Mode Toggle
  const darkBtn = document.getElementById('dark-toggle');
  if (darkBtn) {
    darkBtn.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });
    // Set initial theme
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
    }
  }
  
  // Portfolio Card Hover Effect
  const portfolioCards = document.querySelectorAll('.portfolio-card');
  portfolioCards.forEach(card => {
    card.addEventListener('mouseenter', () => card.classList.add('hovered'));
    card.addEventListener('mouseleave', () => card.classList.remove('hovered'));
  });

  // LinkedIn Button Click - buka profil LinkedIn di tab baru
  const linkedinBtn = document.getElementById('linkedin-button');
  if (linkedinBtn) {
    linkedinBtn.addEventListener('click', function() {
      window.open('https://www.linkedin.com/in/hendy-juannathan-revel-wibowo-151584287/', '_blank');
    });
  }  

  // show more text
 const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");

readMoreBtn.addEventListener("click", (e) => {
  text.classList.toggle("show-more");
  if (readMoreBtn.innerText === "Read More") {
    readMoreBtn.innerText = "Read Less";
  } else {
    readMoreBtn.innerText = "Read More";
  }
});

// *********************
// This Code is for only the floating card in right bottom corner
// **********************

const touchButton = document.querySelector(".float-text");
const card = document.querySelector(".float-card-info");
const close = document.querySelector(".gg-close-r");

touchButton.addEventListener("click", moveCard);
close.addEventListener("click", moveCard);

function moveCard() {
  card.classList.toggle("active");
}