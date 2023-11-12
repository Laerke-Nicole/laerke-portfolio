<template>
    <main>
            <div>
                <!-- page about each project -->
                <div v-if="portfolioDetails" class="portfolio-item">
                        <!-- show image -->
                        <div v-if="portfolioDetails.detailimg">
                            <img :src="portfolioDetails.detailimg" id="detail img">
                        </div>

                        <!-- or show video -->
                        <div v-else="portfolioDetails.detailvid">
                            <video autoplay loop muted plays-inline :src="portfolioDetails.detailvid" type="video/mp4"></video>
                        </div>
                    
                    <div class="bright-frame">
                        <div class="bright-frame-inside content">
                            <!-- further short information about project -->
                            <div class="flex justify-between top-content">
                                <h2 class="title">{{ portfolioDetails.title }}</h2>
                                <div v-if="portfolioDetails.title == 'Hjemmeside'" class="flex items-end">
                                    <div v-if="portfolioDetails.id == 'productOne'">
                                        <!-- <a href="https://kanten-web.web.app/" target="_blank"><h5 class="live-server underline">Se hjemmeside live her</h5></a> -->
                                        <a href="https://kanten-web.web.app/" target="_blank"><h5 class="live-server underline">See the website live here</h5></a>
                                    </div>  
                                    <!-- <div v-if="portfolioDetails.id == 'productTwo'">
                                        <a href="https://kanten-web.web.app/" target="_blank"><h5 class="live-server underline">Se hjemmeside live her</h5></a>
                                    </div>  -->
                                </div>
                                
                            </div>
                            
                            <hr>

                            <div class="p-content">
                                <div>
                                    <h4 class="p-date">{{ portfolioDetails.date }}</h4>
                                </div>
                                
                                <div>
                                    <!-- <h4>Beskrivelse</h4> -->
                                    <h4>Description</h4>
                                    <!-- <p class="pr-6">{{ portfolioDetails.description }} <br> Læs nedenfor om problemer og løsninger jeg fandt.</p> -->
                                    <p class="pr-6">{{ portfolioDetails.description }} <br> Read below about the problems and solutions i had.</p>
                                    <h4 class="h4Buttom">Status</h4>
                                    <p>{{ portfolioDetails.status }}</p>
                                </div>
                                
                                <div>
                                    <!-- <h4>Kategori</h4> -->
                                    <h4 class="h4Buttom">Category</h4>
                                    <p :class="portfolioDetails.category">{{ portfolioDetails.category }}</p>

                                    <h4 class="h4Buttom">Tech</h4>
                                    <p>{{ portfolioDetails.tech }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div v-else>...loading</div>
        
            </div>
    
    <!-- information about my design process -->
    <div v="item in state" :key="item" class="portfolio-item">
        <div class="secondary-frame">
            <div class="secondary-frame-inside">
                <div class="designProcess flex flex-row">
                    <div class="problem-solution-box flex flex-col w-3/6">
                        <!-- problems i had -->
                        <div>
                            <!-- <h3>.01 Problemstilling jeg havde med denne {{ portfolioDetails.title }}</h3> -->
                            <h3>.01 A problem I had with this {{ portfolioDetails.title }}</h3>
                            <p>{{ portfolioDetails.problem }}</p>
                        </div>
                        <div class="pt-5">
                            <!-- solutions to the problems -->
                            <!-- <h3>.01 Løsningen på problemet</h3> -->
                            <h3>.01 The solution to the problem</h3>
                            <p>{{ portfolioDetails.solution }}</p>
                        </div>
                    </div>
                    
                    <div class="problem-solution-image right-image flex flex-col w-3/6 justify-center gap-4">
                        <img :src="portfolioDetails.probImg1" id="image about the problem/issue">

                        <div v-if="portfolioDetails.probImg12">
                            <img :src="portfolioDetails.probImg12" alt="">
                        </div>

                        <div v-if="portfolioDetails.probImg13">
                            <img :src="portfolioDetails.probImg13" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-if="portfolioDetails.product1 || portfolioDetails.product2 || portfolioDetails.video1 || portfolioDetails.video2">
        <div v="item in state" :key="item" class="portfolio-item">
            <div class="primary-frame">
                <div class="primary-frame-inside">   
                    <div class="product-demonstration flex flex-col gap-16">

                        <!-- show image -->
                        <div v-if="portfolioDetails.product1" class="product-demonstration-box flex w-3/6">
                            <img :src="portfolioDetails.product1" id="image showing product 1">
                        </div>

                        <div v-if="portfolioDetails.product2" class="product-demonstration-box flex w-3/6">
                            <img :src="portfolioDetails.product2" id="image showing product 2">
                        </div>

                        <!-- or show video -->
                        <div v-if="portfolioDetails.video1" class="product-demonstration-box flex w-3/6">
                            <video autoplay loop muted plays-inline :src="portfolioDetails.video1" type="video/mp4"></video>
                        </div>

                        <div v-if="portfolioDetails.video2" class="product-demonstration-box flex w-3/6">
                            <video autoplay loop muted plays-inline :src="portfolioDetails.video2" type="video/mp4"></video>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
        <div v="item in state" :key="item" class="portfolio-item">
            <div class="secondary-frame">
                <div class="secondary-frame-inside">
                    <div class="designProcess psi-flip flex flex-row"> 
                        <div v-if="portfolioDetails.probImg2" class="problem-solution-image left-image flex w-3/6 items-center">
                            <img :src="portfolioDetails.probImg2" id="image about the problem/issue">
                        </div>

                        <!-- or show video -->
                        <div v-if="portfolioDetails.probVideo2" class="product-demonstration-box problem-video-two flex w-3/6 items-center justify-center">
                            <video autoplay loop muted plays-inline :src="portfolioDetails.probVideo2" type="video/mp4"></video>
                        </div>

                        <div class="problem-solution-box flex flex-col w-3/6">
                            <!-- problems i had -->
                            <div>
                                <!-- <h3>.02 Problemstilling jeg havde med denne {{ portfolioDetails.title }}</h3> -->
                                <h3>.02 A problem I had with this {{ portfolioDetails.title }}</h3>
                                <p>{{ portfolioDetails.problem2 }}</p>
                            </div>
                            <div class="pt-5">
                                <!-- solutions to the problems -->
                                <!-- <h3>.02 Løsningen på problemet</h3> -->
                                <h3>.02 The solution to the problem</h3>
                                <p>{{ portfolioDetails.solution2 }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="portfolioDetails.product3 || portfolioDetails.product4 || portfolioDetails.video3 || portfolioDetails.video4 || portfolioDetails.footerImg">
            <div v="item in state" :key="item" class="portfolio-item">
                <div class="primary-frame">
                    <div class="primary-frame-inside">   
                        <div class="product-demonstration flex flex-col gap-16">

                            <!-- show image -->
                            <div v-if="portfolioDetails.product3" class="product-demonstration-box flex w-3/6">
                                <img :src="portfolioDetails.product3" id="image showing product 3">
                            </div>

                            <div v-if="portfolioDetails.product4" class="product-demonstration-box flex w-3/6">
                                <img :src="portfolioDetails.product4" id="image showing product 4">
                            </div>

                            <!-- or show video -->
                            <div v-if="portfolioDetails.video3" class="product-demonstration-box flex w-3/6">
                                <video autoplay loop muted plays-inline :src="portfolioDetails.video3" type="video/mp4"></video>
                            </div>

                            <div v-if="portfolioDetails.video4" class="product-demonstration-box flex w-3/6">
                                <video autoplay loop muted plays-inline :src="portfolioDetails.video4" type="video/mp4"></video>
                            </div>

                            <div v-if="portfolioDetails.footerImg">
                                <img :src="portfolioDetails.footerImg" alt="footer image">
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="portfolioDetails.problem3">
            <div v="item in state" :key="item" class="portfolio-item">
                <div class="secondary-frame">
                    <div class="secondary-frame-inside">
                        <div class="designProcess flex flex-row">
                            <div class="problem-solution-box flex flex-col w-3/6">
                                <!-- problems i had -->
                                <div>
                                    <!-- <h3>.03 Problemstilling jeg havde med denne {{ portfolioDetails.title }}</h3> -->
                                    <h3>.03 A problem I had with this {{ portfolioDetails.title }}</h3>
                                    <p>{{ portfolioDetails.problem3 }}</p>
                                </div>
                                <div class="pt-5">
                                    <!-- solutions to the problems -->
                                    <!-- <h3>.03 Løsningen på problemet</h3> -->
                                    <h3>.03 The solution to the problem</h3>
                                    <p>{{ portfolioDetails.solution3 }}</p>
                                </div>
                            </div>
                            
                            <div class="problem-solution-image right-image flex w-3/6 items-center">
                                <img :src="portfolioDetails.probImg3" id="image about the problem/issue">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v="item in state" :key="item" class="portfolio-item">
            <div class="bright-frame">
                <div class="bright-frame-inside flex flex-col">
                    <div class="flex flex-col">
                        <div class="next-project-title flex flex-col">
                            <!-- <h4>Se næste projekt</h4> -->
                            <h4>See next project</h4>

                            <!-- Title of next project -->
                            <!-- page one -->
                            <div v-if="portfolioDetails.id == 'productOne'">
                                <!-- <h3>Hjemmeside</h3> -->
                                <h3>Website</h3>
                            </div>

                            <!-- page two -->
                            <div v-if="portfolioDetails.id == 'productTwo'">
                                <!-- <h3>Fotografi</h3> -->
                                <h3>Photography</h3>
                            </div>

                            <!-- page three -->
                            <div v-if="portfolioDetails.id == 'productThree'">
                                <!-- <h3>Poster</h3> -->
                                <h3>Poster</h3>
                            </div>

                            <!-- page four -->
                            <div v-if="portfolioDetails.id == 'productFour'">
                                <!-- <h3>Musik Video</h3> -->
                                <h3>Music Video</h3>
                            </div>

                            <!-- page five -->
                            <div v-if="portfolioDetails.id == 'productFive'">
                                <!-- <h3>Hjemmeside</h3> -->
                                <h3>Website</h3>
                            </div>
                        </div>
                    </div>


                    <div class="next-project-img">
                        <!-- page one -->
                        <div v-if="portfolioDetails.id == 'productOne'">
                            <RouterLink to="productTwo">
                                <img src="https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fmockup-website-2.png?alt=media&token=61b856b8-bdc8-466d-a213-1d7257421830&_gl=1*14ituqp*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY4NTg4NjYzOC40Ny4xLjE2ODU4ODY3MDUuMC4wLjA." alt="next-project-image">
                            </RouterLink>
                            
                        </div>

                        <!-- page two -->
                        <div v-if="portfolioDetails.id == 'productTwo'">
                            <RouterLink to="productThree">
                                <img src="https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fproject-3%2Fphoto-1.jpg?alt=media&token=8c87d53f-c523-4edb-8c5f-525e17465458" alt="next-project-image">
                            </RouterLink>
                        </div>

                        <!-- page three -->
                        <div v-if="portfolioDetails.id == 'productThree'">
                            <RouterLink to="productFour">
                                <img src="https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fplakat-1.jpg?alt=media&token=a4628e6b-2fe9-490f-8ad9-907787086e29&_gl=1*qclej6*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY4NTgwNTc4MC40Mi4xLjE2ODU4MDY0NDYuMC4wLjA." alt="next-project-image">
                            </RouterLink>
                        </div>

                        <!-- page four -->
                        <div v-if="portfolioDetails.id == 'productFour'">
                            <RouterLink to="productFive">
                                <img src="https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fmusic-video-thumbnail.jpg?alt=media&token=061d5bb2-e019-42c2-87b5-44dec4524a07&_gl=1*jy8sp2*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY4NTgwNTc4MC40Mi4xLjE2ODU4MDY0MTIuMC4wLjA." alt="next-project-image">
                            </RouterLink>
                        </div>

                        <!-- page five -->
                        <div v-if="portfolioDetails.id == 'productFive'">
                            <RouterLink to="productOne">
                                <img src="https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fproject-1%2Fmockup-website-1.png?alt=media&token=c10b471f-0d41-49a5-a8c3-9e6e24a1479b" alt="next-project-image">
                            </RouterLink>
                        </div>
                    </div>
                    



                    <div class="flex flex-col next-project-btn">
                        <!-- <p class="pl-6 pb-2">eller</p> -->
                        <p class="pb-2 text-base">or you can go back:</p>
                        <div>
                            <RouterLink to='/'>
                                <!-- button to go back to last page -->
                                <!-- <button id="button1" @click="goBack()">&larr; Gå tilbage</button> -->
                                <button id="button1" @click="goBack()">&larr; Go back</button>
                            </RouterLink>
                            
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
import portfoliodb from '../modules/portfoliodb'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})

