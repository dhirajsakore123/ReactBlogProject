import React, { useContext } from 'react'
import { Store } from './DataStore'
import { NavLink } from 'react-router-dom'


const ContentFoot = (props) => {
    const [content]=useContext(Store)
    console.log(props.cat)
    console.log(props.id)
    const random = Math.floor(Math.random()*10)
    
  return (
   
    <>
    {
        content.filter((item)=>item.category === props.cat && item.id !== props.id).slice(random , random+3).map((item,index)=>{
        return(
           <>
          
            <div className="cards" key={index}>
            <NavLink to={`/${item.id}` }
    style={{ textDecoration: "none", color: "black" }}>
            <img
              src={item.image}
              alt="not found"
              className="last-img"
            />
            <p className="pstyle">
              The middle class can no longer own a home in
              Switzerland, according to Martin Neff, chief
              economist at Raiffeisen Bank.
            </p>
            <div className="profile">
              <img
                className="profilepic3"
                src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:b8a8258d-7b0b-4042-9818-a758226f5b5c;revision=0?component_id=5e9582fc-efba-45da-9853-682fd88122a9&api_key=CometServer1&access_token=1690653480_urn%3Aaaid%3Asc%3AUS%3Ab8a8258d-7b0b-4042-9818-a758226f5b5c%3Bpublic_ba36380504d4daa61391bc734a30974ca83f8cd7"
                alt="not found"
              />
              <p
                style={{ color: "#d1caca", fontSize: "12px" }}
              ></p>
              <b style={{ paddingTop: "4.5%" }}>
                Dhiraj Sakore
                <br />
                <p
                  style={{ color: "#d1caca", fontSize: "12px" }}
                >
                  Aug 10: (4min Read)
                </p>
              </b>
            </div>
            </NavLink>
          </div>
          
           </>
          
        )
    })
}
  </>     
   
  )
}

export default ContentFoot
