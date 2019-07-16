import React from 'react'
const footcont =[{href:'https://www.znanylekarz.pl/?_ga=2.56412779.1500804242.1560610755-1782404662.1560610755',
                 coun:'Poland'
                 },
                 {href:'https://www.doktortakvimi.com/?_ga=2.56412779.1500804242.1560610755-1782404662.1560610755',
                  coun:'Turkey'},
                 {href:'https://www.doctoralia.es/',
                  coun:'Spain'},
                 {href:'https://www.miodottore.it/?_ga=2.131393231.1500804242.1560610755-1782404662.1560610755',
                  coun:'Italy'},
                 {href:'https://www.znamylekar.cz/',
                  coun:'Czech Republic'},
                 {href:'https://www.doctoralia.com.mx/',
                  coun:'Mexico'},
                 {href:'https://www.doctoralia.co/',
                  coun:'Colombia'},
                 {href:'https://www.doctoralia.com.br/',
                  coun:'Brazil'},
                 {href:'https://www.doctoraliar.com/',
                  coun:'Argentina'},
                 {href:'https://www.doctoralia.cl/',
                 coun:'Chile'}    

                ]
    
const Foot=()=>{
    return(
        <div>
        <div className='mainfooter'>
        <p>We are leaders in 10 countries: </p>
        <ul className='footlist' >
        {footcont.map((item,i)=>
            (<li key={i}><a href={item.href} >{item.coun}</a></li>))}
        </ul>
        </div>
        <p className='copy'>This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.

        www.docplanner.com © 2019</p></div>
        )

        
}
export default Foot