const router = useRouter()

const goBack = () => {
    router.go(-1)
}

const { state } = portfoliodb()

const props = defineProps({
    id: String
})

const { id } = toRefs(props)

const portfolioDetails = computed(() => {
    return state.value.find(item => item.id == id.value)
})

</script>

<style scoped>
main {
    padding-top: 96px;
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
.top-content{
    padding: 100px 8% 12px 8%;
}
.title {
    font-size: 24px;
    font-family: "signo", sans-serif;
    font-weight: bold; 
    color: var(--black-headline);
}

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
    height: 1px;
    width: 84%;
    margin: 0 auto;
    background-color: #8a8a8a;
}

.p-content {
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
    justify-content: space-between;
    padding: 24px 8% 100px 8%;
}

.p-content h3 {
    font-weight: bold; 
    font-size: 20px;
    color: var(--black-headline);
}

.p-content h4 {
    font-size: 18px;
    font-weight: 500;
    color: var(--black-headline);
}

.h4Buttom {
    padding-top: 12px;

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
    padding: 100px 8%;
}

.problem-solution-box h3 {
    color: var(--white-headline);
    padding-bottom: 6px;
    font-style: normal;
    font-weight: bold; 
    font-size: 20px;
}

.problem-solution-box p {
    color: var(--white-text);
    padding-bottom: 16px;
}

