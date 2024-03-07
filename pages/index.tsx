import React from 'react'
import Layout from './Components/Layout'
import AllPages from './Components/AllPages'
import Header from './Components/Header'
import { Montserrat } from 'next/font/google'
 
const montserrat = Montserrat({
  subsets: ['latin'],
})
const index = () => {
  return (
    // <Layout>
    <div className={`${montserrat.className}`}>
      <Header />
      <AllPages />
    </div>
    /* </Layout>  */
  )
}

export default index