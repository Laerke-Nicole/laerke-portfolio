<template>
    <!-- printed portfolio information in a loop -->
    <div v-for="portfolio in portfolios" :key="portfolio">
          <div class="card-content flex flex-col secondary-bg pt-12 pb-12 mb-11">
            <div class="flex flex-col ten-percent">
              
              <!-- inputs to edit portfolio information where you can edit -->
              <div>
                <input type="text" placeholder="Number" v-model="portfolio.portfolioNumber" class="white-bg border-none text-sm w-full h-11 focus:ring-0 mb-4">
  
                <input type="text" placeholder="Category" v-model="portfolio.portfolioCategory" class="white-bg border-none text-sm w-full h-11 focus:ring-0 mb-4">
        
                <input type="text" placeholder="Product" v-model="portfolio.portfolioProduct" class="white-bg border-none text-sm w-full h-11 focus:ring-0 mb-4">
        
                <p class="black-text">Short description</p>
                <div class="mt-2.5">
                <textarea name="message" id="message" rows="4" class="white-bg border-none text-sm w-full h-18 mb-4" v-model="portfolio.portfolioShortDescription" />
                </div>

                <p>Front page img</p>
                <div>
                    <img :src="portfolio.portfolioFrontImg" alt="tutors-profile-picture" class="h-48 mt-2.5">
                </div>

                <p>Landing img</p>
                <div>
                    <img :src="portfolio.portfolioLandingImg" alt="tutors-profile-picture" class="h-48 mt-2.5">
                </div>

                <input type="text" placeholder="Year" v-model="portfolio.portfolioYear" class="white-bg border-none text-sm w-full h-11 focus:ring-0 mb-4">
        
                <p class="black-text">Description</p>
                <div class="mt-2.5">
                <textarea name="message" id="message" rows="4" class="white-bg border-none text-sm w-full h-18 mb-4" v-model="portfolio.portfolioDescription" />
                </div>

                <input type="text" placeholder="Status" v-model="portfolio.portfolioStatus" class="white-bg border-none text-sm w-full h-11 focus:ring-0 mb-4">
        
                <input type="text" placeholder="Tech" v-model="portfolio.portfolioTech" class="white-bg border-none text-sm w-full h-11 focus:ring-0 mb-4">
        

                <!-- first problem -->
                <p class="black-text">First problem</p>
                <div class="mt-2.5">
                <textarea name="message" id="message" rows="4" class="white-bg border-none text-sm w-full h-18 mb-4" v-model="portfolio.portfolioFirstProblem" />
                </div>

                <p class="black-text">First solution</p>
                <div class="mt-2.5">
                <textarea name="message" id="message" rows="4" class="white-bg border-none text-sm w-full h-18 mb-4" v-model="portfolio.portfolioFirstSolution" />
                </div>

                <p>First img one</p>
                <div>
                    <img :src="portfolio.portfolioFirstImgOne" alt="tutors-profile-picture" class="h-48 mt-2.5">
                </div>

                <p>First img two</p>
                <div>
                    <img :src="portfolio.portfolioFirstImgTwo" alt="tutors-profile-picture" class="h-48 mt-2.5">
                </div>

                <p>First img three</p>
                <div>
                    <img :src="portfolio.portfolioFirstImgThree" alt="tutors-profile-picture" class="h-48 mt-2.5">
                </div>

                <!-- second problem -->
                <p class="black-text">Second problem</p>
                <div class="mt-2.5">
                <textarea name="message" id="message" rows="4" class="white-bg border-none text-sm w-full h-18 mb-4" v-model="portfolio.portfolioSecondProblem" />
                </div>

                <p class="black-text">Second solution</p>
                <div class="mt-2.5">
                <textarea name="message" id="message" rows="4" class="white-bg border-none text-sm w-full h-18 mb-4" v-model="portfolio.portfolioSecondSolution" />
                </div>

                <p>Second img one</p>
                <div>
                    <img :src="portfolio.portfolioSecondImgOne" alt="tutors-profile-picture" class="h-48 mt-2.5">
                </div>

                <p>Second img two</p>
                <div>
                    <img :src="portfolio.portfolioSecondImgTwo" alt="tutors-profile-picture" class="h-48 mt-2.5">
                </div>

                <p>Second img three</p>
                <div>
                    <img :src="portfolio.portfolioSecondImgThree" alt="tutors-profile-picture" class="h-48 mt-2.5">
                </div>

                <!-- third problem -->
                <p class="black-text">Third problem</p>
                <div class="mt-2.5">
                <textarea name="message" id="message" rows="4" class="white-bg border-none text-sm w-full h-18 mb-4" v-model="portfolio.portfolioThirdProblem" />
                </div>

                <p class="black-text">Third solution</p>
                <div class="mt-2.5">
                <textarea name="message" id="message" rows="4" class="white-bg border-none text-sm w-full h-18 mb-4" v-model="portfolio.portfolioThirdSolution" />
                </div>

                <p>Third img one</p>
                <div>
                    <img :src="portfolio.portfolioThirdImgOne" alt="tutors-profile-picture" class="h-48 mt-2.5">
                </div>

                <p>Third img two</p>
                <div>
                    <img :src="portfolio.portfolioThirdImgTwo" alt="tutors-profile-picture" class="h-48 mt-2.5">
                </div>

                <p>Third img three</p>
                <div>
                    <img :src="portfolio.portfolioThirdImgThree" alt="tutors-profile-picture" class="h-48 mt-2.5">
                </div>

                <!-- Product images -->
                <p>Product img one</p>
                <div>
                    <img :src="portfolio.portfolioProductImgOne" alt="tutors-profile-picture" class="h-48 mt-2.5">
                </div>

                <p>Product img two</p>
                <div>
                    <img :src="portfolio.portfolioProductImgTwo" alt="tutors-profile-picture" class="h-48 mt-2.5">
                </div>

                <p>Product img three</p>
                <div>
                    <img :src="portfolio.portfolioProductImgThree" alt="tutors-profile-picture" class="h-48 mt-2.5">
                </div>

                <p>Product img four</p>
                <div>
                    <img :src="portfolio.portfolioProductImgFour" alt="tutors-profile-picture" class="h-48 mt-2.5">
                </div>

                <p>Product img five</p>
                <div>
                    <img :src="portfolio.portfolioProductImgFive" alt="tutors-profile-picture" class="h-48 mt-2.5">
                </div>

                <p>Product img six</p>
                <div>
                    <img :src="portfolio.portfolioProductImgSix" alt="tutors-profile-picture" class="h-48 mt-2.5">
                </div>
         
                <p>Product img seven</p>
                <div>
                    <img :src="portfolio.portfolioProductImgSeven" alt="tutors-profile-picture" class="h-48 mt-2.5">
                </div>
      
                <p>Product img eight</p>
                <div>
                    <img :src="portfolio.portfolioProductImgEight" alt="tutors-profile-picture" class="h-48 mt-2.5">
                </div>

                <p>Product img nine</p>
                <div>
                    <img :src="portfolio.portfolioProductImgNine" alt="tutors-profile-picture" class="h-48 mt-2.5">
                </div>

                <p>Product img ten</p>
                <div>
                    <img :src="portfolio.portfolioProductImgTen" alt="tutors-profile-picture" class="h-48 mt-2.5">
                </div>

                <!-- next project -->
                <input type="text" placeholder="Next project" v-model="portfolio.portfolioNextCategory" class="white-bg border-none text-sm w-full h-11 focus:ring-0 mb-4">

                <p>Next portfolio img</p>
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