<template>
    <main>
        <div v-for="portfolio in portfolioDetail" :key="portfolio" class="portfolio-item">

            <section>
                <!-- page about each project -->
                <div class="portfolio-item">
                    <div class="primary-frame">
                        <div class="primary-frame-inside content pt-16 pb-16 ten-percent">
                            <!-- further short information about project -->
                            <div class="flex justify-between top-content">
                                <h2 class="title red-headline text-5xl pb-10">{{ portfolio.portfolioProduct }}</h2>
                                <div v-if="portfolio.portfolioProduct == 'Website'" class="flex items-end">
                                    <!-- <a :href="portfolio.portfolioWebsiteURL" target="_blank"><h5 class="live-server underline">See the website live here</h5></a>  -->
                                </div>
                                
                            </div>
                            
                            <hr>

                            <div class="p-content pt-6">
                                <div>
                                    <h4 class="p-date red-headline text-2xl font-text font-bold">{{ portfolio.portfolioYear }}</h4>
                                </div>
                                
                                <div>
                                    <!-- <h4>Beskrivelse</h4> -->
                                    <div>

                                    </div>
                                    <h4 class="red-headline text-2xl pb-3">Description</h4>

                                    <p class="pr-6 white-text pb-20">{{ portfolio.portfolioDescription }} <br> Read below about the problems and solutions i had.</p>
                                    <h4 class="red-headline text-2xl pb-3">Status</h4>
                                    <p class="white-text">{{ portfolio.portfolioStatus }}</p>
                                </div>
                                
                                <div>
                                    <!-- <h4>Kategori</h4> -->
                                    <h4 class="red-headline text-2xl pb-3">Category</h4>
                                    <p class="white-text pb-20">{{ portfolio.portfolioCategory }}</p>

                                    <h4 class="red-headline text-2xl pb-3">Tech</h4>
                                    <div class="flex flex-wrap justify-center items-center gap-4">
                                        <div v-if="portfolio.portfolioTech.includes('html')">
                                            <img :src="html" alt="html" class="tech-height">
                                        </div>
                                        <div v-if="portfolio.portfolioTech.includes('css')">
                                            <img :src="css" alt="css" class="tech-height">
                                        </div>
                                        <div v-if="portfolio.portfolioTech.includes('javascript')">
                                            <img :src="javascript" alt="javascript" class="tech-height">
                                        </div>
                                        <div v-if="portfolio.portfolioTech.includes('vue')">
                                            <img :src="vue" alt="vue" class="tech-height">
                                        </div>
                                        <div v-if="portfolio.portfolioTech.includes('tailwind')">
                                            <img :src="tailwind" alt="tailwind" class="tech-height">
                                        </div>
                                        <div v-if="portfolio.portfolioTech.includes('bootstrap')">
                                            <img :src="bootstrap" alt="bootstrap" class="tech-height">
                                        </div>
                                        <div v-if="portfolio.portfolioTech.includes('php')">
                                            <img :src="php" alt="php" class="tech-height">
                                        </div>
                                        <div v-if="portfolio.portfolioTech.includes('typescript')">
                                            <img :src="typescript" alt="typescript" class="tech-height">
                                        </div>
                                        <div v-if="portfolio.portfolioTech.includes('wordpress')">
                                            <img :src="wordpress" alt="wordpress" class="tech-height"   >
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>   
                </div>
            </section>

            <!-- gallery -->
            <section>
                <div class="primary-frame">
                    <div class="primary-frame-inside flex gap-4 six-percent pt-16 pb-16">
                        <div class="flex gap-4">
                            <div>
                                <img :src="portfolio.portfolioFrontImg" alt="">
                            </div>
                            <div>
                                <img :src="portfolio.portfolioFrontImg" alt="">
                            </div>
                            <div>
                                <img :src="portfolio.portfolioFrontImg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div class="primary-frame">
                    <div class="primary-frame-inside flex flex-col six-percent pt-16 pb-16 gap-4">
                        <div class="flex">
                            <div class="w-2/6 flex items-end pb-16">
                                <p class="white-text">FNEJNFLKEWLWEKLFNEFKLEWNFE</p>
                            </div>
                            
                            <div class="flex gap-4 w-4/6">
                                <div>
                                    <img :src="portfolio.portfolioFrontImg" alt="">
                                </div>
                                <div>
                                    <img :src="portfolio.portfolioFrontImg" alt="">
                                </div>
                            </div>
                        </div>

                        <div class="flex">
                            <div class="flex gap-4 w-4/6">
                                <div>
                                    <img :src="portfolio.portfolioFrontImg" alt="">
                                </div>
                                <div>
                                    <img :src="portfolio.portfolioFrontImg" alt="">
                                </div>
                            </div>

                            <div class="w-2/6 flex items-end pb-16 p-4">
                                <p class="white-text">FNEJNFLKEWLWEKLFNEFKLEWNFE</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
    
            <!-- information about my design process -->
            <section class="portfolio-item" v-if="portfolio.portfolioFirstProblem">
                <div class="primary-frame">
                    <div class="primary-frame-inside">
                        <div class="designProcess flex flex-row ten-percent ten-percent-top-bottom">
                            <div class="problem-solution-box flex flex-col w-3/6">
                                <!-- problems i had -->
                                <div>
                                    <!-- <h3>.01 Problemstilling jeg havde med denne {{ portfolioDetails.title }}</h3> -->
                                    <h3 class="text-3xl">.01 A problem I had with this {{ portfolio.portfolioCategory }}</h3>
                                    <p>{{ portfolio.portfolioFirstProblem }}</p>
                                </div>
                                <div class="pt-5">
                                    <!-- solutions to the problems -->
                                    <!-- <h3>.01 Løsningen på problemet</h3> -->
                                    <h3 class="text-3xl">.01 The solution to the problem</h3>
                                    <p>{{ portfolio.portfolioFirstSolution }}</p>
                                </div>
                            </div>
                            
                            <div class="problem-solution-image right-image flex flex-col w-3/6 justify-center gap-4">
                                <img :src="portfolio.portfolioFirstImgOne" id="image about the problem/issue">

                                <div v-if="portfolio.portfolioFirstImgTwo">
                                    <img :src="portfolio.portfolioFirstImgTwo" alt="">
                                </div>

                                <div v-if="portfolio.portfolioFirstImgThree">
                                    <img :src="portfolio.portfolioFirstImgThree" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
            <section class="portfolio-item" v-if="portfolio.portfolioSecondProblem">
                <div class="primary-frame">
                    <div class="primary-frame-inside">
                        <div class="designProcess psi-flip flex flex-row ten-percent ten-percent-top-bottom"> 
                            <div v-if="portfolio.portfolioSecondImgOne" class="problem-solution-image left-image flex w-3/6 items-center">
                                <img :src="portfolio.portfolioSecondImgOne" id="image about the problem/issue">
                            </div>

                            <!-- or show video -->
                            <div v-if="portfolio.portfolioProductVideoOne" class="product-demonstration-box problem-video-two flex w-3/6 items-center justify-center">
                                <video autoplay loop muted plays-inline :src="portfolio.portfolioProductVideoOne" type="video/mp4"></video>
                            </div>

                            <div class="problem-solution-box flex flex-col w-3/6">
                                <!-- problems i had -->
                                <div>
                                    <h3 class="text-3xl">.02 A problem I had with this {{ portfolio.portfolioProduct }}</h3>
                                    <p class="white-text">{{ portfolio.portfolioSecondProblem }}</p>
                                </div>
                                <div class="pt-5">
                                    <h3 class="text-3xl">.02 The solution to the problem</h3>
                                    <p class="white-text">{{ portfolio.portfolioSecondSolution }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div v-if="portfolio.portfolioThirdProblem">
                <div class="portfolio-item">
                    <div class="primary-frame">
                        <div class="primary-frame-inside">
                            <div class="designProcess flex flex-row">
                                <div class="problem-solution-box flex flex-col w-3/6">
                                    <!-- problems i had -->
                                    <div>
                                        <h3 class="text-3xl">.03 A problem I had with this {{ portfolio.portfolioProduct }}</h3>
                                        <p class="white-text">{{ portfolio.portfolioThirdProblem }}</p>
                                    </div>
                                    <div class="pt-5">
                                        <h3 class="text-3xl">.03 The solution to the problem</h3>
                                        <p class="white-text">{{ portfolio.portfolioThirdSolution }}</p>
                                    </div>
                                </div>
                                
                                <div class="problem-solution-image right-image flex w-3/6 items-center">
                                    <img :src="portfolio.portfolioThirdImgOne" id="image about the problem/issue">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="portfolio-item">
                <div class="bright-frame">
                    <div class="bright-frame-inside flex flex-col">
                        <div class="flex flex-col next-project-btn ten-percent pt-6 pb-6">
                            <!-- <p class="pb-2 text-base">or you can go back:</p> -->
                            <p class="text-base">Go back to front page:</p>
                            <div>
                                <RouterLink to='/'>
                                    <!-- button to go back to last page -->
                                    <button class="btn" @click="goBack()">&larr; Go back</button>
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
import { toRefs, computed } from 'vue'
import { RouterLink } from 'vue-router';
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import usePortfolios from '../modules/usePortfolios';


onMounted(() => {
  getPortfoliosData();
})

// get single page
const props = defineProps({
id: String
})

const { id } = toRefs(props)

const { portfolios, getPortfoliosData } = usePortfolios();

const portfolioDetail = computed(() => {
  return portfolios.value.filter(item => item.id == id.value)
})


let html = 'https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/skills-logo%2Fhtml.svg?alt=media&token=8e6eb584-4340-4850-9d53-fe420bd4fe3f';
let css = 'https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/skills-logo%2Fcss.svg?alt=media&token=ce712c3a-918f-415d-8abb-c3685e9706a3';
let javascript = 'https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/skills-logo%2Fjavascript.svg?alt=media&token=aa0a08e7-191b-4abc-9f8f-2beb833d3687';
let tailwind = 'https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/skills-logo%2Ftailwind.svg?alt=media&token=99784550-47e3-4595-b56f-df3c4f682f1e';
let vue = 'https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/skills-logo%2Fvue.svg?alt=media&token=efdaec05-e33f-4c52-8266-76149f2dedfc';
let bootstrap = 'https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/skills-logo%2Fbootstrap.svg?alt=media&token=1b88b205-da1e-44b5-a245-8c59d2b7d759';
let php = 'https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/skills-logo%2Fphp.svg?alt=media&token=06e92345-2f0c-4c94-ad49-7cb0628a281e';
let typescript = 'https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/skills-logo%2Ftypescript.svg?alt=media&token=fe356bee-a088-4b60-8f48-fc03c1cdaeba';
let wordpress = 'https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/skills-logo%2Fwordpress.svg?alt=media&token=d8d697ab-92ab-4301-8eea-f4a192f2d2d5';


let PremierePro = 'https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/skills-logo%2Fpr.svg?alt=media&token=269796f4-b6bd-494d-908a-e704d2683a7d';
let photoshop = 'https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/skills-logo%2Fps.svg?alt=media&token=ae0b10b1-5954-406e-b607-ef2a3c6e3eb8';
let Indesign = 'https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/skills-logo%2Fid.svg?alt=media&token=6cd11725-9c14-4886-ade3-0ac42cf6ceda';
let Illustrator = 'https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/skills-logo%2Fai.svg?alt=media&token=65755d04-7b11-4da4-861c-5c07c5c17983';
let XD = 'https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/skills-logo%2Fxd.svg?alt=media&token=63c2b9e2-70ab-452c-a18e-c6703aaa4684';




onMounted(() => {
  window.scrollTo(0, 0)
})

</script>

<style scoped>
main {
    padding-top: 64px;
}

.tech-height {
    height: 32px;
}

/* first section styling of container */

/* styling the either image or video */
img {
    display: flex;
    margin: 0 auto;
    width: 100%;
    block-size: auto;
    object-fit: contain;
    overflow: hidden;
}

video {
    display: flex;
    width: 100%;
    height: auto;
    overflow: hidden;
}
/* styling the either image or video end */


/* further short information about project */
.live-server {
    font-size: 18px;
    font-family: "signo", sans-serif;
    font-weight: bold; 
    color: var(--tertiary-color);
}

.live-server:hover {
    color: var(--secondary-hover);
}

hr {
    display: flex;
    display: block;
    border-width: 0;
    height: 0.5px;
    margin: 0 auto;
    background-color: var(--white-text);
}

.p-content {
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
    justify-content: space-between;
}

/* further short information about project end */


/* design process */
.designProcess{
    overflow: hidden;
}


/* problems and solution 1 */
.problem-solution-box {
    display: flex;
    flex-direction: column;
}

.problem-solution-box h3 {
    color: var(--red-headline);
    padding-bottom: 6px;
    font-style: normal;
    font-weight: bold; 
}

.problem-solution-box p {
    color: var(--white-text);
    padding-bottom: 16px;
}

/* design process end */


/* product demonstration */
.product-demonstration-box {
    margin: 0 auto;
    width: 100%;
}


/* next project */

.next-project-title h4 {
    font-size: 18px;
    font-family: "condor", sans-serif;
}

.next-project-title h3 {
    font-size: 28px;
    font-weight: bold;
    line-height: 1;
}

.next-project-img img {
    max-height: 600px;
}

.next-project-img img:hover {
    box-shadow:  9px 9px 18px #b5b5b5,
             -9px -9px 18px #ffffff;
}


/* responsive */
@media only screen and (max-width: 950px) {
    .top-content {
        flex-direction: column-reverse;
        padding-top: 60px;
        gap: 4px;
    }

    .live-server {
        font-size: 16px !important;
    }

    .top-content h5 {
        font-size: 18px;
    }

    .p-content {
        flex-direction: column;
        padding-right: 10%;
        padding-bottom: 60px;
        padding-left: 10%;
    }

    .p-date {
        padding-bottom: 24px;
    }

    .designProcess{
    flex-direction: column;
    }

    .problem-solution-box {
        width: 100%;
        padding-top: 60px;
        padding-bottom: 20px;
    }

    .problem-video-two {
        padding: 24px 10% 60px 10%;
    }

    .psi-flip {
        flex-direction: column-reverse;
    }

    .problem-solution-image {
        width: 100%;
        padding: 24px 10% 60px 10%;
    }

    .primary-frame {
        width: 100%;
    }

    .secondary-frame {
        width: 100%;
    }

    .primary-frame-inside {
        min-height: auto;
    }

    .secondary-frame-inside {
        min-height: auto;
    }

    .product-demonstration {
        padding-top: 60px;
        padding-bottom: 60px;
    }

    .next-project-title{
        padding-top: 60px;
    }
}

@media only screen and (max-width: 500px) {
    .top-content {
        padding-top: 45px;
    }

    .p-content {
        padding-bottom: 45px;
    }

    .problem-solution-box {
        padding-top: 45px;
    }

    .problem-video-two {
        padding-bottom: 45px;
    }

    .problem-solution-image {
        padding-bottom: 45px;
    }

    .product-demonstration {
        padding-top: 45px;
        padding-bottom: 45px;
    }

    .next-project-title{
        padding-top: 45px;
    }

    .next-project-btn {
        padding-bottom: 45px;
}

}

/* responsive end */



</style> 