const Form = () => {
    return (
      <div className="active-tv-font"
        style={{
          border: '2px solid black',
          width: '1100px',
          height: '900px',
          backgroundColor: 'black',
          color: 'white',
          padding: '0px 280px',
          margin: '12px 0 20px 120px',
          
        }}
      >
        <a href="/account" className="popclose">
          &times;
        </a>
        <h2 style={{ textAlign: 'center' }}>Create your Account</h2>
        <p style={{ textAlign: 'center' }}>
          Getting started is easy, just a few steps and you can immerse yourself
          with the latest Corridor content!
        </p>
        <p>Display Name</p>
        <span>
          <input
            style={{ width: '100%', height: '50px', border: 'none' }}
            type="text"
            name="fname"
            placeholder="Enter your display name"
          ></input>
        </span>
        <p>Email address</p>
        <span>
          <input
            style={{ width: '100%', height: '50px', border: 'none' }}
            type="text"
            name="fname"
            placeholder="Enter your email address"
          ></input>
        </span>
        <p>Password</p>
        <span>
          <input
            style={{ width: '100%', height: '50px', border: 'none' }}
            type="text"
            name="fname"
            placeholder="Enter your password"
          ></input>
        </span>
  
        <label style={{ display: 'flex' }}>
          <input style={{ margin: '20px 0 0 0' }} type="checkbox"></input>
          <p style={{ padding: '0 10px' }}>
            I have read and accept the Privacy Policy
          </p>
        </label>
        <label style={{ display: 'flex' }}>
          <input style={{ margin: '20px 0 0 0' }} type="checkbox"></input>
          <p style={{ padding: '0 10px' }}>
            I have read and accept the Terms and Conditions
          </p>
        </label>
  
        <span>
          <button
            style={{
              width: '100%',
              height: '50px',
              border: 'none',
              backgroundColor: 'yellow',
            }}
          >
            <p>Sign in with a 14-day free trail</p>
          </button>
        </span>
        <span>
          <h2 style={{ textAlign: 'center', fontSize: '15px' }}>OR</h2>
        </span>
        <span>
          <button
            style={{
              width: '100%',
              height: '50px',
              border: '2px white solid',
              color: 'white',
              backgroundColor: 'black',
            }}
          >
            <p>Continue with Google</p>
          </button>
        </span>
        <br />
  
        <button
          style={{
            width: '100%',
            height: '50px',
            border: '2px white solid',
            color: 'white',
            backgroundColor: 'black',
            margin:'10px 0 0 0'
          }}
        >
          <p style={{margin:'0 0 0 0'}}>Continue with Apple</p>
        </button>
        <div style={{ display: 'flex', margin: '0 0 0 25%' }}>
          <p style={{ textAlign: 'center' }}>Already have an account? </p>
          <a>
            <strong>
              <p style={{ textAlign: 'center', padding: '0 5px' }}> Login Here</p>
            </strong>
          </a>
        </div>
      </div>
    );
  };
  
  export default Form;
  