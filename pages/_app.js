import "../styles/globals.css";
import Navbar from "../components/navbar";
import { USER_CONTEXT } from "../context/MainContext";
import { useContext, useState, useEffect } from "react";
import { Palette } from "@universemc/react-palette";

//amplify imports
import { Amplify, Auth } from 'aws-amplify';
import { Hub, Logger } from "aws-amplify";
import awsconfig from "./../components/utils/CognitoConfig";
import CurrentConfig from './../components/utils/CognitoConfig'
import { FlashlightOnRounded } from "@mui/icons-material";
Amplify.configure(CurrentConfig);


function MyApp({ Component, pageProps }) {

  const UserContext = useContext(USER_CONTEXT);
  const [selectedCategory, setSelectedCategory] = useState("None");
  const [user, setUser] = useState("Active-tv")
  const [loggedIn , setLoggedIn] = useState(false)
  const [showsDetails, setShowsDetails] = useState({
    title: '',
    img: 'imortal.webp',
    episodes: []
  })




//hub listeners
  Hub.listen("auth", (data) => {
    switch (data.payload.event) {
      case "signIn":
        console.log("user signed in " + data.payload.event);
        break;
      case "signUp":
        console.log("user signed up " + data.payload.event);
        break;
      case "signOut":
        console.log("user signed out " + data.payload.event);
        break;
      case "signIn_failure":
        console.log("user sign_in failed :" + data.payload.event);
        break;
      case "configured":
        console.log("the Auth module is configured " + data.payload.event);
    }
  });



  const getUserInfo = async ()=>{
    try{
      const userInfo =  await Auth.currentUserCredentials()
      const userSession = await Auth.currentSession()
      const currentCredentials = await Auth.currentCredentials()
      const getUser =  await Auth.currentAuthenticatedUser().then(user => user.username)
      
      console.log(userInfo, 'user information')
      console.log(userSession, 'user session')
      console.log(currentCredentials, 'current credentials')
      console.log(getUser, 'getting federated user ')
      
    }catch(err){
        console.log(err.message)
    }
   
  }



  const checkUser = async () => {

    await Auth.currentAuthenticatedUser()
      .then(user => {
        const currentUser = user.attributes.email
        // const userInitial = currentUser.charAt(0)
        console.log("User after succesfull login: ", user.attributes.email)
        setUser(currentUser)
        setLoggedIn(true)
        // console.log('user checking for federation' , user)
      })
      .catch((error) => {
        console.log("Error after succesfull login: ", error)
        setUser("Active-tv")
        setLoggedIn(false)
      })
  }


const reload = ()=>{
  window.location.reload()
}


  useEffect(() => {
    console.log('running user functions')
    checkUser()
    getUserInfo()
  }, [])

  return (
    <USER_CONTEXT.Provider
      value={{
        UserContext, selectedCategory,loggedIn ,setLoggedIn, setSelectedCategory, showsDetails, setShowsDetails, AuthenticatedUser: {
          name: user,
        }
      }}
    >
      <Navbar />
      <Component {...pageProps} />
    </USER_CONTEXT.Provider>
  );
}

export default MyApp;
