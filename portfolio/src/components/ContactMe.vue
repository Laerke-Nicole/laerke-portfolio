<template>
    <div class="flex flex-col contact">
        <div class="bright-frame">
            <div class="bright-frame-inside ten-percent flex flex-col pb-16">
                <button
                    id="floatyClose"
                    @click="$emit('close')"
                    class="pt-6 flex flex-col justify-start black-headline text-xl exit-btn"
                >
                X
                </button>
                <h2 class="red-headline text-5xl pt-10 pb-1">Please contact me on:</h2>
                <h4 class="black-text pb-8 text-xl">I'll get back to you as soon as possible!</h4>
                
                <div class="flex gap-16">
                    <a href="https://www.linkedin.com/in/laerke-nicole/" target="_blank">
                        <div class="flex gap-2">
                            <img :src="linkedin" alt="linkedin" class="h-6">
                            <p class="black-text linkedin">/laerke-nicole</p>
                        </div> 
                    </a>
                        
                    
                    <div class="flex gap-2">
                        <img :src="mail" alt="mail" class="h-6">
                        <p class="black-text">laenie01@easv365.dk</p>
                    </div>
                </div>
              
            </div> 
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'

// logo 
let linkedin = 'https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/skills-logo%2Flinkedin.svg?alt=media&token=38e8195e-1a01-41a5-b2c2-7b704b46821d';
let mail = 'https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/skills-logo%2Fmail.svg?alt=media&token=e9cd44f2-459e-4fa6-a0d7-08c37738d86e';

</script>

<style scoped>
.contact {
    height: 100vh;
}

.linkedin:hover {
    text-decoration: underline;
}

.exit-btn:hover {
    color: var(--black-text);
}
</style>