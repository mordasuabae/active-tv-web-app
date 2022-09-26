import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

const AccountLoggedIn = () => {

  return (
    <Box sx={styles.container}>
         <Box sx={styles.contentBox}>
            {/* insert code here */}
  
         </Box>
    </Box>
  )
}

export default AccountLoggedIn


const styles = {
    container:{
      height:'calc(100vh - 70px)',
      background: "url('active-tv-login-test1.png')",
      // backgroundSize:'cover',
      display:'flex',
      alignItems:'center',
      width:'100%',
      justifyContent:'center'
    },
    contentBox:{
        width:'75%',
        background:'rgba(0,0,0,0.7)',
        height:'90%'
    }
}