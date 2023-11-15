<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref } from 'vue'
import { auth } from './firebase.js'
import { signOut, onAuthStateChanged } from 'firebase/auth'
import router from './router'

let isLoggedIn = ref(false)

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true
      console.log("User logged in", auth.currentUser)
    } else {
      isLoggedIn.value = false
      console.log("User logged out", auth.currentUser)
    }
  })
})

let logOut = () => {
  signOut(auth)
    .then(() => {
      console.log("User logged out", auth.currentUser)
      router.push('/login')
    })
    .catch((error) => {
      console.log(error)
    })
}

import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/vue'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'

const mobileMenuOpen = ref(false)


// contact logos
let linkedin = 'https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/skills-logo%2Flinkedin.svg?alt=media&token=38e8195e-1a01-41a5-b2c2-7b704b46821d';
let mail = 'https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/skills-logo%2Fmail.svg?alt=media&token=e9cd44f2-459e-4fa6-a0d7-08c37738d86e';
let github = 'https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/skills-logo%2Fgithub.svg?alt=media&token=bba36aab-3677-41e3-8b66-b56b05599eb8';

</script>


<template>
  <header>
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">

      <!-- logo in top left corner -->
      <div class="flex lg:flex-1">
        <RouterLink to='/'>
          <div class="flex gap-4 justify-center items-center">
            <img class="h-12 w-auto" src="https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/logos%2Flogo-dark.svg?alt=media&token=ba702079-f71d-43f3-9c5e-ee67049d4bbc&_gl=1*xvdzn3*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY4NTgwNTc4MC40Mi4xLjE2ODU4MDYwMDEuMC4wLjA." alt="my logo" />
            <p class="">Lærke Nielsen</p>
          </div>
        </RouterLink>
      </div>

      <!-- hamburgerbar icon -->
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <!-- links in navigation -->
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <RouterLink to="/about" class="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50">About me</RouterLink>
        <RouterLink to="/portfolio" class="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50">Work</RouterLink>
        <!-- <RouterLink to="/contact" class="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50">Kontakt</RouterLink>   -->
        <RouterLink to="/contact" class="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50">Contact</RouterLink>  
        <a href="https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/cv%2Fenglish-version%2FCV_L%C3%A6rke_Nicole_Nielsen.pdf?alt=media&token=15292116-362b-41ec-b32d-e426d373c57e" target="_blank" class="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50">CV <span aria-hidden="true">&nearr;</span></a>
        <!-- <RouterLink to="/about" class="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50">Om mig</RouterLink> -->
        <div v-if="isLoggedIn"><RouterLink to="/" class="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50">Admin</RouterLink></div>
        <div v-if="isLoggedIn"><RouterLink to="/" @click="logOut" class="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50">Log out</RouterLink></div>
      </PopoverGroup>
    </nav>

    <!-- mobile navigation -->
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel class="mobilenav fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">

        <!-- top part with Kantens logo -->
        <div class="flex items-center justify-between">

          <!-- logo -->
          <RouterLink to='/' class="logo-hamburgerbar -m-1.5 p-1.5">
            <img class="h-8 w-auto" src="https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/logos%2Flogo-dark.svg?alt=media&token=ba702079-f71d-43f3-9c5e-ee67049d4bbc&_gl=1*xvdzn3*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY4NTgwNTc4MC40Mi4xLjE2ODU4MDYwMDEuMC4wLjA." alt="my logo" />
          </RouterLink>

          <!-- x button to close menu -->
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <!-- links in hamburger menu -->
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <RouterLink to="/about" class="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50">About me</RouterLink>
              <RouterLink to="/portfolio" class="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50">Work</RouterLink>
              <!-- <RouterLink to="/contact" class="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50">Kontakt</RouterLink> -->
              <RouterLink to="/contact" class="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50">Contact</RouterLink>
              <a href="https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/cv%2Fenglish-version%2FCV_L%C3%A6rke_Nicole_Nielsen.pdf?alt=media&token=15292116-362b-41ec-b32d-e426d373c57e" target="_blank" class="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50">CV <span aria-hidden="true">&nearr;</span></a>
              <!-- <RouterLink to="/about" class="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50">Om mig</RouterLink> -->
              <div v-if="isLoggedIn"><RouterLink to="/" @click="logOut" class="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50">Log out</RouterLink></div>
            </div>
            <!-- <div class="py-6">
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base leading-7 text-gray-900 hover:bg-gray-50">English</a>
            </div> -->
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>

 
  <RouterView />


  
  <!-- footer -->
  <div class="primary-frame">
    <div class="primary-frame-inside">
      <footer class="ten-percent">
        <!-- <h1>Lad os arbejde sammen!</h1> -->
        <h4 class="white-text text-center text-6xl pt-16 pb-8">Thank you!</h4>
        <RouterLink to="/contact">
            <!-- <button id="button1" class="button">Kontakt mig</button> -->
            <button class="btn button">Contact me</button>
        </RouterLink>

        <div class="pt-4 pb-16">
          <ul class="flex justify-around white-headline">      
            
              <RouterLink to="//www.linkedin.com/in/laerke-nicole-nielsen/?locale=en_US" target="_blank">
                <div class="flex gap-2">
                  <img :src="linkedin" alt="linkedin" class="h-6">
                  <li>/laerke-nicole</li>
                </div> 
              </RouterLink>
               
              
              <RouterLink to="//github.com/Laerke-Nicole" target="_blank">
                <div class="flex gap-2">
                  <img :src="github" alt="github" class="h-6">
                  <li>/Laerke-Nicole</li>
                </div>
              </RouterLink>
              
              <div class="flex gap-2">
                <img :src="mail" alt="mail" class="h-6">
                <div>laenie01@easv365.dk</div>
              </div>
            </ul>
        </div>

        <!-- links in footer -->
        <div>
            <ul class="flex flex-col white-text justify-around">
              <!-- <RouterLink to="/contact"><li>Kontakt</li></RouterLink> -->
              <RouterLink to="/about"><li>About me</li></RouterLink>
              <RouterLink to="/"><li>Work</li></RouterLink>
              <RouterLink to="/contact"><li>Contact</li></RouterLink>
              <a href="https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/cv%2Fenglish-version%2FCV_L%C3%A6rke_Nicole_Nielsen.pdf?alt=media&token=15292116-362b-41ec-b32d-e426d373c57e" target="_blank"><li>CV &nearr;</li></a>
              <!-- <RouterLink to="/about"><li>Om mig</li></RouterLink> -->
              
            </ul>
        </div>

        <!-- my mail in footer -->
        <div class="mail">
          <h4 class="white-headline">Lærke Nicole Nielsen</h4>
          <hr>
        </div>
      </footer>
    </div>
  </div>
  
