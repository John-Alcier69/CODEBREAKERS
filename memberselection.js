const word = document.getElementById("word");
const charName = document.getElementById("name");
const charDesc = document.getElementById("desc");
const textContent = document.getElementById("text-content");
const memberIcons = document.querySelectorAll(".members img");

const characters = [
  {
    name: "JOHN MATHEW MONTE",
    desc: "CODEBREAKER MEMBER CBM-01",
    bg: "Media Folder/imagesforweb/JohnMath.png",
    bgPosition: "65% calc(40% - 40px)",
    page: "johnpage.html"
  },
  {
    name: "PATRICK SANTOS",
    desc: "CODEBREAKER MEMBER CBM-02",
    bg: "Media Folder/imagesforweb/patrick santos.png",
    bgPosition: "65% calc(30% - 30px)",
    page: "patrick.html"
  },
  {
    name: "NORMANDY GARCIA",
    desc: "CODEBREAKER MEMBER CBM-03",
    bg: "Media Folder/imagesforweb/normandy.png",
    bgPosition: "65% calc(30% - 30px)",
    page: "mandypage.html"
  },
  {
    name: "KARLVIE MORTIZ",
    desc: "CODEBREAKER MEMBER CBM-04",
    bg: "Media Folder/imagesforweb/Karlvie.png",
    bgPosition: "65% calc(30% - 30px)",
    page: "karlviepage.html"
  },
  {
    name: "DAVID JOB ESTEBAN",
    desc: "CODEBREAKER MEMBER CBM-05",
    bg: "Media Folder/imagesforweb/esteban.png",
    bgPosition: "65% calc(30% - 30px)",
    page: "davidpage.html"
  },
];
const learnMoreBtn = document.getElementById("learn-more-btn");

// typing timers so we can cancel if user switches quickly
let typingTimers = [];
function clearTypingTimers(){
  typingTimers.forEach(t => clearTimeout(t));
  typingTimers = [];
}

// type text into an element one char at a time
function typeText(el, text, delay = 40, cb){
  if(!el) { if(cb) cb(); return; }
  el.textContent = '';
  for(let i = 0; i <= text.length; i++){
    const timer = setTimeout(() => {
      el.textContent = text.slice(0, i);
      if(i === text.length && cb) cb();
    }, i * delay);
    typingTimers.push(timer);
  }
}

function changeCharacter(index) {
  const char = characters[index];

  // Fade out text
  textContent.classList.add("fade-out");

  setTimeout(() => {
    // Update Learn More button link
    if (learnMoreBtn) {
      learnMoreBtn.href = char.page;
    }

    // Update background
    word.style.background = `
      linear-gradient(rgba(0, 40, 20, 0), rgba(0, 40, 20, 0)),
      url("${char.bg}") ${char.bgPosition}/500px auto no-repeat
    `;

    // Start typing animation: clear any pending timers, clear content, then type
    clearTypingTimers();
    charName.textContent = '';
    charDesc.textContent = '';

    textContent.classList.remove("fade-out");
    textContent.classList.add("fade-in", "typing");

    // type name first, then description
    typeText(charName, char.name, 45, () => {
      // small pause before typing desc
      const pause = setTimeout(() => {
        typeText(charDesc, char.desc, 28, () => {
          // done typing
          textContent.classList.remove('typing');
        });
      }, 120);
      typingTimers.push(pause);
    });

    setTimeout(() => {
      textContent.classList.remove("fade-in");
    }, 400);
  }, 300);

  // Update active icon
  memberIcons.forEach((icon) => icon.classList.remove("active"));
  memberIcons[index].classList.add("active");
}

// Add click listeners
memberIcons.forEach((icon, index) => {
  icon.addEventListener("click", () => changeCharacter(index));
});

// Load default character
changeCharacter(0);