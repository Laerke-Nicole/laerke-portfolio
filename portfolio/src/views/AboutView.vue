<template>
  <main class="secondary-bg">
    <section class="flex about-me">
      <div class="flex w-1/2">
        <img src="https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/Me%2Fflower.png?alt=media&token=f7a7ae77-d3b0-4c9d-8dcd-f85c21152a9c" alt="">
        <img src="https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/Me%2Fportfolio_me.gif?alt=media&token=20692d12-310e-45bd-9a57-d2e67840fd21" alt="" class="my-img">
      </div>
      
      <div class="flex flex-col w-1/2 justify-center pl-20 slide-down-container">
        <div class="slide-down">
          <h1 class="dark-headline text-6xl pb-20">Hello,<br>I'm Lærke</h1>
            <div class="w-2/3">
              <p class="black-text pb-4">I'm a multimedia designer from Denmark who's main passion is in front-end development and graphic design.</p>
              <p class="black-text pb-2">I have an eye for detail and consider myself to be a bit perfectionist.</p>
              <p class="font-headline dark-headline">laenie01@easv365.dk</p>
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
            <h4 v-motion-slide-visible-once-bottom>Illustrations</h4>
            <h4 v-motion-slide-visible-once-bottom>Video editing</h4>
            <h4 v-motion-slide-visible-once-bottom>Record videos</h4>
            <h4 v-motion-slide-visible-once-bottom>Photo editing</h4>
            <h4 v-motion-slide-visible-once-bottom>Photography</h4>
            <h4 v-motion-slide-visible-once-bottom>User Experience</h4>
            <h4 v-motion-slide-visible-once-bottom>Digital marketing</h4>
            <h4 v-motion-slide-visible-once-bottom>Create VR game</h4>
          </div>
        </div>
    </div>


    <!-- <section class="flex ten-percent pt-16">
        <div class="w-6/12 flex flex-col pl-24"> 
          <h4 class="dark-headline text-5xl pb-14">Please check out my CV to see more about me</h4>
          <a href="https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/cv%2FL%C3%A6rke-Nielsen-CV%20(ENG).pdf?alt=media&token=bd49b556-eba3-4565-9b87-d2ad49960c1d" target="_blank">
            <button class="btn-3">See my CV</button>
          </a>
          
        </div>

      <div class="w-6/12">
        <img src="https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/Me%2Fcat%20sitting.svg?alt=media&token=20ce2dd9-01eb-4595-9c4a-e2b11f2829b0" alt="">
      </div>  
      
    </section> -->

  </main>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
window.scrollTo(0, 0)
})
</script>

<style>
/* main {
  padding-top: 64px;
} */

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
  font-size: 50px;
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

/* what i do */
.what-i-do{
  padding-right: 20%;
}

/* responsive */
@media only screen and (max-width: 970px) {

}

/* responsive end */


</style>
