import React from 'react'
import Home from './Home'
import { useSelector } from 'react-redux'

function Center() {
 
  const items=useSelector((store)=>store.items);
  return (
    
    <div>
      <main>
        <div className="items-container">
          {items.map(item=> <Home key={item.id} item={item}/>)}
        </div>
       </main>
    </div>
  )
}

export default Center
