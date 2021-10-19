import React,{useState} from 'react'
import NavItems from './NavItems'
import './NavigationStyle.css'

import {faPlane,faTrain,faBus,faTaxi} from '@fortawesome/free-solid-svg-icons'

export default function Navigation() {
    
    const [status,setStatus]=useState(["active","disabled","disabled","disabled"]);
  function updateStatus(x){
      var arr=[]
      
      for(let i=0;i<4;i++)
      {
          arr[i]="disabled"
      }
      arr[x]="active"
    setStatus(arr);
    
  }


    return (
        <div className="Navbar">
          <div  onClick={()=>{updateStatus(0) }} className="inline">
            <NavItems source={faPlane} text="Flight" status={status[0]}/>
        </div>
        <div  onClick={()=>{updateStatus(1) }} className="inline">
            <NavItems source={faTrain} text="Trains" status={status[1]} />
            </div>
            <div  onClick={()=>{updateStatus(2) }} className="inline">
            <NavItems source={faBus} text="Buses" status={status[2]} />
            </div>
            <div  onClick={()=>{updateStatus(3) }} className="inline">
             <NavItems source={faTaxi} text="Cabs" status={status[3]} />
             </div>
        </div>
    )
}
