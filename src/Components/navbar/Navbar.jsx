import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo1.svg";
import { useSelector } from "react-redux";
import pro from '../../assets/pro.svg';


// BEM --> Block Element Modifier

const Menu = () => (
  <>
    <p>
      <Link to='/'>Inspiration</Link>
    </p>
    <p>
      <Link to='/home'>Home</Link>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const user = useSelector((state) => state.data.user);
  // {hide ? (
  //   </>
  // ) : (
  //   </>
  // )}

  return (
    <div className='ss__navbar'>
      <div className='ss__navbar-links'>
        <div className='ss__navbar-links_logo'>
          <Link to='/'>
            <img src={logo} alt='logo' />
          </Link>
        </div>
      </div>
      <div className='ss__navbar-links_container'>
        <Menu />
      </div>
      {user ? (
        <div className='ss__navbar-sign'>
          <Link to='/profile'>
            <img src={pro} alt='logo' />
          </Link>
        </div>
      ) : (
        <div className='ss__navbar-sign'>
          <Link to='/signin'>
            <p>Sign In</p>
          </Link>
          <Link to='/signup'>
            <button type='button'>Sign Up</button>
          </Link>
        </div>
      )}
      <div className='ss__navbar-menu'>
        {toggleMenu ? (
          <RiCloseLine
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className='ss__navbar-menu_container scale-up-center'>
            <div className='ss__navbar-menu_container-links'>
              <Menu />

              
              {user ? (
        <div className='ss__navbar-menu_container-links-sign'>
          <Link to='/profile'>
            <img src={pro} alt='logo' />
          </Link>
        </div>
      ) : (
        <div className='ss__navbar-menu_container-links-sign'>
                <p>Sign In</p>
                <button type='button'>Sign Up</button>
              </div>
      )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
