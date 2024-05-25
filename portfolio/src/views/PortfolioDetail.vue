<template>
    <main>
        <div v-for="portfolio in portfolioDetail" :key="portfolio" class="portfolio-item">

            <section>
                <div class="flex">
                    <div class="w-1/2 portfolio_img_container">
                        <img :src="portfolio.portfolioImg" alt="" class="portfolio_img">
                    </div>

                    <div class="w-1/2 secondary-bg flex slide-down-container">
                        <div class="flex flex-col gap-2 pl-16 pr-16 justify-center slide-down">
                            <h1 class="title dark-headline text-5xl pb-2">{{ portfolio.portfolioProduct }}</h1>

                            <div>
                                <h4 class="black-text text-xs">YEAR</h4>
                                <p>{{ portfolio.portfolioYear }}</p>
                            </div>

                            <div>
                                <h4 class="black-text text-xs">ABOUT</h4>
                                <p>{{ portfolio.portfolioDescription }}</p>
                            </div>
                            
                            <div>
                                <h4 class="black-text text-xs">STATUS</h4>
                                <p>{{ portfolio.portfolioStatus }}</p>
                            </div>

                            <div>
                                <h4 class="black-text text-xs">TECH</h4>
                                <p>{{ portfolio.portfolioTech.join(", ") }}</p>
                            </div>
                            

                            <div class="flex pt-10">
                                <RouterLink to='/'>
                                    <!-- button to go back to last page -->
                                    <button class="go-back" @click="goBack()">&larr; Go back</button>
                                </RouterLink>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </section>
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



onMounted(() => {
  window.scrollTo(0, 0)
})

</script>

<style scoped>
main {
    padding-top: 64px;
}

.portfolio_img_container {
    height: 90vh;
    overflow: hidden;
}

.portfolio_img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    display: block;
}

.go-back:hover {
    color: var(--dark-body);
}
/* first section styling of container */



/* responsive */
@media only screen and (max-width: 950px) {

}

/* responsive end */



</style> 