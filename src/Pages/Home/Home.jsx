import React from 'react'
import logo from '../../assets/LogoBlue&Black.svg'
import { Link } from 'react-router-dom'
import './Home.scss'

const Home = () => {
  return (
    <div className='home'>

        <div className='home__master-container'>
          <div className='home__first'>Make it easier to</div>
          <div className='home__second'>manage construction.</div>
          <div className='home__text'>Take control of construction outcomes, minimize risk and protect profits with PlanBuild’s top-rated construction management platform.</div>
        </div>
      
      <div className='home__container'>

        <div className='home__subcontainer'>
          <img src={logo} className='home__logo' alt='' />
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