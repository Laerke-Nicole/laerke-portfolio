<template>
    <main>
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
                                <!-- <button id="button1">Se mit arbejde</button> -->
                                <button id="button1">See my work</button>
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
import portfoliodb from '../modules/portfoliodb'
const { state } = portfoliodb()


onMounted(() => {
window.scrollTo(0, 0)
})


</script>

<style scoped>

main {
padding-top: 96px;
}


/* styling position of buttons */
button {
margin-bottom: 60px;
}
/* styling position of buttons end */


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
.p-number {
color: var(--white-text);
}

.p-category {
    color: var(--white-headline);
    transform: scaleY(1.4);
    font-size: 21px;
    font-style: normal;
    font-weight: bold;  
}

.p-title {
color: var(--white-text);
}

.portfolio-content p {
padding-top: 16px;
padding-bottom: 12px;
color: var(--white-text);
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

    .p-number {
        padding-top: 60px;
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

@media only screen and (max-width: 800px) {
    .specialties .scroll-text span {
        font-size: 32px;
    }
    .scroll-text hr {
    height: 2px;
    width: 1.5rem;
    }
}

@media only screen and (max-width: 700px) {
    .specialties .scroll-text {
        gap: 1rem;
    }
}

@media only screen and (max-width: 580px) {
    .passionBox p {
        padding-right: 40px;
    }

    #bright-frame-inside {
        height: auto;
    }
}

@media only screen and (max-width: 500px) {
  .bright-frame-insideContent {
    padding: 45px 8%;
  }
}

@media only screen and (max-width: 400px) {
    .p-category {
        font-size: 22px;
        line-height: 1.1;
        padding: 8px 0;
    }
}
/* responsive end*/

  
</style>