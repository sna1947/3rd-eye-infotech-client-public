import { useEffect, useState } from "react";
import initializeAuthencation from "../Pages/Login/Firebase/firebase.initialize";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";

initializeAuthencation();
// useFirebase===========================================
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoding, setIsLoding] = useState(true);
  const [authError, setAuthError] = useState('');
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // Registration section=====================================
  const registerUser = (email, password, name, history) => {
    setIsLoding(true);   // spinner
    createUserWithEmailAndPassword(auth, email, password, )
      .then((userCredential) => {
        const newUser = { email, displayName: name };
        setUser(newUser);
        // sava user to database***********************
        saveUser(email, name, 'POST');

        // send name to firebase after creation********************
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
        }).catch((error) => {
        });
        history.replace('/');
        setAuthError('');
        // Signed in 
        // const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        setAuthError(error.message);
      }).finally(() => setIsLoding(false));
  };
  // Login Section===========================================
  const loginUser = (email, password, location, history) => {
    setIsLoding(true);  // spinner
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || '/';
        history.replace(destination);
        setAuthError('');

        // Signed in 
        // const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        setAuthError(error.message);
      }).finally(() => setIsLoding(false));
  };

  // SignIn With Google =================================
  const signInWithGoogle = (location, history) => {
    setIsLoding(true);   // spinner
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, 'PUT');
         // sava user to database***********************
        setAuthError('');
        // const destination = location?.state?.from || '/';
        // history.replace(destination);

      }).catch((error) => {
        setAuthError(error.message);
      }).finally(() => setIsLoding(false));

  };
  // Logout section===========================================
  const logOut = () => {
    setIsLoding(true);
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    }).finally(() => setIsLoding(false));
  };

  // observer user state ======================
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {

        setUser({})
      }
      setIsLoding(false);
    });
    return () => unsubcribe;
  }, []);
//Make admin=======================
useEffect(()=>{
fetch(`https://mighty-island-81125.herokuapp.com/users/${user.email}`)
.then(res => res.json())
.then(data =>setAdmin(data.admin) )

  },[user.email])

//save email & user name by regestration form
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch('https://mighty-island-81125.herokuapp.com/users', {
      method: method,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then()
  };


  return {
    user,
    admin,
    loginUser,
    logOut,
    registerUser,
    isLoding,
    authError,
    signInWithGoogle,
  }

}
export default useFirebase;