import React from "react";
import { useNavigate } from "react-router-dom";
import homePage from "src/assets/images/homePage.jpeg";
import allProducts from "../../assets/images/allProductBanner.jpeg";
import Button from "src/UiComponent/Button";
import { Wrapper } from "./style";

const HomePage = (props) => {
	const navigate = useNavigate();
	const onClick = () => navigate("/all-products");
	return (
		<Wrapper>
			<div className="homepage-image" style={{ backgroundImage: `url(${homePage})` }}></div>
            <div className="horizontal-line"></div>
			<div className="product-section">
				<div className="product-image" style={{ backgroundImage: `url(${allProducts})` }}></div>
				<div className="product-info">
					<Button onClick={onClick}>EXPLORE ALL PRODUCTS</Button>
				</div>
			</div>
            <div className="horizontal-line"></div>
		</Wrapper>
	);
};

export default HomePage;
