    const sections = document.querySelectorAll('.section');
    const sectBtns = document.querySelectorAll('.control');
    const allSections = document.querySelector('.main-content');

    function PageTransitions() {
        // Button Click Active Class
        for (let i = 0; i < sectBtns.length; i++) {
            sectBtns[i].addEventListener('click', function () {
                // Remove current active-btn class
                const currentBtn = document.querySelector('.active-btn');
                currentBtn.classList.remove('active-btn');
                this.classList.add('active-btn');
            });
        }

        //section Active
        allSections.addEventListener('click', (e) =>{
            const id = e.target.dataset.id;
            if(id){
                //remove selected from the other btns
                sectBtns.forEach ((btn)=>{
                    btn.classList.remove('active')
                })
                e.target.classList.add('active')

                //hide other sections
                sections.forEach((section)=>{
                    section.classList.remove('active')
                })

                const element = document.getElementById(id);
                element.classList.add('active'); 
            }
        })

        //Toggle theme
        const themeBtn = document.querySelector('.theme-btn');
        themeBtn.addEventListener('click', ()=>{
            let element = document.body;
            element.classList.toggle('light-mode')
        })
    }

const titles = ["Web Developer.", "Logo Creator.", "Digital Creative."];
const titleElement = document.querySelector(".title-text");

let titleIndex = 0;
let charIndex = 0;
let typing = false;
let dotCount = 0;

function showDotsBeforeTyping() {
  if (dotCount <= 3) {
    const dots = ".".repeat(dotCount);
    titleElement.innerHTML = `<span style="opacity: 0.6">${dots}</span>`;
    dotCount++;
    setTimeout(showDotsBeforeTyping, 200);
  } else {
    dotCount = 0;
    typing = true;
    charIndex = 0;
    setTimeout(typeEffect, 300);
  }
}

function typeEffect() {
  if (typing) {
    const currentTitle = titles[titleIndex];
    if (charIndex <= currentTitle.length) {
      titleElement.textContent = currentTitle.substring(0, charIndex);
      charIndex++;
      setTimeout(typeEffect, 100);
    } else {
      typing = false;
      titleIndex = (titleIndex + 1) % titles.length;
      setTimeout(showDotsBeforeTyping, 1500);
    }
  }
}

showDotsBeforeTyping();

  

    PageTransitions();

    // CountUp function for each element
function countUp(el, duration = 6000) {
  const target = +el.getAttribute('data-target');
  let start = 0;
  const increment = target / (duration / 16); // roughly 60fps
  
  function update() {
    start += increment;
    if (start < target) {
      el.textContent = Math.ceil(start);
      requestAnimationFrame(update);
    } else {
      el.textContent = target;
    }
  }
  
  update();
}

// Run on DOM ready or window load
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.large-text[data-target]');
  counters.forEach(counter => countUp(counter));
});