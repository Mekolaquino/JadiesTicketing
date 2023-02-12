import React, { useRef, useEffect } from 'react'
import { Container, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import './header.css'
import { SiYourtraveldottv } from 'react-icons/si';

const nav__links = [
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/tour',
    display:'Tour'
  },
  {
    path:'/contact',
    display:'Contact'
  }
]

const Header = () => {

  const headerRef = useRef(null)
  const menuRef = useRef(null)

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', ()=> {
      if(document.body.scrollTop >80 || document.documentElement.scrollTop >80){
        headerRef.current.classList.add('sticky__header')
      }else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

useEffect (() => {
  stickyHeaderFunc()

  return window.removeEventListener('scroll', stickyHeaderFunc)
})

const toggleMenu = () => menuRef.current.classList.toggle('show__menu')

  return (
    <header className='header' ref={headerRef}>
      <Container>
        <Row>
          <div className="navWrapper d-flex align-items-center justify-content-between">

            {/* ------------logo------------- */}
            <div className="logoDiv">
              <a href="/home" className="logo flex">
                <h1><SiYourtraveldottv className="icon mb-2 py-1"/>
                Jadie's Online Ticketing & Tour</h1>
              </a>
            </div>

            {/* ------------Menu------------- */}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu d-flex align-items-center gap-5">
                {nav__links.map((item, index) => (
                  <li className="navItem" key={index}>
                    <NavLink to={item.path} className={navClass => navClass.isActive ? "active__links" : ""}
                    >
                      {item.display}</NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__rigth d-flex align-items-center gap-4">
            <span className='mobile__menu'  onClick={toggleMenu}>
                <i class='ri-menu-line'></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header