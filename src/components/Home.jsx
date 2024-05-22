import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bagactions } from '../Store/bagdetails';
import { MdAddCircle } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";



function Home({item}) {

  const dispatch=useDispatch();
  const bagitems=useSelector(store=>store.bag);
  const element=bagitems.indexOf(item.id)>=0;



  const handleclickadd=()=>{
    dispatch(bagactions.addtobag(item.id));
  }

  const handleclickrmv=()=>{
    dispatch(bagactions.removefrombag(item.id));
  }


  return (
    <>
      <div className="item-container">
      <img className="item-image" src={item.image} alt="item image"/>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name"> {item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      
      {element ? 
      (<button type="button" onClick={handleclickrmv} className="btn-rmv-bag btn btn-danger"><AiFillDelete />
      Remove</button>) : 
      (<button type="button" onClick={handleclickadd} className="btn-add-bag btn btn-success"><MdAddCircle />
      Add to Cart</button>)
      }
      
    </div>
    </>
  )
}

export default Home
