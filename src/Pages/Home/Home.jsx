import React from 'react'
import logo from '../../assets/LogoBlue&Black.svg'
import Header from '../../components/Header/Header'
import { Link } from 'react-router-dom'
import Projects from '../Projects/Projects'
import './Home.scss'

const Home = () => {
  return (
    <div className='home'>

      <div className='home__container'>
        <div className='home__subcontainer'>
          <img src={logo} className='home__logo' />
          <h1 className='home__welcome'>Hi, welcome!</h1>
          <div className='home__inputs'>
            <input className='home__input' placeholder='Name or Username' type='text' />
            <input className='home__input' placeholder='Password' type='password' />
          </div>
          <h4 className='home__forgot-password'>Forgot password ?</h4>
          <Link to={'./projects'}><button className='home__login-button'>LOGIN</button></Link>
          <h4 className='home__create-account'>Create an account, click here</h4>
        </div>
      </div>

    </div>
  )
}

export default Home