import Script from "next/script";
import { Box , MenuItem, Select } from "@mui/material";
import Typography from "@mui/material/Typography";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from '@mui/icons-material/Person';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Button from "@mui/material/Button";
import Subscription from "../components/Payment/subscriptions.json"
import { useState } from "react";


const PACKAGES = [
  {
    type: "monthly",
    price: 1
  },
  {
    type: "annual",
    price: 2
  },

];

export default function Paypage() {
  const [amount, setAmount] = useState(Subscription);

  //========================================
  const [prices, setPrice] = useState(PACKAGES);

  function subscriptionType(e) {
    const value = e.target.value;
    const filteredPackages =
      value === "all" ? PACKAGES : PACKAGES.filter((p) => p.type === value);
    setPrice(filteredPackages);
  }

  //========================================

  if (typeof window != "undefined") {
    const paymentForm = document.getElementById('paymentForm');
    paymentForm.addEventListener("submit", payWithPaystack, false);
    function payWithPaystack(e) {
      e.preventDefault();
      let handler = PaystackPop.setup({
        // key: "pk_test_084cd47b971a5efe11466a7b7a7bc0f8dcf3bd7f", // Replace with your public key
        key: 'pk_live_52c4e5f9c94fa016c914d46dbf8176fa56deb720',

        email: document.getElementById("email-address").value,
        amount: document.getElementById("amount").value * 100,
        currency: 'ZAR', //
        //ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
        // label: "Optional string that replaces customer email"
        onClose: function () {
          alert('Window closed.');
        },
        callback: function (response) {
          alert("The transaction status is => " + response.status)
          console.log(response.status)
        }
      });
      handler.openIframe();
    }
  }



  return (
    <Box 
    style={{ 
      minHeight: ' calc(100vh - 70px)',
      width: '100%', 
      backgroundColor: '#1f1f1f',
      padding:'30px',
      display:'flex',
      alignItems:'center', 
      justifyContent:"center" ,
    }}>



      <Box style={{
             display:'flex',
        flexDirection:'column',
        justifyContent:'space-evenly',
        borderRadius: '5px',
        backgroundColor: 'rgba(0,0,0,0.5)',
        opacity: '0.7',
        borderRadius: '5px',
        padding: '20px',
        width: '50%',
        height: '100%'
      }}>
        <Script src="https://js.paystack.co/v1/inline.js" />


        <Box sx={{ ...loginStyles.header }}>


          {/*   <img
            src="glitch-tv.gif"
            alt="logo"
            height="105px"

            style={{ marginBottom: "5" }}
          />
    */}
          // <Box className="MuiBox-root css-17kuhbv" ></Box>
          <Typography
            variant="h4"
            align="center"
            className={"active-tv-font"}
            sx={{
              color: '#f1f1f1',
              padding: "20px",
              fontWeight: "900",
              letterSpacing:'-1px',
              fontSize: {
                md: "18px",
                xs: "20px",
              },
            }}
          >
            Enter your payment details
          </Typography>




          <Box className="flex justify-center items-center w-full h-screen  active-tv-font">
            <form id="paymentForm" className="p-5 shadow-lg space-y-8">
              <Box className="space-x-4 flex justify-between items-center w-full">
                <label style={{ color: '#f1f1f2' }} htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" placeholder="First Name" style={{
                  width: '100%',
                  padding: '12px 20px',
                  margin: '8px 0',
                  display: 'inline-block',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  boxSizing: 'border-box',
                  marginBottom: '20px'

                }} required />

              </Box>


              <Box className="space-x-4 flex justify-between items-center w-full active-tv-font">
                <label style={{ color: '#f1f1f2' }} htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" placeholder="Last Name" style={{
                  width: '100%',
                  padding: '12px 20px',
                  margin: '8px 0',
                  display: 'inline-block',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  boxSizing: 'border-box',
                  marginBottom: '20px'
                }} required />
              </Box>






              <Box className="space-x-4 flex justify-between items-center w-full  active-tv-font">
                <label style={{ color: '#f1f1f2' }} htmlFor="email">Email Address</label>
                <input type="email" id="email-address" placeholder="Email address" style={{
                  width: '100%',
                  padding: '12px 20px',
                  margin: '8px 0',
                  display: 'inline-block',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  boxSizing: 'border-box',
                  marginBottom: '45px'
                }} required></input>
              </Box>

              <Box className="space-x-4 flex justify-between items-center w-full  active-tv-font">
                {/* <label style={{ color: '#f1f1f2' }} htmlFor="subscription">Subscription Type</label>
                <select onChange={() => setAmount(amount)
                }
                  style={{
                    width: '100%',
                    padding: '12px 20px',
                    margin: '8px 0',
                    display: 'inline-block',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    boxSizing: 'border-box',
                  }} required >
                  <option value="none" selected disabled hidden>Select Subscription Option</option>
                  <option onClick={() => setAmount(2)}>Annual-2</option>
                  <option onClick={() => setAmount(1)}>Monthly-1</option>
                </select> */}
              </Box>
              <Box className="space-x-4 flex justify-between items-center w-full  active-tv-font">
                <label style={{ color: '#f1f1f2' }} htmlFor="email">Subscription Type</label>
              </Box>
              <Box className="space-x-4 flex justify-between items-center w-full  active-tv-font">
                {/* <label style={{ color: '#f1f1f2' }} htmlFor="amount">Amount</label>
                <input type="tel" id="amount" value={amount} style={{
                  width: '100%',
                  padding: '12px 20px',
                  margin: '8px 0',
                  display: 'inline-block',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  boxSizing: 'border-box',
                }} required /> */}

                <Select sx={{ background:'#111' , height: '45px', width: '100%' }} onChange={subscriptionType}>
                  <MenuItem value="monthly" >Monthly : R50 </MenuItem>
                  <MenuItem value="annual">Annual : R450 </MenuItem>

                </Select>

                {prices.map((p) => (
                  <input key="" type="tel" id="amount" value={p.price} required />
                ))}


              </Box>


              <Box>
                <button className="active-tv-font" style={{
                  width: '50%',
                  // position: 'absolute',
                  // left: '26%',
                  // right: '24%',
                  //   backgroundColor: '#4CAF50',
                  backgroundColor: '#fff203',
                  color: '#000',

                  padding: '14px 20px',
                  //   margin: '8px 0',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  bottom: '20px',
                  opacity: '1',
                  zIndex: '1',
                  bottom: '25px',
                  margin: '18px 0',
                  width:'100%'

                }}> Pay </button>
              </Box>


            </form>

          </Box>
        </Box>

      </Box >
    </Box >


  )

}


const loginStyles = {
  container: {
    minHeight: "125vh",
    width: "100%",
    background: "url('active-tv-login-test1.png')",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: {
      md: 0,
      sm: 0,
      xs: 0,
    },
  },
  contentCover: {
    minHeight: {
      lg: "894px",
      md: "894px",
      sm: "900px",
      xs: "900px",
    },
    width: "1140px",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: {
      lg: 0,
      md: 0,
      sm: "0 45px",
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
    padding: "20px 0",
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
    fontSize: 10
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
    position: 'absolute',
    right: '10px',
    bottom: '5px',
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
};