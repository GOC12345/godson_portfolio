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
  const nameHTML = `Hi, I'm <span>Godson O. Chibueze</span> <br>`;
  const titleElement = document.querySelector(".right-header .name");
  
  let titleIndex = 0;
  let charIndex = 0;
  let typing = true;
  
  function typeEffect() {
    if (typing) {
      // Typing forward
      if (charIndex <= titles[titleIndex].length) {
        titleElement.innerHTML = nameHTML + titles[titleIndex].substring(0, charIndex);
        charIndex++;
        setTimeout(typeEffect, 100); // speed of typing
      } else {
        typing = false;
        setTimeout(typeEffect, 1500); // pause before deleting
      }
    } else {
      // Deleting
      if (charIndex >= 0) {
        titleElement.innerHTML = nameHTML + titles[titleIndex].substring(0, charIndex);
        charIndex--;
        setTimeout(typeEffect, 50); // speed of deleting
      } else {
        typing = true;
        titleIndex = (titleIndex + 1) % titles.length;
        setTimeout(typeEffect, 500); // pause before typing next title
      }
    }
  }
  
  typeEffect();

  

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