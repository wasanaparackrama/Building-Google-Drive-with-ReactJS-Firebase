import React from 'react'
import GDriveLogo from '../../media/google-drive-logo.png'
const index = () => {
    return (
        <div className='header'>
            <div className="header_logo">
                <img src ={GDriveLogo} alt ="Google Drive"/>
               <span>Drive </span>
               </div>
            <div className="header_searchContainer">
            <div className="header_searchbar">

            
            </div>
            </div>
            <div className="header_icons"></div>

        </div>
    )
}

export default index
