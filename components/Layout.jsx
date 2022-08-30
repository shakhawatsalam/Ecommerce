import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
const Layout = ({children}) => {
  return (
    <div className="layout">
      <Head>
        <title>Music Store</title>
      </Head>
      <header>
        <Navbar>

        </Navbar>
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default Layout