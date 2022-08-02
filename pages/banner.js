// import Link from 'next/link';
// import Box from '@mui/material/Box';

// FUNCTION

// const Banner = () => {
//   return (
//     <div>Banner</div>
//   )
// }

// export default Banner
const Banner = () => {
    return (
      
       
      <div className="active-tv-font" style={{  width: '100%', height: '900px',backgroundImage:`url('hero-bg.jpg')`,backgroundRepeat:'no-repeat'}}>
        <div
          style={{
            // border: '1px solid white',
            color: 'white',
            margin: '-8px 0 0 0',
            height: '600px',
            padding: '180px 70px',
            
          }}
        >
          <h1 style={{ letterSpacing: '3px', fontSize: '45px' }}>
            JOIN THE CREW
          </h1>
          <ul>
            <li style={{ color: '#fff203', margin: '10px 0 0 0' }}>
              <p style={{ color: 'white' }}>Watch exclusive content ad-free</p>
            </li>
            <li style={{ color: '#fff203', margin: '10px 0 0 0' }}>
              <p style={{ color: 'white' }}>YOU decide what shows get made</p>
            </li>
            <li style={{ color: '#fff203', margin: '10px 0 0 0' }}>
              <p style={{ color: 'white' }}>15% off on ALL merch</p>
            </li>
            <li style={{ color: '#fff203', margin: '10px 0 0 0' }}>
              <p style={{ color: 'white' }}>Watch on ANY device</p>
            </li>
          </ul>
          <a href="/Form">
          <button className='card'
            style={{
              backgroundColor: '#fff203',
              width: '423px',
              height: '50px',
              borderRadius: '5px',
              border: 'none',
              margin: '35px 0 0 2px',
            }}
          >
            START WITH A FREE TRAIL!
          </button>
          </a>
          <p style={{ margin: '20px 0 0 95px' }}>
            Join in minutes. Cancel any time.
          </p>
       
        </div>
      </div>
    );
  };
  
  export default Banner;
  