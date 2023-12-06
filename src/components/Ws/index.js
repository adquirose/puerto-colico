import React from 'react'
import Whatsapp from './Whatsapp'

function WsWidget(){
    return(
        <div className="d-flex align-items-end flex-column pb-md-3 pb-3 pr-md-3 pr-3 fixed-bottom">
            <a href="https://api.whatsapp.com/send?phone=+56984444636" target="blank">
                <Whatsapp />
            </a>
        </div>
    )
}
export default WsWidget