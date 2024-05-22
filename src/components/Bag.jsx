import React from 'react'
import Summery from './Summery'
import BagItem from './BagItem'
import { useSelector } from 'react-redux'



function Bag() {
  const bagitems=useSelector(store=>store.bag);
  const items=useSelector(store=>store.items);

  const list=items.filter(item=>{
    const index=bagitems.indexOf(item.id);
    return index>=0;
  })
  return (
    <>
    
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {list.map(item => <BagItem item={item}/>)}
          
        </div>
        <Summery/>
      </div>
    </main>
   
    
    </>
  )
}

export default Bag
