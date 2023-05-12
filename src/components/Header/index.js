import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartIcon from "src/assets/icons/CartIcon";
import bakeryLogo from "src/assets/images/bakeryLogo.jpeg";
import { MENU_OPTIONS } from "./constant";
import { Wrapper } from "./style";

const Header = (props) => {
	const navigate = useNavigate();
	const { cartReducer } = useSelector((state) => state);

	const { totalCount = 0 } = cartReducer?.data;

	const handleRouteChange = (route) => () => {
		if (route && typeof route === "string") navigate(route);
	};

	const handleCartClick = () => {
		navigate("/cart");
	};
	return (
		<Wrapper>
			<div className="container">
				<img className="logo" src={bakeryLogo} alt="Bakery Logo" />
				<div className="menu-wrapper">
					{MENU_OPTIONS.map((item) => (
						<div key={item.label} className="menu-item" onClick={handleRouteChange(item.route)}>
							{item.label}
						</div>
					))}
				</div>
				<div className="right-icon">
					<div className="cart-icon" onClick={handleCartClick}>
						<CartIcon />
						<div className="cart-count">
							{totalCount.toString().length > 2 ? `${totalCount.toString().substring(0, 2)}..` : totalCount}
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default Header;
