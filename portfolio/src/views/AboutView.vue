<template>
  <main>
      <!-- about container -->
      <div class="flex about-cols">
          <div class="primary-frame w-6/12 left-portrait">
              <div class="primary-frame-inside about-photo ten-percent pt-16">
                  <h3 class="white-headline text-5xl pb-10">My skills</h3>
                  <div class="flex flex-col justify-between gap-20">
                    <div>
                      <h4 class="white-text text-2xl">Web development skills</h4>
                      <div>
                        HTML, CSS, Javascript, Vue.js, Typescript, Tailwind, Bootstrap, Git, Wordpress, Jenkins
                      </div>
                    </div>

                    <div>
                      <h4 class="white-text text-2xl">Software skills</h4>
                      <div>
                        XD, Premiere Pro, Photoshop, Lightroom, Illustrator, Indesign
                      </div>
                    </div>
                  </div>
                  

              </div>
          </div>

          <div class="bright-frame w-6/12 right-portrait">
              <div class="bright-frame-inside about-about ten-percent pt-16">
                  <!-- content about me -->
                  <div class="aboutMe">                      
                      <div class="aboutText">
                          <!-- <h1>Hvem er jeg</h1>
                          <p class="pt-3">Jeg er lige nu i gang med min multimediedesigneruddannelse på Erhvervsakademiet Sydvest i Esbjerg. Jeg er passioneret for både foto- og videoredigering, samt design og web-udvikling, men har også interesse for grafisk- og UI/UX design. Jeg elsker at lærer nyt og nørde med mit arbejde, ligegyldig hvilken opgave jeg får.</p> -->
                          <h1 class="text-5xl primary-text">Who am I?</h1>
                          <p class="pt-3 black-text">Hello! I am currently studying my 3rd semester of multimedia design at Business Academy South West in the city of Esbjerg, Denmark.<br><br>For me, there is nothing better than seeing things come together step by step, whether I am building a website or creating a graphic design. I have an eye for detail and consider myself to be a bit perfectionist.</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      

      
      <!-- text sliding animation -->
      <div class="services">
          <div class="servicesScrollBox">
              <div class="servicesScrollText">
                  <h5>What I can do</h5>
                  <hr>
                  <h5>What I can do</h5>
                  <hr>
                  <h5>What I can do</h5>
                  <hr>
                  <h5>What I can do</h5>
                  <hr>
                  <h5>What I can do</h5>
                  <hr>
                  <h5>What I can do</h5>
                  <hr>
                  <h5 id="last">What I can do</h5>
                  <hr>
              </div>

              <div class="servicesScrollText">
                  <h5>What I can do</h5>
                  <hr>
                  <h5>What I can do</h5>
                  <hr>
                  <h5>What I can do</h5>
                  <hr>
                  <h5>What I can do</h5>
                  <hr>
                  <h5>What I can do</h5>
                  <hr>
                  <h5>What I can do</h5>
                  <hr>
                  <h5 id="last">What I can do</h5>
                  <hr>
              </div>
          </div>
          
          
          <!-- the services i offer -->
          <div class="servicesBorder white-text">
              <div class="servicesbox pt-16 pb-16">
                  <h4>Web design & development</h4>
                  <h4>UI/UX design</h4>
                  <h4>Graphic design</h4>
                  <h4>Video editing</h4>
                  <h4>Record videos</h4>
                  <h4>Photo editing</h4>
                  <h4>Photography</h4>
                  <h4>User Experience</h4>
                  <h4>Digital marketing</h4>
                  <h4>Create VR game</h4>
                  <h4>3D modelling</h4>
              </div>
          </div>
      </div>
  </main>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
window.scrollTo(0, 0)
})
</script>

<style>
main {
  padding-top: 96px;
}

/* border for container */
.bright-frame {
padding: 15px;
background-color: var(--white-headline);
}

/* my portrait */
.my-portrait{
  height: 50vh;
}


/* text about me */
.about-about {
  height: 500px !important;
}

.aboutMe {
  display: flex;
}

.about-photo {
  height: 500px;
}

.aboutText {
  display: flex;
  flex-direction: column;
}

/* text about me end */


/* services */
.servicesScrollBox {
display: flex;
width: 100%;
background-color: var(--white-headline);
overflow: hidden;
border-top: var(--dark-border);
border-bottom: var(--dark-border);
}

.servicesScrollBox .servicesScrollText {
display: flex;
align-items: center;
white-space: nowrap;
transition: all 1s ease;
gap: 2rem;
display: flex;
animation: animate_text 30s linear infinite;
}

.servicesScrollBox .servicesScrollText h5 {
margin: 0;
font-size: 36px;
color: var(--primary-color);
transition: all 2s ease;
font-style: normal;
font-weight: bold; 
}

.servicesScrollText hr {
  display: block;
  border-width: 0;
  height: 2px;
  width: 2rem;
  transform: rotate(90deg);
  background-color: var(--primary-color);
  align-self: center;
}

#last {
  padding-right: 2rem;
}

@keyframes animate_text {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-100%, 0, 0);
  }
}   

.servicesBorder {
  padding: 15px;
  background-color: var(--secondary-color);
}

.servicesbox {
  background-color: var(--secondary-color);
  border: var(--bright-border);
}

.services h4 {
  text-align: center;
  padding-bottom: 24px;
  font-size: 38px;
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

  .video {
      width: 100%;
      height: 200%;
  }

  iframe {
      width: 100%;
      height: 300px;
  }

  .aboutText {
      width: 70%;
  }

  .aboutText p {
      padding-right: 0;
  }
}

@media only screen and (max-width: 950px){
  .about-me-name-container{
      display: none;
  }

  .about-cols {
      flex-direction: column-reverse;
  }

  .left-portrait {
      width: 100%;
  }

  .right-portrait {
      width: 100%;
  }

  .about-about {
      height: auto !important;
  }

  .about-photo {
      padding: 60px 8%;
  }

  .my-portrait{
      height: 45vh;
  }

  .about-photo {
      height: auto;
  }

  .aboutMe {
  padding: 60px 8% 80px 8%;
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

  .servicesScrollText hr {
      height: 2px;
      width: 1.4rem;
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
