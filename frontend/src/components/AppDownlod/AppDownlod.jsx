import React from 'react'
import './AppDownlod.css'
import { assets } from '../../assets/assets'
const AppDownlod = () => {
    return (
        <div className='app-downlod' id='app-downlod'>
            <p>For better experience Download<br /> Kitchen Kettle app</p>
            <div className="app-download-platform">
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" />
            </div>

        </div>
    )
}

export default AppDownlod
