import React from 'react'
import './Header.css'
const Header = (props) => {
    return (
        <div className='header'>  

            <h1>Tech Tips</h1>
            <div className="search">
            <input type="text" onChange={props.cFun} />
            <a href="#">Search</a></div>
        </div>
    )
}

export default Header