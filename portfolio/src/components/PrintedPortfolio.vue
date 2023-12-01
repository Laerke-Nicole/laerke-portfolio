<template>
    <!-- printed portfolio information in a loop -->
    <div v-for="portfolio in portfolios" :key="portfolio">
          <div class="card-content flex flex-col secondary-bg round-corner pt-12 pb-12 mb-11">
            <div class="flex flex-col ten-percent">
              
              <div class="btns-delete-edit flex gap-4 pb-8">
                <div>
                  <!-- Delete tutor button -->
                  <button class="btn black-btn mt-4" @click="firebaseDeleteSinglePortfolio(portfolio.id)">Delete portfolio</button>
                  
                </div>

                <div>
                  <!-- edit tutor button -->
                  <button class="btn black-btn mt-4" @click="firebaseUpdateSinglePortfolio(portfolio)">Edit portfolio information</button>
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
        
                <p class="white-text">Short description</p>
                <div class="mt-2.5">
                <textarea name="message" id="message" rows="4" class="white-bg border-none text-sm w-full h-18 mb-4" v-model="portfolio.portfolioShortDescription" />
                </div>

                <p class="white-text">Front page img</p>
                <div>
                    <img :src="portfolio.portfolioFrontImg" alt="tutors-profile-picture" class="h-48 mt-2.5">
                </div>

                <p class="white-text">Landing img</p>
                <div>
                    <img :src="portfolio.portfolioLandingImg" alt="tutors-profile-picture" class="h-48 mt-2.5">
                </div>

                <p class="white-text">Year</p>
                <input type="text" placeholder="Year" v-model="portfolio.portfolioYear" class="white-bg border-none text-sm w-full h-11 focus:ring-0 mb-4">
        
                <p class="white-text">Description</p>
                <div class="mt-2.5">
                <textarea name="message" id="message" rows="4" class="white-bg border-none text-sm w-full h-18 mb-4" v-model="portfolio.portfolioDescription" />
                </div>

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

                <!-- first problem -->
                <p class="white-text">First problem</p>
                <div class="mt-2.5">
                <textarea name="message" id="message" rows="4" class="white-bg border-none text-sm w-full h-18 mb-4" v-model="portfolio.portfolioFirstProblem" />
                </div>

                <p class="white-text">First solution</p>
                <div class="mt-2.5">
                <textarea name="message" id="message" rows="4" class="white-bg border-none text-sm w-full h-18 mb-4" v-model="portfolio.portfolioFirstSolution" />
                </div>

                <p class="white-text">First img one</p>
                <div>
                    <img :src="portfolio.portfolioFirstImgOne" alt="tutors-profile-picture" class="h-48 mt-2.5">
                </div>

                <p class="white-text">First img two</p>
                <div>
                    <img :src="portfolio.portfolioFirstImgTwo" alt="tutors-profile-picture" class="h-48 mt-2.5">
                </div>

                <p class="white-text">First img three</p>
                <div>
                    <img :src="portfolio.portfolioFirstImgThree" alt="tutors-profile-picture" class="h-48 mt-2.5">
                </div>

                <!-- second problem -->
                <p class="white-text">Second problem</p>
                <div class="mt-2.5">
                <textarea name="message" id="message" rows="4" class="white-bg border-none text-sm w-full h-18 mb-4" v-model="portfolio.portfolioSecondProblem" />
                </div>

                <p class="white-text">Second solution</p>
                <div class="mt-2.5">
                <textarea name="message" id="message" rows="4" class="white-bg border-none text-sm w-full h-18 mb-4" v-model="portfolio.portfolioSecondSolution" />
                </div>

                <p class="white-text">Second img one</p>
                <div>
                    <img :src="portfolio.portfolioSecondImgOne" alt="tutors-profile-picture" class="h-48 mt-2.5">
                </div>

                <p class="white-text">Second img two</p>
                <div>
                    <img :src="portfolio.portfolioSecondImgTwo" alt="tutors-profile-picture" class="h-48 mt-2.5">
                </div>

                <p class="white-text">Second img three</p>
                <div>
                    <img :src="portfolio.portfolioSecondImgThree" alt="tutors-profile-picture" class="h-48 mt-2.5">
                </div>

                <!-- third problem -->
                <p class="white-text">Third problem</p>
                <div class="mt-2.5">
                <textarea name="message" id="message" rows="4" class="white-bg border-none text-sm w-full h-18 mb-4" v-model="portfolio.portfolioThirdProblem" />
                </div>

                <p class="white-text">Third solution</p>
                <div class="mt-2.5">
                <textarea name="message" id="message" rows="4" class="white-bg border-none text-sm w-full h-18 mb-4" v-model="portfolio.portfolioThirdSolution" />
                </div>

                <p class="white-text">Third img one</p>
                <div>
                    <img :src="portfolio.portfolioThirdImgOne" alt="tutors-profile-picture" class="h-48 mt-2.5">
                </div>

                <p class="white-text">Third img two</p>
                <div>
                    <img :src="portfolio.portfolioThirdImgTwo" alt="tutors-profile-picture" class="h-48 mt-2.5">
                </div>

                <p class="white-text">Third img three</p>
                <div>
                    <img :src="portfolio.portfolioThirdImgThree" alt="tutors-profile-picture" class="h-48 mt-2.5">
                </div>

                <!-- Product images -->
                <p class="white-text">Product img one</p>
                <div>
                    <img :src="portfolio.portfolioProductImgOne" alt="tutors-profile-picture" class="h-48 mt-2.5">
                </div>

                <p class="white-text">Product img two</p>
                <div>
                    <img :src="portfolio.portfolioProductImgTwo" alt="tutors-profile-picture" class="h-48 mt-2.5">
                </div>

                <p class="white-text">Product img three</p>
                <div>
                    <img :src="portfolio.portfolioProductImgThree" alt="tutors-profile-picture" class="h-48 mt-2.5">
                </div>

                <p class="white-text">Product img four</p>
                <div>
                    <img :src="portfolio.portfolioProductImgFour" alt="tutors-profile-picture" class="h-48 mt-2.5">
                </div>

                <p class="white-text">Product img five</p>
                <div>
                    <img :src="portfolio.portfolioProductImgFive" alt="tutors-profile-picture" class="h-48 mt-2.5">
                </div>

                <p class="white-text">Product img six</p>
                <div>
                    <img :src="portfolio.portfolioProductImgSix" alt="tutors-profile-picture" class="h-48 mt-2.5">
                </div>
         
                <p class="white-text">Product img seven</p>
                <div>
                    <img :src="portfolio.portfolioProductImgSeven" alt="tutors-profile-picture" class="h-48 mt-2.5">
                </div>
      
                <p class="white-text">Product img eight</p>
                <div>
                    <img :src="portfolio.portfolioProductImgEight" alt="tutors-profile-picture" class="h-48 mt-2.5">
                </div>

                <p class="white-text">Product img nine</p>
                <div>
                    <img :src="portfolio.portfolioProductImgNine" alt="tutors-profile-picture" class="h-48 mt-2.5">
                </div>

                <p class="white-text">Product img ten</p>
                <div>
                    <img :src="portfolio.portfolioProductImgTen" alt="tutors-profile-picture" class="h-48 mt-2.5">
                </div>

                <!-- next project -->
                <p class="white-text">Next category</p>
                <input type="text" placeholder="Next project" v-model="portfolio.portfolioNextCategory" class="white-bg border-none text-sm w-full h-11 focus:ring-0 mb-4">

                <p class="white-text">Next portfolio img</p>
                <div>
                    <img :src="portfolio.portfolioNextImg" alt="tutors-profile-picture" class="h-48 mt-2.5">
                </div>

            
            













                <div class="btns-delete-edit flex gap-4">
                  <div>
                    <!-- Delete tutor button -->
                    <button class="btn black-btn mt-4" @click="firebaseDeleteSinglePortfolio(portfolio.id)">Delete portfolio</button>
                    
                  </div>

                  <div>
                    <!-- edit tutor button -->
                    <button class="btn black-btn mt-4" @click="firebaseUpdateSinglePortfolio(portfolio)">Edit portfolio information</button>
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

  .btn-edit {
    margin-top: 0;
  }
}

/* responsive ends */

</style>