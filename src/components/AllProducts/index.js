import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import allProductBanner from "../../assets/images/allProductBanner.jpeg";
import Dropdown from "src/UiComponent/Dropdown";
import { deepClone, isEmptyObject } from "src/utils/helper";
import { setAllProductsSuccess } from "./reducer";
import { SORT_OPTIONS } from "./constant";
import { Wrapper } from "./style";

const AllProducts = (props) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { allProductsReducer } = useSelector((state) => state);
	const { allProducts = [], sortVal = {} } = allProductsReducer?.data;

	const [sortValue, setSortValue] = useState(sortVal);

	const handleProductClick = (id) => () => {
		if (id && typeof id === "string") navigate(`/product/${id}`);
	};

	const onChange = (selectedObj) => {
		setSortValue(selectedObj);
		dispatch(setAllProductsSuccess({ data: { allProducts, sortVal: selectedObj } }));
	};

	useEffect(() => {
		if (!isEmptyObject(sortValue)) {
			let updatedAllProducts = deepClone(allProducts);
			if (sortValue?.value === SORT_OPTIONS?.PRICE_HIGH_TO_LOW?.value) {
				updatedAllProducts = updatedAllProducts.sort((a, b) => b?.price - a?.price);
			} else if (sortValue?.value === SORT_OPTIONS?.PRICE_LOW_TO_HIGH?.value) {
				updatedAllProducts = updatedAllProducts.sort((a, b) => a?.price - b?.price);
			}
			
			dispatch(setAllProductsSuccess({ data: { allProducts: updatedAllProducts, sortVal } }));
		}
	}, [sortValue]);

	return (
		<Wrapper>
			<div className="banner" style={{ backgroundImage: `url(${allProductBanner})` }}>
				<div className="heading">ALL PRODUCTS</div>
			</div>
			<div className="horizontal-line"></div>
			<div className="sort-section">
				<Dropdown className="dropdown" label="Sort" options={Object.values(SORT_OPTIONS)} value={sortValue} onChange={onChange} />
			</div>
			<div className="all-product-wrapper">
				{allProducts.map((product) => (
					<div key={product.id} className="product-box" onClick={handleProductClick(product?.id)}>
						<img src={product.image} />
						<div className="product-info">
							<div className="product-name">{product?.name || ""}</div>
							<div className="product-price">
								Price: {String.fromCodePoint(8377)}
								{product?.price}
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="horizontal-line"></div>
		</Wrapper>
	);
};

export default AllProducts;
