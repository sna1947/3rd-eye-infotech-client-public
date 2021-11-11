import { useEffect, useState } from "react";
import initializeAuthencation from "../Pages/Login/Firebase/firebase.initialize";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword   } from "firebase/auth";

initializeAuthencation();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();

    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

    };

    const loginUser = (email, password) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    };

    const logOut = () =>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    };

// observer user state ======================
    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
             
              setUser({})
            }
          });
          return()=>unsubcribe;
    },[]);


    return {
        user,
        loginUser,
        logOut,
        registerUser,
    }

}
export default useFirebase;