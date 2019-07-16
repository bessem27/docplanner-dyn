import React from 'react'
import img1 from './images/img8.png'
import img2 from './images/img9.png'
import img3 from './images/img10.png'
import img4 from './images/img11.png'
import img5 from './images/img12.png'
import img6 from './images/img13.png'

const explist =[{img:img1,
                 tit:'Barcelona',
                 inpt:'SEE OPENINGS',
                 href:'https://www.docplanner.com' 
                },
                {img:img2,
                tit:'Istanbul',
                inpt:'SEE OPENINGS',
                href:'https://www.docplanner.com' 
                },
                {img:img3,
                tit:'Rome',
                inpt:'SEE OPENINGS',
                href:'https://www.docplanner.com' 
                },
                {img:img4,
                tit:'Mexico City',
                inpt:'SEE OPENINGS',
                href:'https://www.docplanner.com' 
                },
                {img:img5,
                tit:'Curitiba',
                inpt:'SEE OPENINGS',
                href:'https://www.docplanner.com' 
                },
                {img:img6,
                tit:'Warsaw',
                inpt:'SEE OPENINGS',
                href:'https://www.docplanner.com' 
                }
            ]

const Dest=()=>{
    return( <div className="maindest">
            <div className="maindestintro">
            <h1>Improve the lives of millions. Change yours forever</h1>
            <p>More than 1000 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and Curitiba, our search for great talent never stops.</p>
            </div>
            <div className="destinations">
           {explist.map((exp,i)=>
                <a href={exp.href} key={i} className="exp" >
                    <img src={exp.img} ></img>
                    <div className='expsub' >
                    <h3>{exp.tit}</h3>
                    {exp.inpt? <input className="bttn" value={exp.inpt} ></input>:''}
                    </div>
                </a>)
            
            }</div> </div>)
}

export default Dest