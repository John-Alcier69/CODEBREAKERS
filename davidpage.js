const subjectsData = [
  { // P.E (index 0)
    name: "DAVID JOB ESTEBAN",
    photos: [
      { thumb: "davidsweb/preparation.jpg", text: "This is how to right form." },
      { thumb: "davidsweb/training.jpg", text: "Prepation of our Finals in PE." },
      { thumb: "davidsweb/Pe.jpg", text: "The right Form." },
    ],
    videos: [
      { video: "<video width='350' height='230' controls><source src='davidsweb/vid.mp4' type='video/mp4'>Your browser does not support the video tag.</video>", text: "This the video of our group that we prepare our finals in PE." },
      { video: "<video width='350' height='230' controls><source src='videos/sample1.mp4' type='video/mp4'>Your browser does not support the video tag.</video>", text: "P.E - Video 2 description." }
    ]
  },
  { // SEMINAR
    name: "DAVID JOB ESTEBAN",
     photos: [
      { thumb: "davidsweb/seminars.jpg", text: "Discussing the skills  ." },
      { thumb: "davidsweb/photoseminar.jpg", text: "Discussing of how to use this ." },
       { thumb: "davidsweb/Seminar.jpg", text: "and this one is another dicussion." },
    ],
    videos: [
      { video: "<video width='350' height='230' controls><source src='davidsweb/vidjpg.mp4' type='video/mp4'>Your browser does not support the video tag.</video>", text: "  Before we start the orientaion." },
      { video: "<video width='350' height='230' controls><source src='davidsweb/seminarpng.mp4' type='video/mp4'>Your browser does not support the video tag.</video>", text: " This is the vid of the orientaion and discuss the about the work in the future." }
    ]
},
  { // NSTP
    name: "DAVID JOB ESTEBAN",
   photos: [
      { thumb: "davidsweb/jobjobjpg.jpg", text: "NSTP - This is the National CPR Day." },
      { thumb: "davidsweb/dnb.jpg", text: "NSTP - And we are guided to know how to CPR." },
       { thumb: "davidsweb/jobi.jpg", text: "NSTP -This the Picture of the staff of the Red cross." },
       { thumb: "davidsweb/bog.jpg", text: "NSTP - The excecution of CPR." },
      { thumb: "davidsweb/cobipng.jpg", text: "This is the Cybercrime Prevention Month ." },
      { thumb: "davidsweb/bogspng.jpg", text: "NSTP - The one who Discus the topic of Cybercrime prevention." },
      { thumb: "davidsweb/davpng.jpg", text: "NSTP - This is another slide of our topic." },




    ],
    videos: [
      { video: "<video width='350' height='230' controls><source src='videos/sample1.mp4' type='video/mp4'>Your browser does not support the video tag.</video>", text: "NSTP - No Video Available." },
      { video: "<video width='350' height='230' controls><source src='videos/sample1.mp4' type='video/mp4'>Your browser does not support the video tag.</video>", text: "NSTP - No Video Available." }
    ]
  },
  { // SINAG
    name: "DAVID JOB ESTEBAN",
   photos: [
      { thumb: "davidsweb/ghj.jpg", text: "SINAG CONCERT -this is the performer of our event." },
      { thumb: "davidsweb/jobtam.jpg", text: "SINAG CONCERT - and in our event we have a foodcart." },
        { thumb: "davidsweb/esteban.jpg", text: "SINAG CONCERT - this is the concert of Hey june." },
        { thumb: "davidsweb/jobjpg.jpg", text: "SINAG CONCERT -And we have a souvenir in our campus." },
         { thumb: "davidsweb/davidjpg.jpg", text: "SINAG CONCERT - Another foodcart." },
         { thumb: "davidsweb/jhp.jpg", text: "SINAG CONCERT - Another Picture of Hey June." },
         { thumb: "davidsweb/jfb.jpg", text: "SINAG CONCERT - Another Performer in our event." },
         { thumb: "davidsweb/jks.jpg", text: "SINAG CONCERT - And this is the concert of Lola Amour." },
         { thumb: "davidsweb/lnm.jpg", text: "SINAG CONCERT - we have a fireworks." },
          { thumb: "davidsweb/hjk.jpg", text: "SINAG CONCERT - Another Picture of Hey June." },
        { thumb: "davidsweb/picturejpg.jpg", text: "SINAG SPORTS - Before Sinag sports." },
        { thumb: "davidsweb/picpng.jpg", text: "SINAG SPORTS - We have a Muse and Esccort." },

         


    ],
    videos: [
      { video: "<video width='350' height='230' controls><source src='davidsweb/davidtamvid.mp4' type='video/mp4'>Your browser does not support the video tag.</video>", text: "SINAG CONCERT - This the video of the concert." },
      { video: "<video width='350' height='230' controls><source src='davidsweb/parade.mp4' type='video/mp4'>Your browser does not support the video tag.</video>", text: "SINAG SPORTS - This is the Parade of the Different teams." },
      { video: "<video width='350' height='230' controls><source src='davidsweb/firstpoints.mp4' type='video/mp4'>Your browser does not support the video tag.</video>", text: "SINAG SPORTS - This is the video of Basketball ." },
    ]
  },
  
  { // COMM
    name: "DAVID JOB ESTEBAN",
    photos: [
      { thumb: "davidsweb/jnb.jpg", text: "COMM - The topic of our report is all about commonication and technology." },
      { thumb: "davidsweb/jmb.jpg", text: "COMM - the number of my group is group-3." },
      { thumb: "davidsweb/jbs.jpg", text: "COMM - and the succes of our report." },


    ],
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
