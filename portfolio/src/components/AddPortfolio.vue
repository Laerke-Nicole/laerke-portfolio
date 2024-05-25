<template>
  <div class="pt-20">
    <dialog ref="dialogg" id="dialogbox" >
      <h1>Added portfolio to Firebase</h1>

    </dialog>
    <div class="flex gap-4 pb-12 btn">
      <button
          id="floatyClose"
          @click="$emit('close')"
          class="btn-3"
      >
      X
      </button>
  
      <button class="btn-3" @click="firebaseAddSinglePortfolio(), snackbarAddPortfolio()">Add portfolio</button>
    </div>
    
    <div class="black-bg pt-16 pb-16 ten-percent">
      <!-- number -->
      <p class="white-text">Number</p>
      <select v-model="AddPortfolioData.portfolioNumber" class="quaternary-bg border-none text-sm w-full h-11 focus:ring-0 mb-4"> 
        <option v-for="number in number" :key="number" >
          <p>{{ number.number }}</p>
        </option>
      </select>

      <!-- category -->
      <p class="white-text">Category</p>
      <select v-model="AddPortfolioData.portfolioCategory" class="quaternary-bg border-none text-sm w-full h-11 focus:ring-0 mb-4"> 
        <option v-for="category in category" :key="category" >
          <p>{{ category.category }}</p>
        </option>
      </select>

      <input type="text" placeholder="Product" v-model="AddPortfolioData.portfolioProduct" class="quaternary-bg border-none text-sm w-full h-11 focus:ring-0 mb-4">

      <p class="white-text">Img</p>
      <input v-on:change="AddPortfolioData.portfolioImg" @change="uploadImg" alt="front page img" type="file" label="File input" width="200" height="200">

      <p class="white-text">Description</p>
      <div class="mt-2.5">
        <textarea name="message" id="message" rows="4" class="quaternary-bg border-none text-sm w-full h-18 mb-4" v-model="AddPortfolioData.portfolioDescription" />
      </div>

      <p class="white-text">Year</p>
      <input type="text" placeholder="Year" v-model="AddPortfolioData.portfolioYear" class="quaternary-bg border-none text-sm w-full h-11 focus:ring-0 mb-4">

      <!-- status -->
      <p class="white-text">Status</p>
      <select v-model="AddPortfolioData.portfolioStatus" class="quaternary-bg border-none text-sm w-full h-11 focus:ring-0 mb-4"> 
        <option v-for="status in status" :key="status" >
          <p>{{ status.status }}</p>
        </option>
      </select>

      <p class="white-text">Tech</p>
      <select multiple v-model="AddPortfolioData.portfolioTech" class="quaternary-bg border-none text-sm w-full h-auto focus:ring-0 mb-4"> 
        <option v-for="tech in tech" :key="tech" >
          <p>{{ tech.tech }}</p>
        </option>
      </select>
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