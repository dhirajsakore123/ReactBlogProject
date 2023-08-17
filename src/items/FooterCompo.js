import React from 'react'
import {  useNavigate } from 'react-router-dom'
const FooterCompo = () => {
    const navigate=useNavigate()
   
        
  return (
    
    <div className='foot'>
      
    <div className='foot1'>
    <div className='footinner'>
      <div><span className='the white'>The</span> <span className='siren white'>Siren</span></div>
     <p className='footDes'>The Siren is a Blog website </p>
     <div className="socalmediafoot">
                       <img
                         src="https://img.icons8.com/?size=1x&id=118497&format=png"
                         className="media1"
                         alt="not found"
                       />
                       <img
                         src="https://img.icons8.com/?size=1x&id=13963&format=png"
                         className="media1"
                         alt="not found"
                       />
                       <img
                         src="https://img.icons8.com/?size=1x&id=32323&format=png"
                         className="media1"
                         alt="not found"
                       />
                       <img
                         src="https://img.icons8.com/?size=1x&id=19318&format=png"
                         className="media1"
                         alt="not found"
                       />
     </div>           
    </div>
                     <div className='box'>
                        <b className='bold1'>Categories</b>
                        <p className='footercat'onClick={()=>navigate('/bollywood')}>Bollywood</p>
                        <p className='footercat' onClick={()=>navigate('/technology')}>Techonology</p>
                        <p className='footercat'onClick={()=>navigate('/hollywood')} >Hollywood</p>
                        <p className='footercat'onClick={()=>navigate('/fitness')}>fitness</p>
                        <p className='footercat'onClick={()=>navigate('/food')} >food</p>
                     </div>
                       <div className='box'>
                        <b className='bold1'>Resources</b>
                        <p className='footercat'>Help Center</p>
                        <p className='footercat'>Careers</p>
                        <p className='footercat'>Contact Us</p>
                       </div>
                       <div className='box'>
                       <b className='bold1'>Partners</b>
                        <p className='footercat'>Become a Partner</p>
                        <p className='footercat'>Step to Integrate</p>
                        <p className='footercat'>Partner List</p>
                       </div>
                       <div className='box'>
                       <b className='bold2'>For More Information Connect us On:</b>
                       <p className='footercat'>thesiren@jasfs.com</p>
                      </div>
      </div>
      <div className='foot2'>
      <p className='white'>@Privacy Policy | Accessibility | Support</p>
      
    </div>
    </div>
    
  )
}

export default FooterCompo
