import React from 'react'
import img1 from './images/img4.png'
import img2 from './images/img5.png'
import img3 from './images/img6.png'
import img4 from './images/img7.png'
const explist=[{ img:img1,
                 tit:'Leader in 10 countries',
                 plc:'Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile'    
                 },
                 { img:img2,
                 tit:'1.5 million appointments',
                 plc:'booked last month'    
                 },
                 { img:img3,
                 tit:'30 million unique patients',
                 plc:'visit us every month'    
                 },
                 { img:img4,
                 tit:'2 million active doctors',
                 plc:'trust in our solutions'    
                 },

              ]
const Exper= ()=>{
    return (   
     explist.map((exp,i) => 
    <div key={i} className='exp1'>
        <img src={exp.img} alt="" ></img>
        <h2>{exp.tit}</h2>
        <p>{exp.plc}</p>
    </div>
    
    ))}

export default Exper