import React from 'react'

import RandomNo from './RandomNo'


const Home = () => {
  
 
  
  return (
  <div className='flex-cont'>
    <div className='home-page'>
     <div className='home-img1 home-img'>
    
      {/* <img  className='slid' src='https://images.indianexpress.com/2023/07/AI-Safety-Body.jpg?w=640'alt='not found' />  */}
      {/* <img className='slid' src='https://www.thestatesman.com/wp-content/uploads/2022/06/maxresdefault-1-1.jpg'alt='not found' /> */}
      {/* <img className='slid' src='https://picfiles.alphacoders.com/622/62263.jpg'alt='not found' /> */}
      <img className='slid' src='https://posterspy.com/wp-content/uploads/2021/08/POSTERSFORPOSTERSPY4.jpg'alt='not found' />
      {/* <img className='slid' src='https://images.indianexpress.com/2023/07/International-Space-Station-20230726.jpg?w=640'alt='not found' /> */}
      <span className='textOn-img'>Tital Of Vertical Gallary</span>
     </div>
     <div className='home-img2 home-img'>
      <img className='slid1' alt='not found' src='https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJla2tpbmd8ZW58MHx8MHx8fDA%3D&w=1000&q=80'/>
     </div>
     <div className='home-img3 home-img'>
       <img className='slid1'alt='not found' src='https://cdn-wp.thesportsrush.com/2023/01/2f295d20-chris-bumstead-mr-olympia-titles.jpg?w=1200&q=60' />
     </div>
    </div>
    
    <div className='the-latest'>
    <h2 className=''>The Latest</h2>
  </div>


  <div className='latest-data'>
    
  <RandomNo/>
  <RandomNo/>
  <RandomNo/>
  </div>

  </div>
  )
}

export default Home