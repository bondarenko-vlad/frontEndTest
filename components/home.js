import React from 'react';
import {NavLink} from 'react-router-dom'

const Home = () => {
  return <div className='menu'>
  <h2>Список тестов</h2>
  <div className='list'>
   <NavLink to='/jsTest'>На знание Javascript</NavLink>
   <NavLink to='/htmlTest'>На знание HTML</NavLink>
   <NavLink to='/cssTest'>На знание CSS</NavLink>
   </div>
   </div>
}

export default Home;
