import React from 'react'
import img1 from './images/img1.png'
import img2 from './images/img2.png'
const cards =[{
                   tit:'For Patients',
                   int:'Find a doctor, book a visit and solve any health-related doubt',
                   selectlist:['CHOOSE COUNTRY','Argentina','Australia','Chile','Colombia','Brazil','Mexico'],
                   image:img1,
                   color:'#00b39b'
                  },
                  {  
                   tit:'For Doctors',
                   int:'Save time managing visits and cut no-shows by half',
                   image:img2,
                   color:'#3d83df'
                  }
                ]

function Cards () {
    return cards.map((card,i)=> 
        <div key={i} className='card' style={{backgroundColor:card.color}}>
            <h3>{card.tit}</h3>
            <p>{card.int}</p>
            {card.selectlist ? <select className="select">{card.selectlist.map((el)=><option>{el}</option>)}</select> :'' }
            <img className="cardimg" src={card.image} alt=""></img>
        </div>
        )
    } 
    

export default Cards