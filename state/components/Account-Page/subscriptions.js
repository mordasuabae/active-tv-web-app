import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'

const Subscriptions = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
},[])
    return (
      <div className="active-tv-font" style={{ width: '100%', display: 'flex', justifyContent: 'center',minHeight: '100vh', alignItems:'center'}}>
        <div
          style={{
            border: '4px solid black',
            height: '400px',
            width: '300px',
            textAlign: 'center',
            padding: '50px 30px',
            fontFamily:"Arcade Normal",
            fontSize:"13px"
          }}
          data-aos="flip-left"
          data-aos-easing="linear"
          data-aos-duration="3000"

        >
          <h1>MONTHLY MEMBERSHIP</h1>
          <hr />
          <p>Flexible. Earn 2 Producer Points per month by going monthly.</p>
          <p>
            <strong>$3.99 / month</strong>
          </p>
          <a href="/signup">
          <button className='card'
            style={{
              border: '1px black solid',
              backgroundColor: 'white',
              width: '240px',
              borderRadius: '5px',
              height: '40px',
              textAlign: 'center',
              fontFamily:"Arcade Normal",
              fontSize:"11px"
            }}
          >
            GO MONTHLY
          </button>
          </a>
        </div>

        <div
          style={{
            border: '4px solid black',
            height: '530px',
            width: '420px',
            margin: '-30px 0 0 0',
            textAlign: 'center',
            padding: '150px 30px',
            fontFamily:"Arcade Normal",
            fontSize:"13px"
          }}
        >  <svg style={{width:'100px',height:'100px',margin:'-100px 0 0 0'}} _ngcontent-ufe-c119="" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" ><path _ngcontent-ufe-c119="" d="M39.009 24L24 39.009V46L46 24H39.009Z" fill="black"></path><path _ngcontent-ufe-c119="" d="M24 6.99244L39.009 22H46L24 0V6.99244Z" fill="black"></path><path _ngcontent-ufe-c119="" d="M6.99244 22L22 6.99244V0L0 22H6.99244Z" fill="black"></path><path _ngcontent-ufe-c119="" d="M28.3186 24L24 28.3186V35L35 24H28.3186Z" fill="black"></path><path _ngcontent-ufe-c119="" d="M17.6814 22L22 17.6814V11L11 22H17.6814Z" fill="black"></path><path _ngcontent-ufe-c119="" d="M22 28.3186L17.6814 24H11L22 35V28.3186Z" fill="black"></path></svg> 
          <h1>ANNUAL MEMBERSHIP</h1>
          <hr />
          <p>Flexible. Earn 2 Producer Points per month by going monthly.</p>
          <p>
            <strong>$39.99 / year</strong>
          </p>
          <a href="/signup">
          <button className='card'
            style={{
              backgroundColor: '#fff203',
              width: '240px',
              borderRadius: '5px',
              height: '40px',
              textAlign: 'center',
              margin: '0 0 0 0%',
              border: 'none',
              fontFamily:"Arcade Normal",
              fontSize:"12px"
            }}
          >
            SAVE WITH ANNUAL
          </button>
          </a>
        </div>

        <div
          style={{
            border: '4px solid black',
            height: '400px',
            width: '300px',
            textAlign: 'center',
            padding: '20px 30px',
            fontFamily:"Arcade Normal",
            fontSize:"10px"
          }}
          data-aos="flip-right"
          data-aos-easing="linear"
          data-aos-duration="3000"
        >
          <h1>FREE 14-DAY TRIAL</h1>
          <hr />
          <p>Every subscription gets a 14-day free trial!</p>
        </div>
      </div>
    );
  };
  
  export default Subscriptions;
  