import React from 'react'
const Navmenu=()=>{
    const navitems = [{link:'About us'},{link:'Career'},{link:'Departments',Submenu:[{link:'Marketing & PR'},{link:'Customer Success & Sales'},{link:'IT,Product,Design & UX'},{link:'Finance & Administration'},{link:'HR & More'}]}]
    return(
        <div className="navbar">
        <img  className="logodocplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Docplanner Group"></img>
        <ul className="mainnav">
            {navitems.map(el=>(<li className="mainlist" ><a href="#">{el.link}</a> {el.Submenu && <ul className="sublist" >{el.Submenu.map(el=><li><a href="#" >{el.link}</a></li>)}</ul>}</li>))}
        </ul>
        </div>
    )
}
export default Navmenu