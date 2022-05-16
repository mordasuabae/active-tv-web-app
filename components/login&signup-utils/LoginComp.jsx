import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {useState , useEffect} from 'react'
import useRouter from 'next/router'
import { handleBreakpoints } from '@mui/system';




const loginStyles ={
   container:{
         minHeight:'125vh',
         width:'100%',
         background:"url('login-bg.jpg')",
         display:'flex',
         justifyContent:'center',
         alignItems:'center',    
         padding:{
           md:0,
           sm:0,
           xs:0
           
         }
   },
   contentCover:{
       height:{
         lg:'894px',
         md:'894px',
         sm:'900px',
         xs:'900px'
       },
       width:'1140px',
       background:"rgba(0,0,0,0.5)",
       display:'flex',
       justifyContent:'center',
       alignItems:'center',
       padding:{
        lg:0,
        md:0,
        sm:0,
        xs:0
       }
       
   },
   formContainer:{
        border:'1px solid red',
        height:'100%',
        width:{
          md:'50%',
          sm:'100%',
          xs:'100%'
        },
        padding:{
          md:0,
          sm:0,
          xs:0
        }
   }

}



const LoginComp = () => {

// state to atore user info
//  const [] = useState()


  return (
    <Box sx={{...loginStyles.container}}>
          <Box sx={{...loginStyles.contentCover}}>
                 <Box  sx={{...loginStyles.formContainer}}>
                               
                 </Box>
          </Box>
    </Box>
  )
}

export default LoginComp