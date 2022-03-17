// tsrafce
import React from 'react'
import Navbar from './Navbar'
import Search from './Search'

type Props = {}

const Header = (props: Props) => {
  return (
      
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <Navbar />
                <Search />
                
                </div>
            </div>
            </nav>
            
  )
}

export default Header