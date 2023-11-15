import { db } from '../firebase.js'
import { ref } from 'vue'
import { collection, doc, onSnapshot, deleteDoc, addDoc, updateDoc, orderBy } from 'firebase/firestore';
import { getStorage, ref as refFB, uploadBytesResumable, getDownloadURL } from 'firebase/storage';


const usePortfolios = () => {

    // to store data from firebase
    const portfolios = ref([]); 
    // tell the system where to get the information from (which collection)
    const portfolioDataRef = collection(db, 'portfolios');

    // v-model is attached to this
    const AddPortfolioData = ref({
        // front page
        portfolioNumber: "",
        portfolioCategory: "",
        portfolioProduct: "",
        portfolioShortDescription: "",
        portfolioFrontImg: "",

        // portfolio detail
        portfolioLandingImg: "",
        portfolioYear: "",
        portfolioDescription: "",
        portfolioStatus: "",
        portfolioTech: "",

        // first problem, solution and images
        portfolioFirstProblem: "",
        portfolioFirstSolution: "",
        portfolioFirstImgOne: "",
        portfolioFirstImgTwo: "",
        portfolioFirstImgThree: "",

        // second problem, solution and images
        portfolioSecondProblem: "",
        portfolioSecondSolution: "",
        portfolioSecondImgOne: "",
        portfolioSecondImgTwo: "",
        portfolioSecondImgThree: "",

        // third proble, solution and images
        portfolioThirdProblem: "",
        portfolioThirdSolution: "",
        portfolioThirdImgOne: "",
        portfolioThirdImgTwo: "",
        portfolioThirdImgThree: "",

        // extra product images
        portfolioProductImgOne: "",
        portfolioProductImgTwo: "",
        portfolioProductImgThree: "",
        portfolioProductImgFour: "",
        portfolioProductImgFive: "",
        portfolioProductImgSix: "",
        portfolioProductImgSeven: "",
        portfolioProductImgEight: "",
        portfolioProductImgNine: "",
        portfolioProductImgTen: "",

        // next project
        portfolioNextCategory: "",
        portfolioNextImg: "",
    })


    const UpdatePortfolioData = ref({
        // front page
        portfolioNumber: "",
        portfolioCategory: "",
        portfolioProduct: "",
        portfolioShortDescription: "",
        portfolioFrontImg: "",

        // portfolio detail
        portfolioLandingImg: "",
        portfolioYear: "",
        portfolioDescription: "",
        portfolioStatus: "",
        portfolioTech: "",

        // first problem, solution and images
        portfolioFirstProblem: "",
        portfolioFirstSolution: "",
        portfolioFirstImgOne: "",
        portfolioFirstImgTwo: "",
        portfolioFirstImgThree: "",

        // second problem, solution and images
        portfolioSecondProblem: "",
        portfolioSecondSolution: "",
        portfolioSecondImgOne: "",
        portfolioSecondImgTwo: "",
        portfolioSecondImgThree: "",

        // third proble, solution and images
        portfolioThirdProblem: "",
        portfolioThirdSolution: "",
        portfolioThirdImgOne: "",
        portfolioThirdImgTwo: "",
        portfolioThirdImgThree: "",

        // extra product images
        portfolioProductImgOne: "",
        portfolioProductImgTwo: "",
        portfolioProductImgThree: "",
        portfolioProductImgFour: "",
        portfolioProductImgFive: "",
        portfolioProductImgSix: "",
        portfolioProductImgSeven: "",
        portfolioProductImgEight: "",
        portfolioProductImgNine: "",
        portfolioProductImgTen: "",

        // next project
        portfolioNextCategory: "",
        portfolioNextImg: "",
    })

    // store documents
    const getPortfoliosData = () => {
        onSnapshot(portfolioDataRef, (snapshot) => {
            portfolios.value = snapshot.docs.map(doc => {
                return {
                id: doc.id,
                ...doc.data()
                }
            })
        })
        console.log("document", portfolios)
    }

    // accept the button that deletes that added item
    const firebaseDeleteSinglePortfolio = async (id) => {
        await deleteDoc(doc(db, "portfolios", id));
        console.log("is deleted", id);
    }

    // accept the button that adds item

    const firebaseAddSinglePortfolio = async () => {
        const imgUrlOne = portfolioFrontImg.value; // Get the image URL from portfolioImg
        const imgUrlTwo = portfolioLandingImg.value; // Get the image URL from portfolioImg
        const imgUrlThree = portfolioFirstImgOne.value; // Get the image URL from portfolioImg
        const imgUrlFour = portfolioFirstImgTwo.value;
        const imgUrlFive = portfolioFirstImgThree.value;
        const imgUrlSix = portfolioSecondImgOne.value;
        const imgUrlSeven = portfolioSecondImgTwo.value;
        const imgUrlEight = portfolioSecondImgThree.value;
        const imgUrlNine = portfolioThirdImgOne.value;
        const imgUrlTen = portfolioThirdImgTwo.value;
        const imgUrlEleven = portfolioThirdImgThree.value;
        const imgUrlTwelve = portfolioProductImgOne.value;
        const imgUrlThirteen = portfolioProductImgTwo.value;
        const imgUrlFourteen = portfolioProductImgThree.value;
        const imgUrlFifteen = portfolioProductImgFour.value;
        const imgUrlSixteen = portfolioProductImgFive.value;
        const imgUrlSeventeen = portfolioProductImgSix.value;
        const imgUrlEighteen = portfolioProductImgSeven.value;
        const imgUrlNineteen = portfolioProductImgEight.value;
        const imgUrlTwenty = portfolioProductImgNine.value;
        const imgUrlTwentyOne = portfolioProductImgTen.value;
        const imgUrlTwentyTwo = portfolioNextImg.value;

        // Add the imageUrl to the data being added to Firebase
        await addDoc(collection(db, "portfolios"), {
            portfolioNumber: AddPortfolioData.value.portfolioNumber,
            portfolioCategory: AddPortfolioData.value.portfolioCategory,
            portfolioProduct: AddPortfolioData.value.portfolioProduct,
            portfolioShortDescription: AddPortfolioData.value.portfolioShortDescription,
            portfolioFrontImg: imgUrlOne,

            portfolioLandingImg: imgUrlTwo,
            portfolioYear: AddPortfolioData.value.portfolioYear,
            portfolioDescription: AddPortfolioData.value.portfolioDescription,
            portfolioStatus: AddPortfolioData.value.portfolioStatus,
            portfolioTech: AddPortfolioData.value.portfolioTech,

            portfolioFirstProblem: AddPortfolioData.value.portfolioFirstProblem,
            portfolioFirstSolution: AddPortfolioData.value.portfolioFirstSolution,
            portfolioFirstImgOne: imgUrlThree,
            portfolioFirstImgTwo: imgUrlFour,
            portfolioFirstImgThree: imgUrlFive,

            portfolioSecondProblem: AddPortfolioData.value.portfolioSecondProblem,
            portfolioSecondSolution: AddPortfolioData.value.portfolioSecondSolution,
            portfolioSecondImgOne: imgUrlSix,
            portfolioSecondImgTwo: imgUrlSeven,
            portfolioSecondImgThree: imgUrlEight,

            portfolioThirdProblem: AddPortfolioData.value.portfolioThirdProblem,
            portfolioThirdSolution: AddPortfolioData.value.portfolioThirdSolution,
            portfolioThirdImgOne: imgUrlNine,
            portfolioThirdImgTwo: imgUrlTen,
            portfolioThirdImgThree: imgUrlEleven,

            portfolioProductImgOne: imgUrlTwelve,
            portfolioProductImgTwo: imgUrlThirteen,
            portfolioProductImgThree: imgUrlFourteen,
            portfolioProductImgFour: imgUrlFifteen,
            portfolioProductImgFive: imgUrlSixteen,
            portfolioProductImgSix: imgUrlSeventeen,
            portfolioProductImgSeven: imgUrlEighteen,
            portfolioProductImgEight: imgUrlNineteen,
            portfolioProductImgNine: imgUrlTwenty,
            portfolioProductImgTen: imgUrlTwentyOne,

            portfolioNextCategory: AddPortfolioData.value.portfolioNextCategory,
            portfolioNextImg: imgUrlTwentyTwo,
        })

        // make the input fields empty after adding
        .then({
            portfolioNumber: AddPortfolioData.value.portfolioNumber = '',
            portfolioCategory: AddPortfolioData.value.portfolioCategory = '',
            portfolioProduct: AddPortfolioData.value.portfolioProduct = '',
            portfolioShortDescription: AddPortfolioData.value.portfolioShortDescription = '',
            portfolioFrontImg: AddPortfolioData.value.portfolioFrontImg = '',
            portfolioLandingImg: AddPortfolioData.value.portfolioLandingImg = '',
            portfolioYear: AddPortfolioData.value.portfolioYear = '',
            portfolioDescription: AddPortfolioData.value.portfolioDescription = '',
            portfolioStatus: AddPortfolioData.value.portfolioStatus = '',
            portfolioTech: AddPortfolioData.value.portfolioTech = '',
            portfolioFirstProblem: AddPortfolioData.value.portfolioFirstProblem = '',
            portfolioFirstSolution: AddPortfolioData.value.portfolioFirstSolution = '',
            portfolioFirstImgOne: AddPortfolioData.value.portfolioFirstImgOne = '',
            portfolioFirstImgTwo: AddPortfolioData.value.portfolioFirstImgTwo = '',
            portfolioFirstImgThree: AddPortfolioData.value.portfolioFirstImgThree = '',
            portfolioSecondProblem: AddPortfolioData.value.portfolioSecondProblem = '',
            portfolioSecondSolution: AddPortfolioData.value.portfolioSecondSolution = '',
            portfolioSecondImgOne: AddPortfolioData.value.portfolioSecondImgOne = '',
            portfolioSecondImgTwo: AddPortfolioData.value.portfolioSecondImgTwo = '',
            portfolioSecondImgThree: AddPortfolioData.value.portfolioSecondImgThree = '',
            portfolioThirdProblem: AddPortfolioData.value.portfolioThirdProblem = '',
            portfolioThirdSolution: AddPortfolioData.value.portfolioThirdSolution = '',
            portfolioThirdImgOne: AddPortfolioData.value.portfolioThirdImgOne = '',
            portfolioThirdImgTwo: AddPortfolioData.value.portfolioThirdImgTwo = '',
            portfolioThirdImgThree: AddPortfolioData.value.portfolioThirdImgThree = '',
            portfolioProductImgOne: AddPortfolioData.value.portfolioProductImgOne = '',
            portfolioProductImgTwo: AddPortfolioData.value.portfolioProductImgTwo = '',
            portfolioProductImgThree: AddPortfolioData.value.portfolioProductImgThree = '',
            portfolioProductImgFour: AddPortfolioData.value.portfolioProductImgFour = '',
            portfolioProductImgFive: AddPortfolioData.value.portfolioProductImgFive = '',
            portfolioProductImgSix: AddPortfolioData.value.portfolioProductImgSix = '',
            portfolioProductImgSeven: AddPortfolioData.value.portfolioProductImgSeven = '',
            portfolioProductImgEight: AddPortfolioData.value.portfolioProductImgEight = '',
            portfolioProductImgNine: AddPortfolioData.value.portfolioProductImgNine = '',
            portfolioProductImgTen: AddPortfolioData.value.portfolioProductImgTen = '',
            portfolioNextCategory: AddPortfolioData.value.portfolioNextCategory = '',
            portfolioNextImg: AddPortfolioData.value.portfolioNextImg = '',
        })

        console.log("portfolio is added");
    }

    const firebaseUpdateSinglePortfolio = async (portfolioToUpdate) => { 
        const foundPortfolio = portfolios.value.find(t => t.id === portfolioToUpdate.id);
        
        if (foundPortfolio) {
            const {
                portfolioNumber,
                portfolioCategory,
                portfolioProduct,
                portfolioShortDescription,
                portfolioFrontImg,
                portfolioLandingImg,
                portfolioYear,
                portfolioDescription,
                portfolioStatus,
                portfolioTech,
                portfolioFirstProblem,
                portfolioFirstSolution,
                portfolioFirstImgOne,
                portfolioFirstImgTwo,
                portfolioFirstImgThree,
                portfolioSecondProblem,
                portfolioSecondSolution,
                portfolioSecondImgOne,
                portfolioSecondImgTwo,
                portfolioSecondImgThree,
                portfolioThirdProblem,
                portfolioThirdSolution,
                portfolioThirdImgOne,
                portfolioThirdImgTwo,
                portfolioThirdImgThree,
                portfolioProductImgOne,
                portfolioProductImgTwo,
                portfolioProductImgThree,
                portfolioProductImgFour,
                portfolioProductImgFive,
                portfolioProductImgSix,
                portfolioProductImgSeven,
                portfolioProductImgEight,
                portfolioProductImgNine,
                portfolioProductImgTen,
                portfolioNextCategory,
                portfolioNextImg,
            } = portfolioToUpdate;
    
            await updateDoc(doc(portfolioDataRef, portfolioToUpdate.id), {
                portfolioNumber,
                portfolioCategory,
                portfolioProduct,
                portfolioShortDescription,
                portfolioFrontImg,
                portfolioLandingImg,
                portfolioYear,
                portfolioDescription,
                portfolioStatus,
                portfolioTech,
                portfolioFirstProblem,
                portfolioFirstSolution,
                portfolioFirstImgOne,
                portfolioFirstImgTwo,
                portfolioFirstImgThree,
                portfolioSecondProblem,
                portfolioSecondSolution,
                portfolioSecondImgOne,
                portfolioSecondImgTwo,
                portfolioSecondImgThree,
                portfolioThirdProblem,
                portfolioThirdSolution,
                portfolioThirdImgOne,
                portfolioThirdImgTwo,
                portfolioThirdImgThree,
                portfolioProductImgOne,
                portfolioProductImgTwo,
                portfolioProductImgThree,
                portfolioProductImgFour,
                portfolioProductImgFive,
                portfolioProductImgSix,
                portfolioProductImgSeven,
                portfolioProductImgEight,
                portfolioProductImgNine,
                portfolioProductImgTen,
                portfolioNextCategory,
                portfolioNextImg,
            });
        }
    }


    // image upload
    // Firebase storage upload image + get download URL
    const storage = getStorage();
    const portfolioFrontImg = ref(''); 
    const portfolioLandingImg = ref(''); 
    const portfolioFirstImgOne = ref(''); 
    const portfolioFirstImgTwo = ref(''); 
    const portfolioFirstImgThree = ref(''); 
    const portfolioSecondImgOne = ref(''); 
    const portfolioSecondImgTwo = ref(''); 
    const portfolioSecondImgThree = ref(''); 
    const portfolioThirdImgOne = ref(''); 
    const portfolioThirdImgTwo = ref(''); 
    const portfolioThirdImgThree = ref(''); 
    const portfolioProductImgOne = ref(''); 
    const portfolioProductImgTwo = ref(''); 
    const portfolioProductImgThree = ref(''); 
    const portfolioProductImgFour = ref(''); 
    const portfolioProductImgFive = ref(''); 
    const portfolioProductImgSix = ref(''); 
    const portfolioProductImgSeven = ref(''); 
    const portfolioProductImgEight = ref(''); 
    const portfolioProductImgNine = ref(''); 
    const portfolioProductImgTen = ref(''); 
    const portfolioNextImg = ref(''); 


    const uploadImg = async(event) => {
        let file = event.target.files[0];
        console.log("file", file)
    
        // Create the file metadata
        /** @type {any} */
        const metadata = {
            contentType: 'image/jpeg'
        };
        
        
        // Upload file
        const storageRef = refFB(storage, 'images/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);
        
        
        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
            (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case 'paused':
                console.log('Upload is paused');
                break;
                case 'running':
                console.log('Upload is running');       
                break;
            }
            }, 
            (error) => {
            switch (error.code) {
                case 'storage/unauthorized':
                // User doesn't have permission to access the object
                break;
                case 'storage/canceled':
                // User canceled the upload
                break;
        
                // ...
        
                case 'storage/unknown':
                // Unknown error occurred, inspect error.serverResponse
                break;
            }
            }, 
            () => {
            // Upload completed successfully - get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
        



                switch (imageType) {
                    case 'front':
                        portfolioFrontImg.value = downloadURL;
                        break;
                    case 'landing':
                        portfolioLandingImg.value = downloadURL;
                        break;
                    case 'firstImgOne':
                        portfolioFirstImgOne.value = downloadURL;
                        break;
                    case 'firstImgTwo':
                        portfolioFirstImgTwo.value = downloadURL;
                        break;
                    case 'firstImgThree':
                        portfolioFirstImgThree.value = downloadURL;
                        break;
                    case 'secondImgOne':
                        portfolioSecondImgOne.value = downloadURL;
                        break;
                    case 'secondImgTwo':
                        portfolioSecondImgTwo.value = downloadURL;
                        break;
                    case 'secondImgThree':
                        portfolioSecondImgThree.value = downloadURL;
                        break;
                    case 'thirdImgOne':
                        portfolioThirdImgOne.value = downloadURL;
                        break;
                    case 'thirdImgTwo':
                        portfolioThirdImgTwo.value = downloadURL;
                        break;
                    case 'thirdImgThree':
                        portfolioThirdImgThree.value = downloadURL;
                        break;
                    case 'productImgOne':
                        portfolioProductImgOne.value = downloadURL;
                        break;
                    case 'productImgTwo':
                        portfolioProductImgTwo.value = downloadURL;
                        break;
                    case 'productImgThree':
                        portfolioProductImgThree.value = downloadURL;
                        break;
                    case 'productImgFour':
                        portfolioProductImgFour.value = downloadURL;
                        break;
                    case 'productImgFive':
                        portfolioProductImgFive.value = downloadURL;
                        break;
                    case 'productImgSix':
                        portfolioProductImgSix.value = downloadURL;
                        break;
                    case 'productImgSeven':
                        portfolioProductImgSeven.value = downloadURL;
                        break;
                    case 'productImgEight':
                        portfolioProductImgEight.value = downloadURL;
                        break;
                    case 'productImgNine':
                        portfolioProductImgNine.value = downloadURL;
                        break;
                    case 'productImgTen':
                        portfolioProductImgTen.value = downloadURL;
                        break;
                    case 'nextImg':
                        portfolioNextImg.value = downloadURL;
                        break;
                }





                // portfolioFirstImgTwo.value = downloadURL
                // portfolioFirstImgThree.value = downloadURL
                // portfolioSecondImgOne.value = downloadURL
                // portfolioSecondImgTwo.value = downloadURL
                // portfolioSecondImgThree.value = downloadURL
                // portfolioThirdImgOne.value = downloadURL
                // portfolioThirdImgTwo.value = downloadURL
                // portfolioThirdImgThree.value = downloadURL
                // portfolioProductImgOne.value = downloadURL
                // portfolioProductImgTwo.value = downloadURL
                // portfolioProductImgThree.value = downloadURL
                // portfolioProductImgFour.value = downloadURL
                // portfolioProductImgFive.value = downloadURL
                // portfolioProductImgSix.value = downloadURL
                // portfolioProductImgSeven.value = downloadURL
                // portfolioProductImgEight.value = downloadURL
                // portfolioProductImgNine.value = downloadURL
                // portfolioProductImgTen.value = downloadURL
                // portfolioNextImg.value = downloadURL
            });
            }  
        );
    }

    return {
        getPortfoliosData,
        portfolios,
        firebaseDeleteSinglePortfolio,
        firebaseAddSinglePortfolio,
        AddPortfolioData,
        firebaseUpdateSinglePortfolio,
        UpdatePortfolioData,
        uploadImg,
    }
}

export default usePortfolios