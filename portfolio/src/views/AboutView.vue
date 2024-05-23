<template>
  <main class="secondary-bg">
    <section class="flex about-me">
      <div class="flex w-1/2 justify-end">
        <img src="https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/Me%2Fme.jpg?alt=media&token=651fb432-8d6c-4815-a446-e1337a290f4a" alt="" class="my-img">
      </div>
        
      <div class="flex flex-col w-1/2 justify-center">
        <div class="pl-20">
          <h1 class="dark-headline text-6xl pb-20">Hello,<br>I'm Lærke</h1>
          <div class="w-2/3">
            <p class="black-text pb-4">I'm a multimedia designer from Denmark who's main passion is in front-end development and graphic design.</p>
            <p class="black-text">I have an eye for detail and consider myself to be a bit perfectionist.</p>
          </div>
        </div>
      </div>
    </section>
      
      <!-- text sliding animation -->
      <div class="services secondary-bg">
        <div class="servicesScrollBox">
          <div class="servicesScrollText">
            <h5 class="black-text">What can I do?</h5>
            <h5 class="black-text">What can I do?</h5>
            <h5 class="black-text">What can I do?</h5>
            <h5 class="black-text">What can I do?</h5>
            <h5 class="black-text">What can I do?</h5>
            <h5 class="black-text">What can I do?</h5>
            <h5 class="last black-text">What can I do?</h5>
          </div>

          <div class="servicesScrollText">
            <h5 class="black-text">What can I do?</h5>
            <h5 class="black-text">What can I do?</h5>
            <h5 class="black-text">What can I do?</h5>
            <h5 class="black-text">What can I do?</h5>
            <h5 class="black-text">What can I do?</h5>
            <h5 class="black-text">What can I do?</h5>
            <h5 class="last black-text">What can I do?</h5>
          </div>
        </div>
        
        
        <!-- the services i offer -->
        <div class="servicesBorder">
          <div class="servicesbox pt-16 pb-16 primary-bg light-headline">
            <h4 v-motion-slide-visible-once-bottom>Web design & development</h4>
            <h4 v-motion-slide-visible-once-bottom>UI/UX design</h4>
            <h4 v-motion-slide-visible-once-bottom>Graphic design</h4>
            <h4 v-motion-slide-visible-once-bottom>Video editing</h4>
            <h4 v-motion-slide-visible-once-bottom>Record videos</h4>
            <h4 v-motion-slide-visible-once-bottom>Photo editing</h4>
            <h4 v-motion-slide-visible-once-bottom>Photography</h4>
            <h4 v-motion-slide-visible-once-bottom>User Experience</h4>
            <h4 v-motion-slide-visible-once-bottom>Digital marketing</h4>
            <h4 v-motion-slide-visible-once-bottom>Create VR game</h4>
            <h4 v-motion-slide-visible-once-bottom>3D modelling</h4>
          </div>
        </div>
    </div>


    <section class="flex ten-percent pt-16">
        <div class="w-6/12 flex flex-col pl-24"> 
          <h4 class="dark-headline text-5xl pb-14">Please check out my CV to see more about me</h4>
          <a href="https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/cv%2FL%C3%A6rke-Nielsen-CV%20(ENG).pdf?alt=media&token=bd49b556-eba3-4565-9b87-d2ad49960c1d" target="_blank">
            <button class="btn-3">See my CV</button>
          </a>
          
        </div>

      <div class="w-6/12">
        <img src="https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/Me%2Fcat%20sitting.svg?alt=media&token=20ce2dd9-01eb-4595-9c4a-e2b11f2829b0" alt="">
      </div>  
      
    </section>

  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import star from '../modules/star';

