<template>
    <!-- buttons to choose what to view -->
    <div class="ten-percent pt-28 pb-20 white-bg">

        <!-- add portfolio -->
        <div class="flex flex-col justify-center gap-2">
            <h1 class="pt-16 pb-2 black-headline text-5xl">Add portfolio</h1>

            <!-- teleport modal with add portfolio -->
            <button @click="isOpen = true" class="btn mb-12">Add new portfolio</button>
            <teleport to="body">
                <div class="modal" v-if="isOpen">
                    <AddPortfolio @close="isOpen = false">

                    </AddPortfolio>
                </div>
            </teleport>
        </div>

        <!-- display list of tutors where you can edit them -->
        <div>
            <PrintedPortfolio></PrintedPortfolio>
        </div>
    </div>

</template>

<script setup>
import { onMounted } from 'vue'
import { ref } from 'vue';
import usePortfolios from '../modules/usePortfolios.js'


// teleport components
import AddPortfolio from '../components/AddPortfolio.vue'
import PrintedPortfolio from '../components/PrintedPortfolio.vue'



// create file and only grab data we need... add everytime u want to add a function like add button that deletes items
const {
    getPortfoliosData, 
} = usePortfolios();

onMounted(() => {
    getPortfoliosData();
})

// modal button open and close
const isOpen = ref(false);



// scroll to top when opening page
onMounted(() => {
    window.scrollTo(0, 0)
})


</script>


<style scoped>
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

</style>