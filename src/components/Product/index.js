import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateCart } from "src/store/reducer";
import { PRODUCT_NOT_FOUND, ADD_TO_CART, GO_TO_CART } from "./constant";
import { isEmptyObject } from "src/utils/helper";
import Button from "src/UiComponent/Button";
import { Wrapper } from "./style";

const Product = (props) => {
	const params = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { allProductsReducer, cartReducer } = useSelector((state) => state);
	const { allProducts = [] } = allProductsReducer?.data;
	const { totalCount = 0, totalPrice = 0, productList = [] } = cartReducer?.data;
	const { id } = params;

	const currProduct = allProducts.find((product) => product?.id === id);

	const isExistInCart = useMemo(() => {
		const cartProduct = productList.find((product) => product.id === id);
		if (cartProduct == null) {
			return false;
		}
		return true;
	}, [currProduct, totalCount]);

	const handleCartButtonClick = () => {
		if (isExistInCart) {
			navigate("/cart");
		} else {
			const data = {
				totalCount: totalCount + 1,
				totalPrice: totalPrice + (currProduct?.price || 0),
				productList: [...productList, { ...currProduct, count: 1, totalPrice: currProduct?.price || 0 }],
			};
			dispatch(updateCart({ data }));
		}
	};

	return (
		<Wrapper>
			{!isEmptyObject(currProduct) ? (
				<div className="product-box">
					<div className="product-image">
						<img src={currProduct?.image} alt={currProduct?.alt || ""} />
					</div>
					<div className="product-info">
						<div className="info-wrapper">
							<div className="name">{currProduct?.name}</div>
							<div className="price">
								Price: {String.fromCodePoint(8377)}
								{currProduct?.price}
							</div>
							<div className="description">{currProduct?.description}</div>
						</div>
						<div className="btn-wrapper">
							<Button onClick={handleCartButtonClick}>{isExistInCart ? GO_TO_CART : ADD_TO_CART}</Button>
						</div>
					</div>
				</div>
			) : (
				<div className="product-not-found">{PRODUCT_NOT_FOUND}</div>
			)}
		</Wrapper>
	);
};

export default Product;
