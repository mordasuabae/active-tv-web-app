import React from 'react'
import {Typography} from "@mui/material"

const SectionHeader = ({text , textColor}) => {
  return (
    <Typography variant={"h4"} color={textColor}> {text}</Typography>
  )
}

export default SectionHeader