</template>


<style scoped>

header {
  background-color: var(--background-color);
  position: fixed;
  z-index: 1000;
  width: 100%;
}

/* active stuff */

header a {
  color: var(--black-text);
  font-weight: 500px;
}

header a:hover {
  color: var(--white-text);
  background-color: var(--tertiary-color);
  border-radius: 0;
}

header img:hover {
  background-color: var(--background-color);
}

nav a.router-link-exact-active  {
  color: var(--tertiary-color);
  border-radius: 0;
  font-weight: bold;
  text-decoration: underline;
}

nav a.router-link-exact-active:hover  {
  color: var(--white-text);
}

.mobilenav {
  background-color: var(--background-color);
  z-index: 1000;
}

.logo-hamburgerbar:hover {
  background-color: transparent !important;
}

.mobilenav a {
  color: var(--black-text);
}

.mobilenav a:hover {
  background-color: var(--tertiary-color);
  color: var(--white-text);
  border-radius: 0;
}

/* overlay block for closing */
.helper-overlay { 
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.764);
  opacity: 1;
  transition: var(--transition);
  cursor: pointer;
}

/* footer */
footer {
  background-color: var(--primary-color);
  padding-bottom: 60px;
}

footer .footerMyName h2 {
  color: var(--white-headline);
  font-style: normal;
  font-weight: 400; 
  display: flex;
  flex-direction: column;
}

footer .button {
  display: flex;
  align-items: center;  
  justify-content: center;
  margin: 0 auto 45px auto;
}

footer ul {
  padding: 0;
}

footer li {
  transition: 0.3s;
}

footer li:hover {
  color: var(--primary-hover);
}

.mail {
  display: flex;
  color: var(--white-headline);
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  gap: 18px;
  justify-content: center;
  padding-top: 18px;
}

.mail hr {
  display: block;
  border-width: 0;
  height: 1px;
  width: 62%;
  background-color: var(--white-headline);
  align-self: center;
}
/* footer end */



/* responsive */
@media only screen and (max-width: 950px) {
  footer {
    padding-left: 8%;
  }

  footer h1 {
    text-align: left;
    padding-bottom: 6px;
  }

  footer .button {
    margin: 0;
    margin-bottom: 24px;
  }

  .footerContent {
    flex-direction: column;
    text-align: flex-start;
  }

  .footerContent ul {
    gap: 6px;
  }

  .footerMyName {
    display: none;
  }

  footer li {
    font-size: 24px;
  }

  .mail {
    justify-content: flex-start;
  }
}

@media only screen and (max-width: 800px) {
  footer ul {
    padding: 12px 0;
  }

  footer li {
    font-size: 20px;
  }

  .mail {
    font-size: 16px;
  }

  .mail hr {
    width: 52%;
  }
}

@media only screen and (max-width: 580px) {
  footer h1 {
    font-size: 24px;
  }
}

@media only screen and (max-width: 500px) {
  .mail hr {
    width: 48%;
  }
}

@media only screen and (max-width: 450px) {
  .mail hr {
    width: 40%;
  }
}

@media only screen and (max-width: 390px) {
  .mail hr {
    width: 35%;
  }
}
/* responsive end */
</style>