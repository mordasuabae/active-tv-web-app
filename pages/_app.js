import "../styles/globals.css";
import Navbar from "../components/navbar";
import { USER_CONTEXT } from "../context/MainContext";
import { useContext } from "react";
import { Palette } from "@universemc/react-palette";

function MyApp({ Component, pageProps }) {

  const UserContext = useContext(USER_CONTEXT);
  
  
  return (
    <USER_CONTEXT.Provider value={UserContext}>
      <Navbar />
      <Component {...pageProps} />
    </USER_CONTEXT.Provider>
  );
}

export default MyApp;
