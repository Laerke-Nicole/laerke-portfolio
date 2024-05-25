<template>
    <!-- printed portfolio information in a loop -->
    <div v-for="portfolio in portfolios" :key="portfolio">
          <div class="card-content flex flex-col primary-bg round-corner pt-12 pb-12 mb-11">
            <div class="flex flex-col ten-percent">
              
              <div class="btns-delete-edit flex gap-4 pb-8">
                <div>
                  <!-- Delete tutor button -->
                  <button class="btn-3 black-btn mt-4" @click="firebaseDeleteSinglePortfolio(portfolio.id)">Delete portfolio</button>
                  
                </div>

                <div>
                  <!-- edit tutor button -->
                  <button class="btn-3 black-btn mt-4" @click="firebaseUpdateSinglePortfolio(portfolio)">Edit information</button>
                </div>
              </div>

              <!-- inputs to edit portfolio information where you can edit -->
              <div>
                <p class="white-text">Number</p>
                <input type="text" placeholder="Number" v-model="portfolio.portfolioNumber" class="white-bg border-none text-sm w-full h-11 focus:ring-0 mb-4">
  
                <p class="white-text">Category</p>
                <input type="text" placeholder="Category" v-model="portfolio.portfolioCategory" class="white-bg border-none text-sm w-full h-11 focus:ring-0 mb-4">
        
                <p class="white-text">Product</p>
                <input type="text" placeholder="Product" v-model="portfolio.portfolioProduct" class="white-bg border-none text-sm w-full h-11 focus:ring-0 mb-4">

                <p class="white-text">Img</p>
                <div>
                    <img :src="portfolio.portfolioImg" alt="tutors-profile-picture" class="h-48 mt-2.5">
                </div>

                <p class="white-text">Description</p>
                <div class="mt-2.5">
                <textarea name="message" id="message" rows="4" class="white-bg border-none text-sm w-full h-18 mb-4" v-model="portfolio.portfolioDescription" />
                </div>
                
                <p class="white-text">Year</p>
                <input type="text" placeholder="Year" v-model="portfolio.portfolioYear" class="white-bg border-none text-sm w-full h-11 focus:ring-0 mb-4">

                <p class="white-text">Status</p>
                <select v-model="portfolio.portfolioStatus" class="white-bg round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4"> 
                  <option v-for="status in status" :key="status" >
                    <p>{{ status.status }}</p>
                  </option>
                </select>

                <p class="white-text">Tech</p>
                <select v-model="portfolio.portfolioTech" multiple class="white-bg round-corner border-none text-sm w-full h-auto focus:ring-0 mb-4"> 
                  <option v-for="tech in tech" :key="tech" >
                    <p>{{ tech.tech }}</p>
                  </option>
                </select>

                <div class="btns-delete-edit flex gap-4">
                  <div>
                    <!-- Delete tutor button -->
                    <button class="btn-3 mt-4" @click="firebaseDeleteSinglePortfolio(portfolio.id)">Delete portfolio</button>
                    
                  </div>

                  <div>
                    <!-- edit tutor button -->
                    <button class="btn-3 mt-4" @click="firebaseUpdateSinglePortfolio(portfolio)">Edit information</button>
                  </div>
                </div>
                
              </div>
              
            </div>
          </div>
        </div>
</template>

<script setup>
import { onMounted } from 'vue'
import usePortfolios from '../modules/usePortfolios.js'
import status from '../modules/status'
import tech from '../modules/tech'



// create file and only grab data we need... add everytime u want to add a function like add button that deletes items
const { portfolios, 
  getPortfoliosData, 
  firebaseDeleteSinglePortfolio, 
  firebaseUpdateSinglePortfolio,
} = usePortfolios();


onMounted(() => {
  getPortfoliosData();
})



// scroll to top when opening page
onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<style scoped>
/* responsive design */
@media only screen and (max-width: 950px) {
  .btns-delete-edit {
    flex-direction: column;
  }

}

/* responsive ends */

</style>