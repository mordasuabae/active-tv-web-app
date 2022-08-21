import "../styles/globals.css";
import Navbar from "../components/navbar";
import { USER_CONTEXT } from "../context/MainContext";
import { useContext, useState, useEffect } from "react";
import { Palette } from "@universemc/react-palette";
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from "./../components/utils/CognitoConfig";
import CurrentConfig from './../components/utils/CognitoConfig'
Amplify.configure(CurrentConfig);


function MyApp({ Component, pageProps }) {

  const UserContext = useContext(USER_CONTEXT);
  const [selectedCategory, setSelectedCategory] = useState("None");
  const [user, setUser] = useState(undefined)
  const [showsDetails, setShowsDetails] = useState({
    title: '',
    img: 'imortal.webp',
    episodes: []
  })




  const checkUser = async () => {
 
  await Auth.currentAuthenticatedUser()
    .then(user => {
      console.log("User after succesfull login: ", user.attributes.email)
      setUser(user.attributes.email)
    })
    .catch((error) =>{
      console.log("Error after sucesfull login: ", error) 
      setUser(null)})
  }

  useEffect(() => {
    checkUser()
  }, [])

  return (
    <USER_CONTEXT.Provider
      value={{ UserContext, selectedCategory, setSelectedCategory, showsDetails, setShowsDetails , AuthenticatedUser:{
        name:user
      } }}
    >
      <Navbar />
      <Component {...pageProps} />
    </USER_CONTEXT.Provider>
  );
}

export default MyApp;
