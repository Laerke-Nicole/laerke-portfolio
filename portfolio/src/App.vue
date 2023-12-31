<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref } from 'vue'
import { auth } from './firebase.js'
import { signOut, onAuthStateChanged } from 'firebase/auth'
import router from './router'
import ContactMe from './components/ContactMe.vue'
import star from './modules/star'

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


// modal button open and close
const isOpen = ref(false);



// contact logos
let linkedin = 'https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/skills-logo%2Flinkedin.svg?alt=media&token=38e8195e-1a01-41a5-b2c2-7b704b46821d';
let mail = 'https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/skills-logo%2Fmail.svg?alt=media&token=e9cd44f2-459e-4fa6-a0d7-08c37738d86e';
let github = 'https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/skills-logo%2Fgithub.svg?alt=media&token=bba36aab-3677-41e3-8b66-b56b05599eb8';


// line that follows scroll
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

</script>


<template>
  <header>
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8" aria-label="Global">

      <!-- logo in top left corner -->
      <div class="flex lg:flex-1">
        <RouterLink to='/'>
          <div class="flex gap-4 justify-center items-center">
            <img class="h-12 w-auto" :src="star" alt="my logo" />
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
        <RouterLink to="/about" class="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50"><p>ABOUT ME</p></RouterLink>
        <RouterLink to="/portfolio" class="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50"><p>WORK</p></RouterLink>
        
        <div>
          <button @click="isOpen = true" class="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50"><p>CONTACT ME</p></button>
            <teleport to="body">
              <div class="modal" v-if="isOpen">
                <ContactMe @close="isOpen = false">

                </ContactMe>
              </div>
            </teleport>
        </div>

        <a href="https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/cv%2Fenglish-version%2FCV_L%C3%A6rke_Nicole_Nielsen.pdf?alt=media&token=15292116-362b-41ec-b32d-e426d373c57e" target="_blank" class="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50"><p>CV <span aria-hidden="true">&nearr;</span></p></a>
        <!-- <RouterLink to="/about" class="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50">Om mig</RouterLink> -->
        <div v-if="isLoggedIn"><RouterLink to="/navguard" class="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50"><p>ADMIN</p></RouterLink></div>
        <div v-if="isLoggedIn"><RouterLink to="/" @click="logOut" class="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50"><p>LOG OUT</p></RouterLink></div>
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
              <RouterLink to="/about" class="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50" @click="mobileMenuOpen = false">ABOUT ME</RouterLink>
              <RouterLink to="/portfolio" class="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50" @click="mobileMenuOpen = false">WORK</RouterLink>
              <button @click="isOpen = true, mobileMenuOpen = false" class="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50">CONTACT ME</button>
              <teleport to="body">
                <div class="modal" v-if="isOpen">
                  <ContactMe @close="isOpen = false">

                  </ContactMe>
                </div>
              </teleport>
              
              <a href="https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/cv%2Fenglish-version%2FCV_L%C3%A6rke_Nicole_Nielsen.pdf?alt=media&token=15292116-362b-41ec-b32d-e426d373c57e" target="_blank" class="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50">CV <span aria-hidden="true">&nearr;</span></a>
              <div v-if="isLoggedIn"><RouterLink to="/navguard" class="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50">ADMIN</RouterLink></div>
              <div v-if="isLoggedIn"><RouterLink to="/" @click="logOut" class="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50">LOG OUT</RouterLink></div>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>

    <!-- line that follows scrolling -->
    <div class="progress-container">
      <div class="progress-bar" id="myBar"></div>
    </div>
  </header>

 
  <RouterView />


  
  <!-- footer -->
  <div class="primary-frame">
    <div class="primary-frame-inside">
      <footer>
        <div class="flex justify-start pt-4 pl-4">
            <img :src="star" alt="star" class="h-8">
          </div>
        <div class="ten-percent">
          <!-- <h1>Lad os arbejde sammen!</h1> -->
          <h4 class="red-headline text-center text-6xl pb-8">THANK YOU!</h4>
          <div>
          <button @click="isOpen = true" class="btn-second button">Contact me</button>
            <teleport to="body">
              <div class="modal" v-if="isOpen">
                <ContactMe @close="isOpen = false">

                </ContactMe>
              </div>
            </teleport>
          </div>

          <!-- links in footer -->
          <div>
              <ul class="flex white-text justify-around">
                <!-- <RouterLink to="/contact"><li>Kontakt</li></RouterLink> -->
                <RouterLink to="/about"><li>About me</li></RouterLink>
                <RouterLink to="/"><li>Work</li></RouterLink>
                <div>
                  <button @click="isOpen = true"><li>Contact me</li></button>
                    <teleport to="body">
                      <div class="modal" v-if="isOpen">
                        <ContactMe @close="isOpen = false">

                        </ContactMe>
                      </div>
                    </teleport>
                  </div>
                <a href="https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/cv%2Fenglish-version%2FCV_L%C3%A6rke_Nicole_Nielsen.pdf?alt=media&token=15292116-362b-41ec-b32d-e426d373c57e" target="_blank"><li>CV &nearr;</li></a>
                <!-- <RouterLink to="/about"><li>Om mig</li></RouterLink> -->
                
              </ul>
          </div>

          <!-- my mail in footer -->
          <!-- <div class="mail">
            <h4 class="red-headline">Lærke Nicole Nielsen</h4>
            <hr>
          </div> -->
        </div>

          <div class="flex justify-end pb-4 pr-4">
            <img :src="star" alt="star" class="h-10">
          </div>
      </footer>
    </div>
  </div>
  
