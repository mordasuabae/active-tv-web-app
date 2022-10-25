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
import axios from 'axios'

Amplify.configure(CurrentConfig);
import {ShowsProvider} from '../context/ShowContext'


function MyApp({ Component, pageProps }) {

  const UserContext = useContext(USER_CONTEXT);
  const [selectedCategory, setSelectedCategory] = useState("None");
  const [user, setUser] = useState("Activetv@gmail.com")
  const [googleFederatedUser, setGoogleFederatedUser] = useState("Activetv@gmail.com")
  const [facebookFederatedUser, setFacebookFederatedUser] = useState("Activetv@gmail.com")
  const [displayName, setDisplayName] = useState("display name")
  const [loggedIn, setLoggedIn] = useState(false)
  const [authorisedJWT, setAuthorisedJWT] = useState("no token valid")
  const [showsDetails, setShowsDetails] = useState({
    title: '',
    img: 'imortal.webp',
    episodes: []
  })



  const ForceReload = () => window.location.reload()



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


  //test for federation
  const fetchUserInfo = (domain) => {
    //let domain = 'activetv38fde85b-38fde85b-dev.auth.us-east-2.amazoncognito.com'
    // the original call  axios.get('https://<your-user-pool-domain>/oauth2/userInfo')
    axios.get(`https://${domain}/oauth2/userInfo`)
      .then((response) => console.log(response, 'fetching userInfo info with axios'))
      .catch(err => console.log('failing to fetch user from axios bcz', err.message))
  }

  const updateAttributes = async (user) => {
    await Auth.updateUserAttributes(user, {
      // 'name': 'schadrack'
    });
  }




  const checkUser = async () => {

    await Auth.currentAuthenticatedUser({
      bypassCache:false
    })
      .then(user => {
        const currentUser = user.attributes.email
        const DisplayUser = user.attributes.name

        //get token
        const token = user.signInUserSession.id.jwtToken
        setAuthorisedJWT(token)
        console.log(authorisedJWT, 'how to access jwt statefully')


        // our setters
        setUser(currentUser)
        setDisplayName(DisplayUser)
        setLoggedIn(true)
        //testing logs
        console.log('attributes:', user.attributes);
        console.log(user, '=> user in current authenticated for federation')
        console.log("User after succesfull login: ", currentUser)
        console.log("display name after succesfull login: ", DisplayUser)

        //get jwt token from user object
        // const token = user.signInUserSession.accessToken.jwtToken
        // setAuthorisedJWT('')
        //update user attriubutes
      })
      .catch((error) => {
        console.log("failed to get the existing user because ", error)
        setUser("Active-tv")
        setLoggedIn(false)
      })
  }


  useEffect(() => {
    checkUser()
    // getUserInfo()
    // fetchUserInfo('https://activetv38fde85b-38fde85b-dev.auth.us-east-2.amazoncognito.com')
  }, [])

  return (
    <USER_CONTEXT.Provider

      value={{
        UserContext,
        authorisedJWT,
        setAuthorisedJWT,
        displayName,
        selectedCategory,
        loggedIn,
        ForceReload,
        setLoggedIn,
        setUser,
        setSelectedCategory,
        showsDetails,
        setShowsDetails,
        AuthenticatedUser: {
          name: user,
        }
      }}
    >
      <Navbar />
      <ShowsProvider>
      <Component {...pageProps} />
      </ShowsProvider>
    </USER_CONTEXT.Provider>
  );
}

export default MyApp;

