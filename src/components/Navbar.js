import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import '../Navbar.css';
import { CgClose, CgMenu } from "react-icons/cg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  const menuClose = () => {
    setIsMenuOpen(false);
  }
  const [progress, setProgress] = useState(0)

  return (
    <div>
      <LoadingBar
        color='green'
        height={3}
        loaderSpeed={700}
        transitionTime={100}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

      <nav className="navbar navbar-expand-lg " id="nav">
        <div className="container-fluid">
          <Link to='/Upcoming'> <img alt="" src="../images/social.png" className='glogo' onClick={() => setProgress(100)} /> </Link>
          <div className='menu'>
            <div className="bars">
              {!isMenuOpen ? (<CgMenu onClick={menuOpen} />) : (<CgClose onClick={menuClose} />)}
            </div>
            <div className={`menu-links ${isMenuOpen ? 'Open' : ''}`}>
              <Link to='/'> <h3 className='produs' onClick={() => setProgress(100)}> Products </h3> </Link>
              <Link to='/Upcoming'> <h3 className='ph' onClick={() => setProgress(100)}> Phones </h3> </Link>
              <Link to='/Earbuds'> <h3 className='ea' onClick={() => setProgress(100)}> Earbuds </h3> </Link>
              <Link to='/Tablets'> <h3 className='ta' onClick={() => setProgress(100)}> Tablets </h3> </Link>
              <Link to='/Watch'> <h3 className='sma' onClick={() => setProgress(100)}> Watches </h3> </Link>
              <Link to='/Smarthome'> <h3 className='hom' onClick={() => setProgress(100)}> Smart Home </h3> </Link>
              <Link to='/Subscriptions'> <h3 className='subscr' onClick={() => setProgress(100)}> Subscriptions </h3> </Link>
            </div>
          </div>
          <div className="search-store">
              <img alt="" src="../images/search.png" className='gsearch' onClick={() => setProgress(100)} />
              <Link to='/Emptycart'> <img alt="" src="../images/cart.png" className='gfaq' onClick={() => setProgress(100)} /> </Link>
          </div>

          {/* <Link to='/Register'> 
  <button className='fretailersz2' onClick={() => setProgress(100)  }> Create New Account </button>
  </Link> */}

          <Link to='/Login'>
            <button className='fretailersz1' onClick={() => setProgress(100)}> Login </button>
          </Link>


          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          </div>
        </div>

      </nav>
    </div>
  )
}

export default Navbar
