<template>
  <main>
    <!-- primary-frame-inside -->
    <div class="primary-frame">
      <div class="primary-frame-inside ten-percent">

        <div class="primary-frame-inside-top-content flex pt-16">
          <!-- introduction -->
          <div class="primary-frame-inside-content w-4/6 pb-16">
            <h1 class="text-6xl white-headline pb-4 font-normal">Hello,<br> I'm Lærke!</h1>
            <h2 class="white-text text-2xl">A multimedia designer</h2>

            <p class="pt-16 white-text">With a passion to bring my creative ideas<br> to life through photography, video production,<br> web development and graphic design.</p>
            <!-- button to go straight to contact -->
            <div class="primary-frame-inside-button pt-5">
              <RouterLink to="/contact">
                <button class="btn">Contact me</button>
              </RouterLink>
            </div>
          </div>
          
          <div class="w-2/6 pb-16">
            <div class="my-portrait flex justify-end">
              <img src="https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fbeige-background.jpg?alt=media&token=c6fe6e6b-1287-453a-91cf-cc99746bc4b0&_gl=1*t2doc5*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY4NTg4OTg1MS40OC4xLjE2ODU4ODk5MDkuMC4wLjA." alt="portrait-me">
            </div>  

            <div class="passionBox flex white-text justify-end"></div>
          </div>
        </div>

      </div>
    </div>
    
    
    <!-- scrolling text with my specialties -->
    <!-- <div class="specialties">
      <div class="scroll-text">
        <span>Web design & development</span>
        <hr>
        <span>Video recording</span>
        <hr>
        <span>Video editing</span>
        <hr>
        <span>Photography</span>
        <hr>
        <span>Graphic design</span>
        <hr>
        <span>Web design & development</span>
        <hr>
        <span>Video recording</span>
        <hr>
        <span>Video editing</span>
        <hr>
        <span>Photography</span>
        <hr>
        <span id="last">Graphic design</span>
        <hr>
      </div>
      <div class="scroll-text">
        <span>Web design & development</span>
        <hr>
        <span>Video recording</span>
        <hr>
        <span>Video editing</span>
        <hr>
        <span>Photography</span>
        <hr>
        <span>Graphic design</span>
        <hr>
        <span>Web design & development</span>
        <hr>
        <span>Video recording</span>
        <hr>
        <span>Video editing</span>
        <hr>
        <span>Photography</span>
        <hr>
        <span id="last">Graphic design</span>
        <hr>
      </div>
    </div> -->



    <div class="portfolio-item-container">

        <!-- making a loop for all of my projects -->
        <div v-for="item in state" :key="item" class="portfolio-item">

          <!-- container for projects -->
          <div class="portfolio-content" :class="item.id" id="portfolio-view">

            <!-- left portfolio -->
            <div class="bright-frame">
              <div class="bright-frame-inside">
                  <div class="bright-frame-insideContent">
                    <RouterLink :to="{ name: 'portfoliodetails', params:{id: item.id}}">
                      <div>
                        <img :src="item.portfolioimage" class="product-image" alt="portfolio-img">
                      </div>   
                    </RouterLink>
                  </div>
              </div>
            </div>
            
            <!-- right portfolio -->
            <div class="secondary-frame">
                <div class="secondary-frame-inside">
                    <div class="secondary-frame-insideContent">
                      <h4 class="p-number" :class="item.number">{{ item.number }}</h4>
                      <h3 class="p-category" :class="item.category">{{ item.category }}</h3>
                      <h3 class="p-title">{{ item.title }}</h3>
                      <p>{{ item.description }}</p>
                      <RouterLink :to="{ name: 'portfoliodetails', params:{id: item.id}}">
                        <!-- <button id="button1">Se mit arbejde</button>   -->
                        <button class="btn">See my work</button>
                      </RouterLink>
                    </div>
                </div>
            </div>   
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

<style scoped>

main {
  padding-top: 96px;
}

/*primary-frame-inside*/
.primary-frame-inside h3 {
  font-weight: 300;
}

.primary-frame-inside h1 {
  transform: scaleY(1.2);
}

.primary-frame-inside h2 {
  font-weight: 200;
  line-height: 1;
  transform: scaleY(1.1);
}
/*primary-frame-inside end*/


/* my portrait */
.my-portrait {
  height: auto;
}

.my-portrait img {
  object-position: center;
  height: auto;
}

/* my portrait end */


/* scrollbar of my specialty of subjects */ 
.specialties {
  display: flex;
  width: 100%;
  background-color: var(--white-headline);
  overflow: hidden;
  border-top: var(--dark-border);
  border-bottom: var(--dark-border);
}

.specialties .scroll-text {
  display: flex;
  align-items: center;
  white-space: nowrap;
  transition: all 1s ease;
  gap: 2rem;
  display: flex;
  animation: animate_text 30s linear infinite;
}
  
