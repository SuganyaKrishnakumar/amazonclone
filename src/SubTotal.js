import React, {useState, useEffect} from 'react'
import './SubTotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';


function SubTotal() {
  const [{basket}, dispatch] = useStateValue();

   const [totalCount, setTotalCount] = useState ()
   
   useEffect(() => {
        //  if(basketLength > 0){
        //    var price = 0;
        //     basket.map((values)=>{
       
        //       return price += values.price
              
              
        //     });
      
        //     setTotalCount(price) 
        //  }
   }, [])

    return (
        <div className="subtotal">
            <CurrencyFormat
        renderText={(value) => (
          <>
         
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong> {value}</strong>  
              {/* //{basket.length} */}
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
        <button>Proceed to checkout</button>
        </div>
    )
}

export default SubTotal
