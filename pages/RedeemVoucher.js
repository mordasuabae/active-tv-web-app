import styles from "/styles/Redeem.module.css";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Link from "next/link";
import Typography from "@mui/material/Typography";


export default function Redeem() {
  const [popup, setPopup] = useState(true);
  const handleClickOpen = () => {
    setPopup(!popup);
    setClose(false);
  };
  const closePopup = () => {
    setPopup(false);
    setClose(true);
  };
  const [close, setClose] = useState(true);

  return (
    <Box className={styles.main}>
      {/* {close ? (
        <button
          className="popupbutton"
          style={{
            width: "150px",
            height: "40px",
            borderRadius: "8px",
            border: "none",
            marginRight: "10px",
            color: "gray",
            background: "#fff203",
            border: "none",
          }}
          onClick={handleClickOpen}
        >
          Redeem Code
        </button>
      ) : null} */}

      {popup ? (
        <Box>
          <Box className={styles.popup}>
            <Box>
              <Box>
              <Box  sx={{display:"flex"}} className={styles.popupheader}>
              <Typography style={{height:"150px",width:"150px",padding:"0 10px",backgroundImage:`url("/ATV_logo.png")`,backgroundSIze:"contain",backgroundRepeat:"no-reapeat",margin:"-30px 0 0 0"}}></Typography>
              <Box>
              <Typography sx={{fontFamily:"ArcadeFont"}}>Redeem Code</Typography>
                <Typography sx={{ fontSize: "10px",fontFamily:"ArcadeFont"}}>
                  alaricomanjate21@gmail.com
                </Typography>
              </Box>
              <Typography className="popupbutton" onClick={closePopup}>
                x
              </Typography>
              </Box>
                
              
              </Box>
            </Box>
            <Box
            
              sx={{
                // display: "flex",
                // justifyContent: "space-between",
                padding: " 70px 30px 10px 30px",
                // border: "1px solid red",
              }}
            >
              <>
                <input
                  style={{
                    width: "100%",
                    border: "none",
                    borderBottom: "2px solid #2c3e50",
                    outline: "none",
                    padding: "5px 0",
                    fontFamily:"ArcadeFont"
                  }}
                  type="placeholder"
                  placeholder="Enter gift card or promo code"
                ></input>
              </>
              <Box sx={{ margin: "20px 0 0 0",}}>
                <Typography sx={{ fontSize: "10px" ,fontFamily:"ArcadeFont"}}>
                  By clicking Redeem, you agree to the Gift Card & Promotional
                  Code{" "}
                  <Link href="/">
                    <span style={{ color: "#FFFA00" }}>
                      Terms and Conditions
                    </span>
                  </Link>
                  , as applicable.
                </Typography>
              </Box>
              <Box
                className="popupbutton"
                style={{
                  display:'flex',
                  justifyContent: "flex-end",
                  margin: "20px 0 0 0",
                }}
              >
                <button
                  className="popupbutton"
                  onClick={closePopup}
                  style={{
                    width: "100px",
                    height: "40px",
                    borderRadius: "8px",
                    border: "none",
                    marginRight: "10px",
                    color: "gray",
                    background: "white",
                    border: "0.1em solid gray",
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={() => alert("Your Voucher is Invalid!")}
                  className="popupbutton"
                  style={{
                    width: "100px",
                    height: "40px",
                    borderRadius: "8px",
                    border: "none",
                    color: "grey",
                    background: "#fff203",
                  }}
                >
                  Redeem
                </button>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
}


