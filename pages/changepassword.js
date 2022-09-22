import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Auth } from 'aws-amplify';

const background = {
  backgroundColor: "#111",
  width: "100%",
  minHeight: "calc(100vh - 70px)",
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
  outline:'none',
  padding:'0 10px',
  border:'none'
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

  const [oldPassword, setoldPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");



  const AuthResetPassword = (oldPassword, newPassword) => {
    try {
      Auth.currentAuthenticatedUser()
        .then(user => {
          return Auth.changePassword(user, oldPassword, newPassword);
        })
        .then(data => console.log(data))
        .catch(err => console.log(err));

    } catch (err) {
      console.log(err.message , 'error after password reset')
    }

  }



  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword, oldPassword) {

      // const passwordDetails = {
      //   oldPassword: oldPassword,
      //   newPassword: newPassword
      // }
      AuthResetPassword(oldPassword, newPassword)

      // console.log(passwordDetails)
      setoldPassword("")
      setnewPassword("")
    }


  };



  return (
    <div className="active-tv-font" style={background}>

      <form style={container} onSubmit={handleSubmit}>
        <h4>CHANGE PASSWORD</h4>
        <hr style={{ marginRight: "20px" }} />

        <div style={InputContainer}>
          <p>New Password</p>
          <input
            type="text"
            name="oldPassword"
            placeholder="Enter New Psssword..."
            style={inputBox}
            value={oldPassword}
            onChange={(e) => setoldPassword(e.target.value)}
          />
          <br />
          <br />
          <p>Confirm Password</p>
          <input
            type="text"
            name="newPassword"
            placeholder="Confirm New Password..."
            style={inputBox}
            value={newPassword}
            onChange={(e) => setnewPassword(e.target.value)}
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
