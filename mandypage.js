const subjectsData = [
  { // P.E (index 0)
    name: "NORMANDY D.R. GARCIA",
    photos: [
      { thumb: "mandyimages/PATHFIT1.jpg", text: "For PathFit, majority of our meetings were conducted at the gym, however a quick discussion is conducted on the dance room before we commence to the gym." },
      { thumb: "mandyimages/PATHFIT2.jpg", text: "These meetings always incorporated exercising and very engaging for all students." },
      { thumb: "mandyimages/PATHFIT3.jpg", text: "The usual routine for Pathfit is a short discussion then followed by ." },
      { thumb: "mandyimages/PATHFIT4.jpg", text: "This picture is a picture from our pathfit session for preparations for our final exam for this semester." },
    ],
    videos: [
      { video: "<video width='350' height='230' controls><source src='mandyimages/PATHFITVIDEO1.mp4' type='video/mp4'>Your browser does not support the video tag.</video>", text: "This video was taken of me doing sets of jumping jacks as it is the exercise given to me for the final exam of Pathfit. My other group members can be seen in the background." },
    ]
  },
  { // NSTP
    name: "NORMANDY D.R. GARCIA",
   photos: [
      { thumb: "mandyimages/nstpoc1.png", text: "Several NSTP meetings for this semester were held online. These meetings talked about the proper etiquette that must be observed as a college student." },
      { thumb: "mandyimages/nstpoc2.png", text: "These included tips on how to send an email properly." },
      { thumb: "mandyimages/nstp2.png", text: "But aside from that, important human values were also thought to us during NSTP. These values include the value of volunteerism and leadership. As college students, these values make us become an example to other students specifically, younger students." }
    ],
    videos: [
      { video: "<video width='350' height='230' controls><source src='mandyimages/NSTPVIDEO.mp4' type='video/mp4'>Your browser does not support the video tag.</video>", text: "For the last meeting of NSTP for the first semester, A Mental Health seminar was conducted on FEU Roosevelt Marikina's Gymnasium. " },
      { video: "<video width='350' height='230' controls><source src='mandyimages/NSTPVIDEO2.mp4' type='video/mp4'>Your browser does not support the video tag.</video>", text: "This meeting serves as a lesson for students to properly take care of their mental health by explaining factors and symptoms of various mental health issues to keep students aware and prepared." }
    ]
  },
  { // SINAG
    name: "NORMANDY D.R. GARCIA",
   photos: [
    { thumb: "mandyimages/stamticketndband.jpg", text: "Sinag tamaraw is easily one of the most memorable moments I've had with FEU Roosevelt so far. Being with friends and enjoying the many things that the fair had to offer was a very unique experience. " },
      { thumb: "mandyimages/stam2.jpg", text: "The queue was long, very long. There were many students who wanted to enter to enjoy what Sinag Tamaraw had to offer." },
      { thumb: "mandyimages/stam3.png", text: "During the event, I tried many of the foods offered at the stalls. There were a lot of options, from pasta and pizza, to shawarma, to Dairy Queen. It was really up to you to decide on what you want to buy at the event." },
      { thumb: "mandyimages/stam4.jpg", text: "Me and my friends all grouped up and took many photos to commemorate this memorable event, then continued to explore the event's amenities, occasionally taking breaks every now and then to sit down and take it slow." },
        { thumb: "mandyimages/stam6.jpg", text: "As the night begins, the bands finally started to arrive. Our attention went from the many stalls to the bands performing at stage. Their talents had us at awe during their performance." },
        { thumb: "mandyimages/stam7.jpg", text: "I think what really stood out to me most was how chill yet lively the whole event felt. Everywhere you looked, there was something happening—music, food stalls, games, and people just having a good time." }
    ],
    videos: [
      { video: "<video width='350' height='230' controls><source src='mandyimages/tamtaminamo.mp4' type='video/mp4'>Your browser does not support the video tag.</video>", text: "During the night, me and my friends tuned in to Hey June! The second to the last band performing for that night. " },
      { video: "<video width='350' height='230' controls><source src='mandyimages/stam2.mp4' type='video/mp4'>Your browser does not support the video tag.</video>", text: "You really just had to be there to describe the feeling. It was very fun, It's a great way to make memories as a Freshman in college." }
    ]
  },
  { // COMM
    name: "NORMANDY D.R. GARCIA",
    photos: [
      { thumb: "mandyimages/comm1.jpg", text: "Our Purposive Communication professor assigned me and some friends to present for a topic. We were able to deliver a solid presentation." },
      { thumb: "mandyimages/comm 2.jfif", text: "It was simple, me and my groupmates would present the topic evenly then we would give out a short quiz to our classmated as for the requirement of the subject." },
      { thumb: "mandyimages/cepeahhpic.jpg", text: "Once they are done, we recorded their scores and properly submitted the quizzes to our professor for her to record it. Concluding our presentation for purposive communication." }
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
