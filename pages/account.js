import React from 'react'
import AccountFooter from '../components/Account-Page/AccountFooter'


import MerchSection from '../components/Account-Page/MerchSection'
import Subscriptions from '../components/Account-Page/subscriptions'
import ViewOnDevice from '../components/Account-Page/ViewOnDevice'
import Banner from './banner'


const account = () => {
  return (
    <div>
        <Banner/>
        <Subscriptions/>
        <ViewOnDevice/>
        <MerchSection/>
        <AccountFooter/>
    </div>
  )
}

export default account