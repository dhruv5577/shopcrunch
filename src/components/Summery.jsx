import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'


function Summery() {

  const CONVENIENCE_FEES=99;

  const bagitems=useSelector(store=>store.bag);
  //const bagitems=useSelector(store=>store.bag);
  const items=useSelector(store=>store.items);
  const list=items.filter(item=>{
    const index=bagitems.indexOf(item.id);
    return index>=0;
  })

  let totalItem=bagitems.length;
  let totalMRP=0;
  let totalDiscount=0;

  list.forEach((bagitem) => {
    totalMRP+=bagitem.original_price;
    totalDiscount+=bagitem.original_price-bagitem.current_price;
  });

  let finalPayment=totalMRP-totalDiscount+CONVENIENCE_FEES;

 return (
    <div className="bag-summary">
       
      <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">₹{CONVENIENCE_FEES}</span>
    </div>
    <hr/>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{finalPayment}</span>
    </div>
  </div>
  <button className="btn-place-order">
    <div className="css-xjhrni">PLACE ORDER</div>
  </button>
    </div>
  
  )
}

export default Summery
