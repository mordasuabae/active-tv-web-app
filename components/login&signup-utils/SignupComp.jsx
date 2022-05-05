import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {useState , useEffect} from 'react'
import useRouter from 'next/router'










const signStyles ={
  container:{
        minHeight:'125vh',
        width:'100%',
        background:"url('login-bg.jpg')",
        display:'flex',
        justifyContent:'center',
        alignItems:'center',    
  },
  contentCover:{
      height:'894px',
      width:'1140px',
      background:"rgba(0,0,0,0.5)",
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
  },
  formContainer:{
       border:'1px solid red',
       height:'100%',
       width:'50%'
  }

}


// extended responsive design
let classNames = ['container', 'contentCover', 'formContainer']




const SignupComp = () => {
  return (
   //  const [] = useState()



    <Box className={classNames[0]} sx={{...signStyles.container}}>
          <Box sx={{...signStyles.contentCover}}>
                 <Box className={classNames[2]} sx={{...signStyles.formContainer}}>
                             
                 </Box>
          </Box>
    </Box>
  )
}

export default SignupComp