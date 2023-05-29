import { createContext, useState , useContext, useEffect, useRef} from 'react';
import { auth, database } from '../misc/firebase'

const profileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() =>{
    let  userRef;

    const authUnsub = auth.onAuthStateChanged( authObj =>{
      if(authObj){

        userRef = database.ref(`/profiles/${authObj.uid}`)
        userRef.on('value',snap =>{
          const {name , createdAt} = snap.val();

          
          const data = {
            name,
            createdAt,
            uid: authObj.uid,
            email: authObj.email,
          }
          
          setIsLoading(false);
          setProfile(data);
        })
      } else {

        if(userRef){
         userRef.off()   
        }

        setIsLoading(false);
        setProfile(null);
      }
    } )

    return () =>{
      authUnsub();
      if (userRef) {
        userRef.off();
      }
    }
  },[])

  return (
    <profileContext.Provider value={ {isLoading,profile} }>
      {children}
    </profileContext.Provider>
  );
};

export const useProfile = () => useContext(profileContext)