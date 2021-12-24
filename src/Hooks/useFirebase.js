import { useEffect, useState } from "react";
import initializeFirebase from "../Components/Firebase/firebase.init";
import { createUserWithEmailAndPassword, getAuth, updateProfile, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

initializeFirebase();

const useFirebase = () => {
    const [user,setUser] = useState({})
    const [admin,setAdmin] = useState(false);
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
            setError('')
            // Save user data to database 
            saveUserData( email, name, 'POST' );
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
            // Save user data to database 
            saveUserData( user.email, user.displayName, user.photoURL, 'PUT' );

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
     * Save User Data
     */
    const saveUserData = ( email, displayName, photoURL, method ) => {
        const user = { email, displayName, photoURL }
        
        fetch("https://powerful-peak-13797.herokuapp.com/users", {
          method: method,
          headers: {
              "content-type": "application/json",
          },
          body: JSON.stringify(user),
          })
        .then()
    }

    /**
     * Check if the user is a ADMIN or Not
     */

    fetch(`https://powerful-peak-13797.herokuapp.com/users/${user.email}`)
      .then(res=>res.json())
      .then(result=>{
        console.log("isAdmin",result.admin)
        setAdmin(result.admin)
      },[user.email])

     /**
     * Retun Value
     */
    return {
        user,
        admin,
        error,
        loading,
        registerUser,
        loginUser,
        LoginWithGoogle,
        logout
    }

}
export default useFirebase;