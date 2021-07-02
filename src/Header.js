import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from "./Firebase";

function Header() {

  const [{basket,user}, dispatch] = useStateValue();

  const handleAuthentication = ()=>{
     if(user){
       auth.signOut()
     }
  }

  return (
    <div className="header">
      <Link to='/'>
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user&&'/Login'}>
          <div className="header_option">
            <span className="header__optionLineOne" onClick={handleAuthentication}>Hello {user?user.email:"Guest"}</span>
            <span className="header__optionLineTwo">{user?"Sign out":"Sign in"}</span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to='/checkout'>
        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount" >
            {basket?.length}
          </span>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
