import React from 'react'
import { Typography } from '@mui/material'

const ShowsHeader = ({title}) => {

  return (
    <Typography sx={{color:'#fff', margin:'25px 0', fontWeight:'bold'}} variant='h3' fontSize={20}>
         {title}
    </Typography>
  )

}

export default ShowsHeader