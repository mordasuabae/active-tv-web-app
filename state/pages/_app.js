import "../styles/globals.css";
import Navbar from "../components/navbar";
import { USER_CONTEXT } from "../context/MainContext";
import { useContext, useState, useEffect } from "react";
import { Palette } from "@universemc/react-palette";


import { Amplify, Auth } from 'aws-amplify';
import awsconfig from "./../components/utils/CognitoConfig";
Amplify.configure(awsconfig);


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

    console.log('getting user')
    const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });

    setUser(authUser);

  }

  // useEffect(() => {
  //   checkUser()
  // }, [])

  return (
    <USER_CONTEXT.Provider
      value={{ UserContext, selectedCategory, setSelectedCategory, showsDetails, setShowsDetails }}
    >
      <Navbar />
      <Component {...pageProps} />
    </USER_CONTEXT.Provider>
  );
}

export default MyApp;
