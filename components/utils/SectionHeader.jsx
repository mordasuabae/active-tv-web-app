import React from 'react'
import {Typography} from "@mui/material"

const SectionHeader = ({text , textColor , margin}) => {
  return (
    <Typography sx={{marginTop:'24px'}} className="active-tv-font" fontSize={"24px"} fontWeight={'550'} color={textColor}> {text}</Typography>
  )
}

export default SectionHeader