.specialties .scroll-text span {
  margin: 0;
  font-size: 36px;
  color: var(--primary-color);
  transition: all 2s ease;
  font-family: "signo", sans-serif;
  font-style: normal;
  font-weight: bold; 
}

.scroll-text hr {
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
      transform: translate3d(-60%, 0, 0);
    }
}
/* scrollbar of my specialty of subjects end */ 



/* making container of projects */
.portfolio-item-container {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow: hidden;
  background-color: var(--black-headline);
  width: 100%;
  row-gap: 46px;
}

.portfolio-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 0;
  background-color: var(--black-headline);
  width: 100%;
}

.portfolio-content {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.bright-frame {
  width: 50%;
}
/* portfolio container end */


/* left side portfolio */
.bright-frame-inside {
  height: 65vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bright-frame-insideContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 8%;
}


/* right side portfolio */
.secondary-frame {
  width: 50%;
}

.secondary-frame-inside {
  display: flex;
  flex-direction: row;
  height: 65vh;
}

.secondary-frame-inside .secondary-frame-insideContent {
  padding-left: 8%;
  padding-right: 8%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
/* making container of projects end */


/* stying image */
.bright-frame-insideContent img {
  max-height: 50vh;
}

.bright-frame-insideContent img:hover {
  box-shadow:  9px 9px 18px #b5b5b5,
             -9px -9px 18px #ffffff;
}
/* stying image end */


/* styling portfolio text */
.p-category {
  transform: scaleY(1.4);
  font-style: normal;
  font-weight: bold; 
}

/* styling portfolio text end */


/* responsive */
@media only screen and (max-width: 1150px) {
  .bright-frame-inside {
    height: 50vh;
  }

  .secondary-frame-inside {
    height: 50vh;
  }

  .bright-frame-insideContent img {
    max-height: 40vh;
  }
}

@media only screen and (max-width: 1000px) {
  .bright-frame-inside {
    height: 45vh;
  }

  .secondary-frame-inside {
    height: 45vh;
  }
}

@media only screen and (max-width: 950px) {
  .primary-frame-inside {
    height: auto;
  }
  .primary-frame-inside-top-content {
    flex-direction: column;
  }

  .primary-frame-inside-content {
    width: 100%;
  }

  .primary-frame-inside h1 {
    font-size: 36px;
  }

  .primary-frame-inside h2{
    font-size: 30px;
  }

  .primary-frame-inside-button {
    padding-top: 12px;
  }
  .primary-frame-inside button {
    margin-bottom: 24px;
    padding-top: 12px;
  }

  .bright-frame-inside {
    height: auto;
  }

  .secondary-frame-inside {
    height: auto;
  }

  .portfolio-item-container {
    row-gap: 44px;
  }

  .my-portrait {
    justify-content: flex-start;
    padding-bottom: 12px;
  }

  .passionBox {
    text-align: left;
    justify-content: flex-start;
  }

  .portfolio-content {
    flex-direction: column;
  }

  .bright-frame {
    width: 100%;
  }

  .secondary-frame {
    width: 100%;
  }

  #secondary-frame-inside {
    height: auto;
  }
}

@media only screen and (max-width: 900px) {
  .product-image {
      max-inline-size: 100%;
      block-size: auto;
      object-fit: contain;
  }    
}

@media only screen and (max-width: 700px) {
  .specialties .scroll-text {
    gap: 1rem;
  }

  .specialties .scroll-text span {
    font-size: 28px;
  }
  .scroll-text hr {
  height: 2px;
  width: 1.4rem;
  }
}

@media only screen and (max-width: 580px) {
  .primary-frame-inside h3 {
    font-size: 18px;
  }

  .passionBox p {
    padding-right: 40px;
  }

  #bright-frame-inside {
    height: auto;
  }
}

@media only screen and (max-width: 550px) {
  .primary-frame-inside h1 {
    font-size: 34px;
  }

  .primary-frame-inside h2 {
    font-size: 28px;
  }
}

@media only screen and (max-width: 500px) {
  .primary-frame-inside {
    padding-top: 45px;
  }

  .p-number {
    padding-top: 45px;
  }

  .passionBox p {
    padding-bottom: 45px;
  }

  .bright-frame-insideContent {
    padding: 45px 8%;
  }
}

@media only screen and (max-width: 480px) {
  .primary-frame-inside h1 {
    font-size: 28px;
  }

  .primary-frame-inside h2 {
    font-size: 23px;
  }
}

@media only screen and (max-width: 400px) {
  .primary-frame-inside h3 {
    font-size: 16px;
  }

  .primary-frame-inside h1 {
    font-size: 24px;
  }

  .primary-frame-inside h2 {
    font-size: 18px;
  }

  .p-category {
    font-size: 22px;
    line-height: 1.1;
    padding: 8px 0;
  }
}
/* responsive end*/


</style>