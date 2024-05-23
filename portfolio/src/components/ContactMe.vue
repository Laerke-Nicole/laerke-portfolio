<template>
    <div class="flex flex-col">
        <div class="secondary-bg contact pb-16">
            <button
                    id="floatyClose"
                    @click="$emit('close')"
                    class="pt-6 pl-6 flex flex-col justify-start black-headline text-2xl exit-btn"
                >
                X
                </button>

            <!-- content -->
            <div class="flex">
                <div class="ten-percent flex flex-col w-2/4">
                    <h2 class="dark-headline text-5xl pt-10 pb-14">Contact me on:</h2>
                    
                    <div class="flex flex-col gap-6">
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

                <div class="w-2/4 flex justify-center items-center">
                    <img src="https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/Cats%2FCat%20curious.svg?alt=media&token=89021651-a8e4-44a8-be43-3cdb0325380a" alt="" class="cat-contact">
                </div>
            </div>
            
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'

// logo 
let linkedin = 'https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/Socials%2FLinkedIn.svg?alt=media&token=b93c955e-e058-417a-b8b0-cfef6580e485';
let mail = 'https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/Socials%2FMail.svg?alt=media&token=c6f97646-6f13-4879-a614-c74e889eddff';

</script>

<style scoped>
.linkedin:hover {
    text-decoration: underline;
}

.cat-contact {
    height: 60vh;
    margin-top: -20px;
}

</style>