// web logos
// let html = 'https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/skills-logo%2Fhtml.svg?alt=media&token=8e6eb584-4340-4850-9d53-fe420bd4fe3f';
// let css = 'https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/skills-logo%2Fcss.svg?alt=media&token=ce712c3a-918f-415d-8abb-c3685e9706a3';
// let javascript = 'https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/skills-logo%2Fjavascript.svg?alt=media&token=aa0a08e7-191b-4abc-9f8f-2beb833d3687';
// let vue = 'https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/skills-logo%2Fvue.svg?alt=media&token=efdaec05-e33f-4c52-8266-76149f2dedfc';
// let typescript = 'https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/skills-logo%2Ftypescript.svg?alt=media&token=fe356bee-a088-4b60-8f48-fc03c1cdaeba';
// let bootstrap = 'https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/skills-logo%2Fbootstrap.svg?alt=media&token=1b88b205-da1e-44b5-a245-8c59d2b7d759';
// let php = 'https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/skills-logo%2Fphp.svg?alt=media&token=06e92345-2f0c-4c94-ad49-7cb0628a281e';
// let wordpress = 'https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/skills-logo%2Fwordpress.svg?alt=media&token=d8d697ab-92ab-4301-8eea-f4a192f2d2d5';
// let tailwind = 'https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/skills-logo%2Ftailwind.svg?alt=media&token=99784550-47e3-4595-b56f-df3c4f682f1e';



// software logos
let PremierePro = 'https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/skills-logo%2Fpr.svg?alt=media&token=269796f4-b6bd-494d-908a-e704d2683a7d';
let photoshop = 'https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/skills-logo%2Fps.svg?alt=media&token=ae0b10b1-5954-406e-b607-ef2a3c6e3eb8';
let Indesign = 'https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/skills-logo%2Fid.svg?alt=media&token=6cd11725-9c14-4886-ade3-0ac42cf6ceda';
let Illustrator = 'https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/skills-logo%2Fai.svg?alt=media&token=65755d04-7b11-4da4-861c-5c07c5c17983';
let XD = 'https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/skills-logo%2Fxd.svg?alt=media&token=63c2b9e2-70ab-452c-a18e-c6703aaa4684';


onMounted(() => {
window.scrollTo(0, 0)
})
</script>

<style>
main {
  padding-top: 64px;
}

.about-me {
  height: 100vh;
}

.my-img {
  height: 100vh;  
  object-fit: cover;
}

.cat {
  margin-top: -140px;
}

/* text about me end */


/* services */
.servicesScrollBox {
  display: flex;
  width: 100%;
  overflow: hidden;
  background-color: var(--tertiary-color);
}

.servicesScrollBox .servicesScrollText {
  display: flex;
  align-items: center;
  white-space: nowrap;
  transition: all 1s ease;
  gap: 4rem;
  display: flex;
  animation: animate_text 30s linear infinite;
}

.servicesScrollBox .servicesScrollText h5 {
  margin: 0;
  font-size: 80px;
  transition: all 2s ease;
  font-style: normal;
}

@keyframes animate_text {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-100%, 0, 0);
  }
}   

.services h4 {
  text-align: center;
  padding-bottom: 24px;
  font-size: 38px;
}

.last {
  padding-right: 2rem !important;
}
/* services end */


/* responsive */
@media only screen and (max-width: 970px) {
  .bright-frame-inside {
      height: auto;
  }

  .aboutMe {
      display: flex;
      flex-direction: column;
  }
}

@media only screen and (max-width: 950px){
  .about-cols {
    flex-direction: column-reverse;
  }

  .about-skills-container {
    width: 100%;
  }

  .right-portrait {
    width: 100%;
  }

  .about-about {
    height: auto !important;
  }

  .servicesFirsth4 {
  padding-top: 60px;
  }

  .servicesLasth4 {
  padding-bottom: 60px !important;
  }
}

@media only screen and (max-width: 700px) {
  .servicesbox h4 {
      font-size: 35px;
  }

  .servicesScrollBox .servicesScrollText {
      gap: 1rem;
  }

  .servicesScrollBox .servicesScrollText h5 {
      font-size: 28px;
  }
}

@media only screen and (max-width: 590px) {
  .servicesbox h4 {
      font-size: 24px;
  }
}

@media only screen and (max-width: 570px) {
  iframe {
      height: 200px;
  }
}

@media only screen and (max-width: 500px){  
  .aboutMe {
  padding: 45px 8%;
  }

  .services h4 {
  padding-bottom: 18px;
  }

  .about-photo {
      padding: 45px 8%;
  }
}

@media only screen and (max-width: 490px) {
  iframe {
      height: 150px;
  }

  .aboutText {
      width: 100%;
  }
}

@media only screen and (max-width: 380px) {
  .aboutText h4 {
      font-size: 35px;
  }
}

@media only screen and (max-width: 360px) {
  iframe {
      height: 130px;
  }
}
/* responsive end */


</style>