.right-image {
    padding: 100px 8% 100px 0;
}

.left-image {
    padding: 100px 0 100px 8%;
}

.problem-video-two {
    padding: 0 0 0 8%;
}

/* design process end */


/* product demonstration */
.product-demonstration {
    padding: 100px 8%;
}
.product-demonstration-box {
    margin: 0 auto;
    width: 100%;
}


/* next project */
.next-project-title{
    padding: 100px 8% 18px 8%;
}

.next-project-title h4 {
    font-size: 18px;
    font-family: "condor", sans-serif;
}

.next-project-title h3 {
    font-size: 28px;
    font-weight: bold;
    line-height: 1;
}

.next-project-img{
    padding: 18px 8%;
}

.next-project-img img {
    max-height: 600px;
}

.next-project-img img:hover {
    box-shadow:  9px 9px 18px #b5b5b5,
             -9px -9px 18px #ffffff;
}

.next-project-btn {
    padding: 18px 8% 60px 8%;
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
        padding-right: 8%;
        padding-bottom: 60px;
        padding-left: 8%;
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
        padding: 24px 8% 60px 8%;
    }

    .psi-flip {
        flex-direction: column-reverse;
    }

    .problem-solution-image {
        width: 100%;
        padding: 24px 8% 60px 8%;
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