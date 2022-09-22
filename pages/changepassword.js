import React, { useState, useEffect } from "react";
import Link from "next/link";

const background = {
  backgroundColor: "#111",
  width: "100%",
  minHeight: "88.8vh",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  background: "url('active-tv-login-test1.png')",
};

const container = {
  // border: "1px solid yellow",
  width: "800px",
  height: "440px",
  flexDirection: "column",
  paddingLeft: "50px",
  paddingTop: "30px",
  background: "rgba(0,0,0,0.6)",
  
};

const InputContainer = {
  display: "flex",
  flexDirection: "column",
  marginTop: "30px",
  fontSize: "10px",
};

const inputBox = {
  width: "700px",
  height: "30px",
  fontSize: "13px",
};

const button = {
  border: "1px solid yellow",
  background: "transparent",
  color: "yellow",
  marginTop: "30px",
  width: "180px",
  cursor: "pointer",
  fontSize: "10px",
};

const buttonTwo = {
  border: "1px solid white",
  background: "transparent",
  color: "white",
  marginTop: "20px",
  width: "250px",
  cursor: "pointer",
  fontSize: "10px",
};

function changepassword() {
  // const initialValues = { newpassword: "", confirmpassword: "" };
  // const [formValues, setFormValues] = useState(initialValues);
  // const [formErrors, setFormErrors] = useState({});
  const [newPassword ,setNewPassword] = useState("");
  const [confirmPassword ,setConfirmPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    if(confirmPassword,newPassword){
      const passwordDetails = {
        newPassword:newPassword,
        confirmPassword:confirmPassword
      }
        
      console.log(passwordDetails)
      setNewPassword("")
      setConfirmPassword("")
    }


  };

  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(formValues);
  //   }
  // }, [formErrors]);

  // const validate = (values) => {
  //   const errors = {};
  //   if (!values.newpassword) {
  //     errors.newpassword = "password is required!";
  //   }
  //   if (!values.confirmpassword) {
  //     errors.confirmpassword = "newpassword is required!";
  //   }
  //   return errors;
  // };

  return (
    <div className="active-tv-font" style={background}>
     
      <form style={container} onSubmit={handleSubmit}>
        <h4>CHANGE PASSWORD</h4>
        <hr style={{ marginRight: "20px" }} />

        <div style={InputContainer}>
          <p>New Password</p>
          <input
            type="text"
            name="newpassword"
            placeholder="Enter New Psssword..."
            style={inputBox}
            value={newPassword}
            onChange={(e)=>setNewPassword(e.target.value)}
          />
          <br />
          <br />
          <p>Confirm Password</p>
          <input
            type="text"
            name="confirmpassword"
            placeholder="Confirm New Password..."
            style={inputBox}
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
        
            <button type="submit" style={button} className="active-tv-font">
              <p className="changepassword">Change Password</p>
            </button>

          <Link href="/">
            <button style={buttonTwo} className="active-tv-font">
              <p className="backtoyouraccount">Back To Your Account</p>
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default changepassword;
