import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import useRouter from "next/router";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { handleBreakpoints } from "@mui/system";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
// import { Auth } from 'aws-amplify';
import Link from "next/link";
//  import signUp from '../../amplify/methods/amplifySdk' // imported the fnction here




const confirmStyles = {
  container: {
    minHeight: "100%",
    width: "100%",
    background: "url('login-bg.jpg')",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: {
      md: '20px',
      sm: 0,
      xs: 0,
    },
  },
  contentCover: {
    minHeight: {
      lg: "294px",
      md: "294px",
      sm: "900px",
      xs: "900px",
    },
    width: "1140px",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: {
      lg: "20px 0 0 0",
      md: "20px 0 0 0",
      sm: "0 30px",
      xs: 0,
    },
  },
  formContainer: {
    // border: "1px solid red",
    height: "100%",
    width: {
      md: "50%",
      sm: "100%",
      xs: "100%",
    },
    padding: {
      md: 0,
      sm: 0,
      xs: 0,
    },
  },
  header: {
    //  border:'1px solid blue',
    minHeight: "250px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    flexDirection: "column",
    padding: {
      md: "20px 10px",
      sm: "20px 30px",
      xs: "20px 30px",
    },
  },
  formBox: {
    minHeight: "400px",
    padding: {
      lg: 0,
      md: 0,
      sm: "0px",
      xs: "0px",
    },
    // border: "1px solid yellow",
    // padding: "20px 0",
    color: "white",
  },
  input: {
    width: "100%",
    height: "50px",
    // padding: " 0 5px",
    fontSize: "15px",
    background: "#fff",
    display: "flex",
    alignItems: "center",
  },
  inputLabel: {
    color: "#fff",
    width: "100%",
    padding: 10,
    fontWeight: "bold",
  },
  inputBlocks: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    // border:'1px solid red',
    padding: {
      md: "5px 0",
      sm: " 5px 10px",
      xs: "10px 25px",
    },
  },
  icon: {
    color: "#666",
  },
  inputElement: {
    width: "90%",
    height: "100%",
    backgroundColor: "white",
    border: "none",
    padding: "0 15px",
    fontSize: "15px",
    fontWeight: "",
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    // border: "1px solid blue",
    height: "100px",

    padding: {
      md: "1px 0",
      sm: "10px",
      xs: "20px",
    },
  },
  loginBtn: {
    width: "100%",
    height: "50px",
    background: "#fff203",
    color: "#000",
    fontWeight: "bolder",
    "&:hover": {
      background: "#fff203",
    },
  },
  fieldset: {
    border: "none",
    borderTop: "1px solid #f2f2f2",
    // border:'4px 0  2px 1px solid grey',
  },
  legend: {
    margin: "0 auto",
    borderRadius: "100%",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
  socialBtn: {
    width: "100%",
    height: "50px",
    background: "transparent",
    border: "1px solid white",
    color: "#fff",
    fontWeight: "bolder",
    "&:hover": {
      border: "none",
      background: "#ff0000",
      color: "#fff",
    },
  },
  checkboxContainer: {
    display: "flex",
    flexDirection: "column",
    height: "50px",
    justifyContent: "space-between",
    marginTop: "15px",
    padding: {
      md: "0",
      sm: "0 10px",
      xs: "0 20px",
    },
  },
};

const confirm = () => {
  const [show, setShow] = useState(false);

  // form state
  const [formDetails, setFormDetails] = useState({
    code: 44444,
  });

  const handleFieldChange = (event) => {
    const field = event.currentTarget.name; //created an object that gets the name of inputs and store its value

    setFormDetails({
      ...formDetails,
      [field]: event.currentTarget.value,
    });
  };


  // submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if(formDetails.code.length === 6){
    alert(formDetails.code + " code sent");

    }
 
  };

  return (
    <Box sx={{ ...confirmStyles.container }}>
      <Box sx={{ ...confirmStyles.contentCover }}>
        <Box sx={{ ...confirmStyles.formContainer }}>
          <Box sx={{ ...confirmStyles.header }}>
            <img
              src="glitch-tv.gif"
              alt="logo"
              height="80px"
              style={{ marginBottom: "5" }}
            />
            <Typography
              variant="h4"
              align="center"
              sx={{
                margin: "10px 0",
                fontWeight: "900",
                fontSize: {
                  md: "20px",
                  xs: "20px",
                },
              }}
            >
              Verify Your Account
            </Typography>
            <Typography className={"active-tv-font"} sx={{ lineHeight: "25px" }} variant="p" align="center">
                  We send you the six digits code to example@gmail.com <br/>
                  Enter the code below to confirm your email address
            </Typography>
          </Box>
          <Box sx={confirmStyles.formBox}>
            <form onSubmit={handleSubmit}>

              <Box sx={{ ...confirmStyles.inputBlocks }}>
                <label style={{ ...confirmStyles.inputLabel }}>
                  {/* Email address */}
                </label>
                <Box sx={{ ...confirmStyles.input }}>
                  <input
                    name="code"
                    value={formDetails.code}
                    onChange={handleFieldChange}
                    className="focusInput"
                    style={{ ...confirmStyles.inputElement }}
                    type={"number"}
                    placeholder="Enter Confirmation code"
                  />
                  <Button>
                    <ConfirmationNumberIcon sx={confirmStyles.icon} />
                  </Button>
                </Box>
              </Box>



              <Box sx={{ ...confirmStyles.buttonContainer }}>
                <Button className={"active-tv-font"}
                  sx={{ ...confirmStyles.loginBtn }}
                  variant="contained"
                  color="warning"
                  type="Submit"
                >
                  Confirm code
                </Button>
              </Box>
              <Box sx={{ padding: "0 50px" }}>
                <fieldset style={{ ...confirmStyles.fieldset }}>
                  <legend style={{ ...confirmStyles.legend }}>
                  <ConfirmationNumberIcon sx={confirmStyles.icon} />
                  </legend>
                </fieldset>
              </Box>

            </form>
          </Box>

        </Box>
      </Box>
    </Box>
  );
};

export default confirm;
