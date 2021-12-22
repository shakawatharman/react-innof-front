import { useEffect, useState } from "react";
import initializeFirebase from "../Components/Firebase/firebase.init";
import { createUserWithEmailAndPassword, getAuth, updateProfile, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

initializeFirebase();

const useFirebase = () => {
    const [user,setUser] = useState({})
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(true)

    const auth = getAuth();

    /**
     * Firebase Registration Setup
     */
    const registerUser = (email,password,name,navigate) =>{
        setLoading(true)
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            const newUser = { email, displayName: name };
            setUser(newUser)
            // send name to firebase to update
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
                // Profile updated!
                // ...
              }).catch((error) => {
                // An error occurred
                // ...
              });
            setError('')
            navigate('/');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage)
        })
        .finally(()=>setLoading(false));
    }
    
    /**
     * Firebase Login Setup
     */

    const loginUser = (email,password, location, navigate ) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            // Redirect after Signed in 
            const destination = location?.state?.from || '/';
            navigate(destination);

            const user = userCredential.user;
            setError('')
            setUser(user)
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
        })
        .finally(()=>setLoading(false));
    }

     /**
     * Googel Login Setup
     */
     
      const LoginWithGoogle = (location,navigate) => {
        const googleProvider = new GoogleAuthProvider();
        setLoading(true)
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            setError('')
            setUser(user)

            // Redirect after Signed in 
            const destination = location?.state?.from || '/';
            navigate(destination);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
        })
        .finally(()=>setLoading(false));
    }
          
    /**
     * Manage user Stete : onAuthStateChanged
     */

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
              setUser({})
            }
            setLoading(false)
          });
          return () => unsubscribe;
    },[])

    /**
     * Logout
     */
    const logout = () => {
        setLoading(true)
        signOut(auth).then(()=>{
            // Sign-out successful.
        }).catch((error)=>{
            // an error occured.
        }).finally(()=>setLoading(false))
    }

     /**
     * Retun Value
     */
    return {
        user,
        error,
        loading,
        registerUser,
        loginUser,
        LoginWithGoogle,
        logout
    }

}
export default useFirebase;