</template>


<style scoped>

header {
  background-color: var(--primary-color);
  position: fixed;
  z-index: 1000;
  width: 100%;
}
  

/* active stuff */

header p {
  color: var(--red-headline);
  font-weight: 500px;
  font-size: 15px;
}

header a:hover {
  text-decoration: underline;
  color: var(--red-headline);
  transition: 0.3s;
  background-color: var(--primary-color);
}

header button:hover {
  text-decoration: underline;
  color: var(--red-headline);
  transition: 0.3s;
  background-color: var(--primary-color);
}

nav a.router-link-exact-active  {
  border-radius: 0;
  font-weight: bold;
  text-decoration: underline;
  color: var(--red-headline);
  transition: 0.3s;
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
  background-color: var(--red-headline);
  color: var(--black-text);
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


/* The progress container (grey background) */
.progress-container {
  width: 100%;
  height: 8px;
  background: var(--primary-color);
}

/* The progress bar (scroll indicator) */
.progress-bar {
  height: 8px;
  background: var(--red-headline);
  width: 0%;
}

/* footer */
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
  text-decoration: underline;
}

.mail {
  display: flex;
  color: var(--white-headline);
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  gap: 18px;
  justify-content: center;
  padding-top: 32px;
}

.mail hr {
  display: block;
  border-width: 0;
  height: 0.5px;
  width: 62%;
  background-color: var(--red-headline);
  align-self: center;
}
/* footer end */


/* modal styling */
.modal {
  position: fixed;
  top: 10%;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal > div {
  background-color: var(--extra-white);
  border-radius: 10px;
  padding: 45px 20px;
  width: 90%;
  max-height: 80%;
  top: 40px;
  left: 40px;
  position: absolute;
  overflow-y: auto;
}

#floatyClose {
  position: absolute;
  top: 96px;
  margin: 10px;
  cursor: pointer;
  z-index:110;
}


/* responsive */
@media only screen and (max-width: 950px) {
  .footerMyName {
    display: none;
  }

  .mail {
    justify-content: flex-start;
  }
}

@media only screen and (max-width: 800px) {
  .mail {
    font-size: 16px;
  }

  .mail hr {
    width: 52%;
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