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


    <section class="video-cv flex justify-between ten-percent black-bg pt-32 pb-32">
        <div class="light-headline">
          <ul>
            <li class="more-bold-p">A LITTLE ABOUT ME</li>
            <li class="more-bold-p">WORK</li>
            <li class="more-bold-p">SOFTWARE // PROGRAMS</li>
            <li class="more-bold-p">MY EXPERIENCES</li>
            <li class="more-bold-p">EDUCATION</li>
            <li class="more-bold-p">INTERESTS</li>
          </ul>
        </div>

        <div>
          <div>
            <iframe src="https://www.youtube.com/embed/Z7Z1Q48Qe3o?si=ME9w1Us_uAkzvWga"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                class="round-corner video-frame"></iframe>
          </div>
        </div>

        <div class="light-headline text-right">
          <ul>
            <li class="more-bold-p">WEB DESIGN & DEVELOPMENT</li>
            <li class="more-bold-p">UI/UX DESIGN</li>
            <li class="more-bold-p">GRAPHIC DESIGN</li>
            <li class="more-bold-p">ILLUSTRATION</li>
            <li class="more-bold-p">VIDEO EDITING</li>
            <li class="more-bold-p">VIDEO RECORDING</li>
            <li class="more-bold-p">PHOTO EDITING</li>
            <li class="more-bold-p">PHOTOGRAPHY</li>
            <li class="more-bold-p">USER EXPERIENCE</li>
            <li class="more-bold-p">DIGITAL MARKETING</li>
          </ul>
        </div>
      
    </section>

  </main>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
window.scrollTo(0, 0)
})
</script>

<style>
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


/* video cv */
.video-frame {
  width: 400px;
  height: 225px; 
}

/* responsive */
@media only screen and (max-width: 970px) {

}

/* responsive end */


</style>
