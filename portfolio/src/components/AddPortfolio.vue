<template>
  <div class="pt-20">
    <dialog ref="dialogg" id="dialogbox" >
      <h1>Added portfolio to Firebase</h1>

    </dialog>
    <div class="flex gap-4 pb-12 btn">
      <button
          id="floatyClose"
          @click="$emit('close')"
          class="black-btn"
      >
      Exit
      </button>
  
      <button class="black-btn" @click="firebaseAddSinglePortfolio(), snackbarAddPortfolio()">Add portfolio</button>
    </div>
    
    <div class="black-bg pt-16 pb-16 ten-percent">
      <!-- number -->
      <p class="white-text">Number</p>
      <select v-model="AddPortfolioData.portfolioNumber" class="white-bg round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4"> 
        <option v-for="number in number" :key="number" >
          <p>{{ number.number }}</p>
        </option>
      </select>

      <!-- category -->
      <p class="white-text">Category</p>
      <select v-model="AddPortfolioData.portfolioCategory" class="white-bg round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4"> 
        <option v-for="category in category" :key="category" >
          <p>{{ category.category }}</p>
        </option>
      </select>

      <input type="text" placeholder="Product" v-model="AddPortfolioData.portfolioProduct" class="white-bg round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4">

      <p class="white-text">Short description</p>
      <div class="mt-2.5">
        <textarea name="message" id="message" rows="4" class="white-bg round-corner border-none text-sm w-full h-18 mb-4" v-model="AddPortfolioData.portfolioShortDescription" />
      </div>

      <p class="white-text">Front page img</p>
      <input v-on:change="AddPortfolioData.portfolioFrontImg" @change="uploadImg" alt="front page img" type="file" label="File input" width="200" height="200">

      <p class="white-text">Landing img</p>
      <input v-on:change="AddPortfolioData.portfolioLandingImg" @change="uploadImg" alt="landing img" type="file" label="File input" width="200" height="200">

      <p class="white-text">Year</p>
      <input type="text" placeholder="Year" v-model="AddPortfolioData.portfolioYear" class="white-bg round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4">

      <p class="white-text">Description</p>
      <div class="mt-2.5">
        <textarea name="message" id="message" rows="4" class="white-bg round-corner border-none text-sm w-full h-18 mb-4" v-model="AddPortfolioData.portfolioDescription" />
      </div>

      <!-- status -->
      <p class="white-text">Status</p>
      <select v-model="AddPortfolioData.portfolioStatus" class="white-bg round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4"> 
        <option v-for="status in status" :key="status" >
          <p>{{ status.status }}</p>
        </option>
      </select>

      <p class="white-text">Tech</p>
      <select multiple v-model="AddPortfolioData.portfolioTech" class="white-bg round-corner border-none text-sm w-full h-auto focus:ring-0 mb-4"> 
        <option v-for="tech in tech" :key="tech" >
          <p>{{ tech.tech }}</p>
        </option>
      </select>

      <!-- first problem -->
      <p class="white-text">First problem</p>
      <div class="mt-2.5">
        <textarea name="message" id="message" rows="4" class="white-bg round-corner border-none text-sm w-full h-18 mb-4" v-model="AddPortfolioData.portfolioFirstProblem" />
      </div>

      <p class="white-text">First solution</p>
      <div class="mt-2.5">
        <textarea name="message" id="message" rows="4" class="white-bg round-corner border-none text-sm w-full h-18 mb-4" v-model="AddPortfolioData.portfolioFirstSolution" />
      </div>

      <p class="white-text">First img one</p>
      <input v-on:change="AddPortfolioData.portfolioFirstImgOne" @change="uploadImg" alt="first img one" type="file" label="File input" width="200" height="200">

      <p class="white-text">First img two</p>
      <input v-on:change="AddPortfolioData.portfolioFirstImgTwo" @change="uploadImg" alt="first img two" type="file" label="File input" width="200" height="200">

      <p class="white-text">First img three</p>
      <input v-on:change="AddPortfolioData.portfolioFirstImgThree" @change="uploadImg" alt="first img three" type="file" label="File input" width="200" height="200">


      <!-- second problem -->
      <p class="white-text">Second problem</p>
      <div class="mt-2.5">
        <textarea name="message" id="message" rows="4" class="white-bg round-corner border-none text-sm w-full h-18 mb-4" v-model="AddPortfolioData.portfolioSecondProblem" />
      </div>

      <p class="white-text">Second solution</p>
      <div class="mt-2.5">
        <textarea name="message" id="message" rows="4" class="white-bg round-corner border-none text-sm w-full h-18 mb-4" v-model="AddPortfolioData.portfolioSecondSolution" />
      </div>

      <p class="white-text">Second img one</p>
      <input v-on:change="AddPortfolioData.portfolioSecondImgOne" @change="uploadImg" alt="second img one" type="file" label="File input" width="200" height="200">

      <p class="white-text">Second img two</p>
      <input v-on:change="AddPortfolioData.portfolioSecondImgTwo" @change="uploadImg" alt="second img two" type="file" label="File input" width="200" height="200">

      <p class="white-text">Second img three</p>
      <input v-on:change="AddPortfolioData.portfolioSecondImgThree" @change="uploadImg" alt="second img three" type="file" label="File input" width="200" height="200">

      <!-- third problem -->
      <p class="white-text">Third problem</p>
      <div class="mt-2.5">
        <textarea name="message" id="message" rows="4" class="white-bg round-corner border-none text-sm w-full h-18 mb-4" v-model="AddPortfolioData.portfolioThirdProblem" />
      </div>

      <p class="white-text">Third solution</p>
      <div class="mt-2.5">
        <textarea name="message" id="message" rows="4" class="white-bg round-corner border-none text-sm w-full h-18 mb-4" v-model="AddPortfolioData.portfolioThirdSolution" />
      </div>

      <p class="white-text">Third img one</p>
      <input v-on:change="AddPortfolioData.portfolioThirdImgOne" @change="uploadImg" alt="third img one" type="file" label="File input" width="200" height="200">

      <p class="white-text">Third img two</p>
      <input v-on:change="AddPortfolioData.portfolioThirdImgTwo" @change="uploadImg" alt="third img two" type="file" label="File input" width="200" height="200">

      <p class="white-text">Third img three</p>
      <input v-on:change="AddPortfolioData.portfolioThirdImgThree" @change="uploadImg" alt="third img three" type="file" label="File input" width="200" height="200">

      <!-- Product images -->
      <p class="white-text">Product img one</p>
      <input v-on:change="AddPortfolioData.portfolioProductImgOne" @change="uploadImg" alt="product img one" type="file" label="File input" width="200" height="200">

      <p class="white-text">Product img two</p>
      <input v-on:change="AddPortfolioData.portfolioProductImgTwo" @change="uploadImg" alt="product img two" type="file" label="File input" width="200" height="200">

      <p class="white-text">Product img three</p>
      <input v-on:change="AddPortfolioData.portfolioProductImgThree" @change="uploadImg" alt="product img three" type="file" label="File input" width="200" height="200">

      <p class="white-text">Product img four</p>
      <input v-on:change="AddPortfolioData.portfolioProductImgFour" @change="uploadImg" alt="product img four" type="file" label="File input" width="200" height="200">

      <p class="white-text">Product img five</p>
      <input v-on:change="AddPortfolioData.portfolioProductImgFive" @change="uploadImg" alt="product img five" type="file" label="File input" width="200" height="200">

      <p class="white-text">Product img six</p>
      <input v-on:change="AddPortfolioData.portfolioProductImgSix" @change="uploadImg" alt="product img six" type="file" label="File input" width="200" height="200">

      <p class="white-text">Product img seven</p>
      <input v-on:change="AddPortfolioData.portfolioProductImgSeven" @change="uploadImg" alt="product img seven" type="file" label="File input" width="200" height="200">

      <p class="white-text">Product img eight</p>
      <input v-on:change="AddPortfolioData.portfolioProductImgEight" @change="uploadImg" alt="product img eight" type="file" label="File input" width="200" height="200">

      <p class="white-text">Product img nine</p>
      <input v-on:change="AddPortfolioData.portfolioProductImgNine" @change="uploadImg" alt="product img nine" type="file" label="File input" width="200" height="200">

      <p class="white-text">Product img ten</p>
      <input v-on:change="AddPortfolioData.portfolioProductImgTen" @change="uploadImg" alt="product img ten" type="file" label="File input" width="200" height="200">

      <!-- next project -->
      <p class="white-text">Next project</p>
      <input type="text" placeholder="Next project" v-model="AddPortfolioData.portfolioNextCategory" class="white-bg round-corner border-none text-sm w-full h-11 focus:ring-0 mb-4">

      <p class="white-text">Next portfolio img</p>
      <input v-on:change="AddPortfolioData.portfolioNextImg" @change="uploadImg" alt="next img" type="file" label="File input" width="200" height="200">

      
    </div>

  </div>
</template>
    
<script setup>
import usePortfolios from '../modules/usePortfolios';
import snackbarAddPortfolio from '../modules/snackbarAddPortfolio.js';
import category from '../modules/portfolioCategory.js';
import status from '../modules/status.js';
import tech from '../modules/tech.js';
import number from '../modules/number.js';

  // create file and only grab data we need
  const { 
    firebaseAddSinglePortfolio,
    AddPortfolioData,
    uploadImg,
  } = usePortfolios();


</script>
    
<style scoped>

</style>