import React from 'react'
import AccountFooter from '../components/Account-Page/AccountFooter'
import MerchSection from '../components/Account-Page/MerchSection'
import ViewOnDevice from '../components/Account-Page/ViewOnDevice'

const account = () => {
  return (
    <div>
        <ViewOnDevice/>
        <MerchSection/>
        <AccountFooter/>
    </div>
  )
}

export default account