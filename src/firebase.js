
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword,
         getAuth,
         signInWithEmailAndPassword, 
         signOut} from "firebase/auth";
import { addDoc,
     collection,
      getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";



const firebaseConfig = {
  apiKey: "AIzaSyAsM7ctNKPZ8TrgrohoPlMMgSZi2G539cA",
  authDomain: "netflix-clone-rohit-561c0.firebaseapp.com",
  projectId: "netflix-clone-rohit-561c0",
  storageBucket: "netflix-clone-rohit-561c0.appspot.com",
  messagingSenderId: "251826292415",
  appId: "1:251826292415:web:ced8e41becafd7d1e1680a"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const signup = async (name,email,password)=>{
    try {
       const res =  await createUserWithEmailAndPassword(auth,email,password);
       const user = res.user;
       await addDoc(collection(db, "user"), {
        uid: user.uid,
        name,
        authProvider:"local",
        email,

       })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const login = async (email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}
const logout =()=>{
    signOut(auth);
}


export {auth,db,login,signup,logout};