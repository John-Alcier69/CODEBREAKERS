const subjectsData = [
  { // P.E (index 0)
    name: "PATRICK JUSTINE SANTOS",
    photos: [
      { thumb: "imagesnipatrick/imagesforP.E/pe 1.jfif", text: "Practice for final activity for PE" },
      { thumb: "imagesnipatrick/imagesforP.E/pe 2.jfif", text: "Quick selfie of my groupmates before the exercise."}
    ],
    videos: [
      { video: "<video width='350' height='230' controls><source src='imagesnipatrick/VIDEOS/PE 3.mp4' type='video/mp4'>Your browser does not support the video tag.</video>", text: "Me and my friends having fun during P.E class" }
    ]
  },
  { // NSTP
    name: "PATRICK JUSTINE SANTOS",
   photos: [
      { thumb: "imagesnipatrick/imagesforNSTP/nstp 4.jfif", text: "MENTAL HEALTH AWARENESS SEMINAR - Nov 4, 2025" },
      { thumb: "imagesnipatrick/imagesforNSTP/nstp 3.jfif", text: "Answering the Questions." }
    ],
    videos: [
      { video: "<video width='350' height='230' controls><source src='imagesnipatrick/VIDEOS/nstp 5.mp4' type='video/mp4'>Your browser does not support the video tag.</video>", text: "This seminar talk about how can we fight or how we able to make our mental health stable." },
      { video: "<video width='350' height='230' controls><source src='imagesnipatrick/VIDEOS/nstp 6.mp4' type='video/mp4'>Your browser does not support the video tag.</video>", text: "Giving us advice and tips to not struggles or to not experience any stress in our ages." }
    ]
  },
  { // SINAG
    name: "PATRICK JUSTINE SANTOS",
   photos: [
      { thumb: "imagesnipatrick/imagesforSINAGTAM/sinagticket.jfif", text: "Ticket for our sinag tamaraw event." },
      { thumb: "imagesnipatrick/imagesforSINAGTAM/sinagtam1.jfif", text: "This picture was taken before the concert." },
      { thumb: "imagesnipatrick/imagesforSINAGTAM/sinagtam2.jfif", text: "SINAG - small view of the stage." },
      { thumb: "imagesnipatrick/imagesforSINAGTAM/sinagtam 2.jfif", text: "This is my first time to attend to this kind of concert in our school this picture makes another memorable memories of my life because of my friends." }
    ],
    videos: [
      { video: "<video width='350' height='230' controls><source src='imagesnipatrick/VIDEOS/sinag 3.mp4' type='video/mp4'>Your browser does not support the video tag.</video>", text: "This video is by my friend we enjoy the concert together and vibing the songs that HEY JUNE play. " },
      { video: "<video width='350' height='230' controls><source src='imagesnipatrick/VIDEOS/sinag 4.mp4' type='video/mp4'>Your browser does not support the video tag.</video>", text: "SINAG - HEY JUNE." },
      { video: "<video width='350' height='230' controls><source src='imagesnipatrick/VIDEOS/sinag 5.mp4' type='video/mp4'>Your browser does not support the video tag.</video>", text: "SINAG - LOLA AMOUR." }
    ]
  },
  { // COMM
    name: "PATRICK JUSTINE SANTOS",
    photos: [
      { thumb: "imagesnipatrick/imagesforPURPOSSIVECOM/comm 2.jfif", text: "This is us after the reporting about our lesson. insert me" },
      { thumb: "imagesnipatrick/imagesforPURPOSSIVECOM/debate.jpg", text: "COMM - Reporting about debate." }
    ],
    videos: [
      { video: "<video width='350' height='230' controls><source src='imagesnipatrick/VIDEOS/comm.mp4' type='video/mp4'>Your browser does not support the video tag.</video>", text: "This is me when we are reporting to our lesson in purposive communication." }
    ]
  }
];

// state
let activeSubject = 0; // subject index
let activeTab = 'photos'; // 'photos' or 'videos'
let pageIndex = 0;

// elements
const subjectBtns = document.querySelectorAll('.subject-btn');
const tabBtns = document.querySelectorAll('.tab-btn');
const studentNameEl = document.getElementById('student-name');
const contentInner = document.getElementById('content-inner');
const pagerEl = document.getElementById('pager');
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');

// initialize
function init(){
  // wire top subject buttons
  subjectBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      subjectBtns.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      activeSubject = Number(btn.dataset.sub);
      pageIndex = 0;
      updateStudentHeader();
      renderContent();
    });
  });

  // tabs
  tabBtns.forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      tabBtns.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      activeTab = btn.dataset.tab;
      pageIndex = 0;
      renderContent();
    });
  });

  backBtn.addEventListener('click', () => {
    const items = getActiveItems();
    pageIndex = Math.max(0, pageIndex - 1);
    renderContent();
  });

  nextBtn.addEventListener('click', () => {
    const items = getActiveItems();
    pageIndex = Math.min(items.length - 1, pageIndex + 1);
    renderContent();
  });

  // initial render
  updateStudentHeader();
  renderContent();
}

// return array of items for active subject & tab
function getActiveItems(){
  const subj = subjectsData[activeSubject];
  return activeTab === 'photos' ? subj.photos : subj.videos;
}

function updateStudentHeader(){
  studentNameEl.textContent = subjectsData[activeSubject].name;
}

// render content area (thumbnail/video + text) and pager
function renderContent(){
  const items = getActiveItems();
  if(!items || items.length === 0){
    contentInner.innerHTML = `<div class="content-thumb">No content</div><div class="content-text">No items available.</div>`;
    pagerEl.textContent = "0 / 0";
    return;
  }

  // clamp pageIndex
  pageIndex = Math.max(0, Math.min(pageIndex, items.length - 1));

  const current = items[pageIndex];
  let leftHtml = '';
  if(activeTab === 'photos'){
    leftHtml = `<div class="content-thumb"><img src="${current.thumb}" alt="photo" style="width:100%;height:100%;object-fit:cover;border-radius:4px"></div>`;
  }else{
    leftHtml = `<div class="content-thumb">${current.video || ''}</div>`;
  }

  const rightHtml = `<div class="content-text">${current.text || ''}</div>`;

  contentInner.innerHTML = leftHtml + rightHtml;
  pagerEl.textContent = `${pageIndex + 1} / ${items.length}`;
}

// run
init();
