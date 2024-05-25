import { db } from '../firebase.js'
import { ref } from 'vue'
import { collection, doc, onSnapshot, deleteDoc, addDoc, updateDoc, } from 'firebase/firestore';
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
        portfolioImg: "",

        // portfolio detail
        portfolioYear: "",
        portfolioDescription: "",
        portfolioStatus: "",
        portfolioTech: [],
    })


    const UpdatePortfolioData = ref({
        // front page
        portfolioNumber: "",
        portfolioCategory: "",
        portfolioProduct: "",
        portfolioImg: "",

        // portfolio detail
        portfolioYear: "",
        portfolioDescription: "",
        portfolioStatus: "",
        portfolioTech: [],
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
        const imgUrlOne = portfolioImg.value; // Get the image URL from portfolioImg

        // Add the imageUrl to the data being added to Firebase
        await addDoc(collection(db, "portfolios"), {
            portfolioNumber: AddPortfolioData.value.portfolioNumber,
            portfolioCategory: AddPortfolioData.value.portfolioCategory,
            portfolioProduct: AddPortfolioData.value.portfolioProduct,
            portfolioImg: imgUrlOne,

            portfolioYear: AddPortfolioData.value.portfolioYear,
            portfolioDescription: AddPortfolioData.value.portfolioDescription,
            portfolioStatus: AddPortfolioData.value.portfolioStatus,
            portfolioTech: AddPortfolioData.value.portfolioTech,
        })

        // make the input fields empty after adding
        .then({
            portfolioNumber: AddPortfolioData.value.portfolioNumber = '',
            portfolioCategory: AddPortfolioData.value.portfolioCategory = '',
            portfolioProduct: AddPortfolioData.value.portfolioProduct = '',
            portfolioImg: AddPortfolioData.value.portfolioImg = '',
            portfolioYear: AddPortfolioData.value.portfolioYear = '',
            portfolioDescription: AddPortfolioData.value.portfolioDescription = '',
            portfolioStatus: AddPortfolioData.value.portfolioStatus = '',
            portfolioTech: AddPortfolioData.value.portfolioTech = '',
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
                portfolioImg,
                portfolioYear,
                portfolioDescription,
                portfolioStatus,
                portfolioTech,
            } = portfolioToUpdate;
    
            await updateDoc(doc(portfolioDataRef, portfolioToUpdate.id), {
                portfolioNumber,
                portfolioCategory,
                portfolioProduct,
                portfolioImg,
                portfolioYear,
                portfolioDescription,
                portfolioStatus,
                portfolioTech,
            });
        }
    }


    // image upload
    // Firebase storage upload image + get download URL
    const storage = getStorage();

    // Create a variables to store the image link
    const portfolioImg = ref(''); 


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
                portfolioImg.value = downloadURL
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