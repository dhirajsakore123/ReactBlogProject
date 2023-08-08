import React, { useContext } from 'react'
import { Store } from './DataStore'
import { NavLink } from 'react-router-dom'

const RandomCompo2 = () => {
    const [contextData]=useContext(Store)
    const random=Math.floor(Math.random()*75)
  return (
    <div>
      {
      contextData.filter((item)=>item.id===random).map((item,index)=>{
        return(
            <NavLink   to={`/${item.id}`}
            style={{ textDecoration: "none", color: "black" }}>
           <div className='top1post'key={index}>
          <img className='firstpost-img' src={item.image} alt='not found'/>
          <div className='flexbox'>
          <p className='topdeccription paragraph'>{item.heading}</p>
            <h1 className='countes'>1</h1>
            </div>
            </div>
          </NavLink>
        )
       })
      }
    </div>
  )
}

export default RandomCompo2
