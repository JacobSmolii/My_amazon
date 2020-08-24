import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider';

function Header() {
	// state - is a current data layer, if I distructure it I'll get `{basket=[]}`
	const [{ basket }] = useStateValue();

	// console.log(basket)

	return (
		<nav className="header">
			<Link to="/">
				<img className="header_logo" src="https://cdn.freebiesupply.com/logos/large/2x/amazon-dark-logo-png-transparent.png" alt="Amazon" />
			</Link>

			<div className="header_search">
				<input type="text" className="header_searchInput" />
				<SearchIcon className="header_searchIcon" />
			</div>

			<div className="header_nav">
				<Link to="/login" className="header_link">
					<div className="header_option">
						<span className="header_optionLineOne">Hello vsmolii</span>
						<span className="header_optionLineTwo">Sign in</span>
					</div>
				</Link>

				<Link to="/" className="header_link">
					<div className="header_option">
						<span className="header_optionLineOne">Returns</span>
						<span className="header_optionLineTwo">Orders</span>
					</div>
				</Link>

				<Link to="/" className="header_link">
					<div className="header_option">
						<span className="header_optionLineOne">Your </span>
						<span className="header_optionLineTwo">Prime</span>
					</div>
				</Link>

				<Link to="checkout" className="header_link">
					<div className="header_optionBasket">
						<ShoppingCartIcon />
						<span className="header_optionLineTwo header_basketCount" >
							{basket?.length}
						</span>
					</div>
				</Link>
			</div>
		</nav>
	)
}

export default Header
