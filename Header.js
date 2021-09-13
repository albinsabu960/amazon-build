import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './Stateprovider';
import { auth } from './firebase';
function Header() {
const[{basket,user},dispatch]=useStateValue();
const handleAuthentication=()=>{
    if(user){
        auth.signOut();
    }
}

    return (
        <div className="header">
            <Link to ="/home">
            <img  className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"alt=""/>
            </Link>
            <div className="header__search">
                
                <input className="header__searchInput" type="text"/>
                <SearchIcon className="header__searchIcon"/>

            </div>

            <div className="header__searchNav">
                <Link to={!user && "/login"}>
                        <div onClick={handleAuthentication} className="header__option">
                            <span className="header__optionOne">Hello Guest</span>
                            <span className="header__optionTwo"> {user? 'Sign out':'Sign in'}</span>
                        </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionOne"> returns </span>
                    <span className="header__optionTwo"> &orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionOne">your </span>
                    <span className="header__optionTwo">prime</span>
                </div>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="hader__optionLineTwo header__basketCount">{basket?.length}</span>
                </div>

                </Link>
                

                


            </div>
        </div>
        
    )
}

export default Header
