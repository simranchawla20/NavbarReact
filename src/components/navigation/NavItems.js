import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './NavItems.css'

export default function NavItems(props) {



    return (
        <div className={props.status} >
        <div className="content">
            <span><FontAwesomeIcon icon={props.source}/></span>
            <span className="marginLeft">{props.text}</span>
            </div>
        </div>
        
    )
}
