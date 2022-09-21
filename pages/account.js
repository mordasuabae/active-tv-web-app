import React from 'react'
import AccountFooter from '../components/Account-Page/AccountFooter'
import MerchSection from '../components/Account-Page/MerchSection'
import Subscriptions from '../components/Account-Page/subscriptions'
import ViewOnDevice from '../components/Account-Page/ViewOnDevice'
import Banner from '../components/Account-Page/Banner'
import { Box } from '@mui/system'
import {useState} from 'react'



const account = () => {

const [loggedIn, setloggedIn] = useState(true)

  return (

      loggedIn  ?

    <Box>

    {"logged in"}
    
    </Box>

    :

    <Box>
        <Banner/>
        <Subscriptions/>
        <ViewOnDevice/>
        <MerchSection/>
        <AccountFooter/>
    </Box>
  )
}

export default account