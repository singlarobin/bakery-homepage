import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deepClone } from "src/utils/helper";
import { updateCart } from "src/store/reducer";
import DeleteIcon from "src/assets/icons/DeleteIcon";
import Button from "src/UiComponent/Button";
import { EMPTY_CART, PLACE_ORDER, EXPLORE_PRODUCTS } from "./constant";
import { Wrapper } from "./style";

const Cart = (props) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { cartReducer } = useSelector((state) => state);
	const { totalCount, totalPrice, productList = [] } = cartReducer?.data;

	const updatedCount = (id) => (e) => {
		let value = e.target.value;
		value = Number(value);

		const currProduct = productList.find((product) => product?.id === id);
		let updatedProduct = deepClone(currProduct);
		if (currProduct) {
			const pricePerProduct = currProduct.price;
			const oldCount = currProduct.count;
			updatedProduct = {
				...updatedProduct,
				totalPrice: pricePerProduct * value,
				count: value,
			};

			let updatedProductList = deepClone(productList);
			updatedProductList = updatedProductList.map((product) => {
				if (product?.id === id) {
					return updatedProduct;
				}
				return product;
			});

			const data = {
				productList: updatedProductList,
				totalCount: totalCount + (value - oldCount),
				totalPrice: totalPrice + (value - oldCount) * pricePerProduct,
			};
			dispatch(updateCart({ data }));
		}
	};

	const removeProduct = (id) => () => {
		const currProduct = productList.find((product) => product?.id === id);
		if (currProduct) {
			let updatedProductList = deepClone(productList);
			updatedProductList = updatedProductList.filter((product) => product?.id !== id);
			const data = {
				productList: updatedProductList,
				totalCount: totalCount - (currProduct.count || 0),
				totalPrice: totalPrice - (currProduct.totalPrice || 0),
			};
			dispatch(updateCart({ data }));
		}
	};

	const handlePlaceOrder = () => {
		console.log("Cart Data >>");
		console.log(`Total Items: ${totalCount}, Total Price: ${String.fromCodePoint(8377)}${totalPrice}`);
		console.log("Product Details added in cart >>", productList);
		alert("Check console for Details!!");
	};

	const handleExploreProducts = () => navigate("/all-products");

	return (
		<Wrapper>
			{productList.length > 0 ? (
				<div className="cart-wrapper">
					<div className="product-list">
						{productList.map((product) => {
							return (
								<div key={product?.id} className="product-box">
									<div className="product-image">
										<img src={product?.image} alt={product?.alt || ""} />
									</div>
									<div className="product-info">
										<div className="name mb20">{product?.name}</div>
										<div className="product-count mb20">
											<div>Count: </div>
											<input
												className="count-input"
												type="number"
												value={product?.count || 0}
												min={1}
												onChange={updatedCount(product?.id)}
											/>
										</div>
										<div className="price">
											Price: {String.fromCodePoint(8377)}
											{product?.totalPrice}
										</div>
									</div>
									<div className="delete-icon-wrapper" onClick={removeProduct(product?.id)}>
										{" "}
										<DeleteIcon />
									</div>
								</div>
							);
						})}
					</div>
					<div className="vertical-line"></div>
					<div className="cart-summary">
						<div className="cart-items mb20">{`Total Items Added: ${totalCount}`}</div>
						<div className="cart-price mb20">{`Total Price: ${String.fromCodePoint(8377)}${totalPrice}`}</div>
						<Button onClick={handlePlaceOrder}>{PLACE_ORDER}</Button>
					</div>
				</div>
			) : (
				<div className="empty-cart-wrapper">
					<div className="empty-cart">{EMPTY_CART}</div>
					<Button onClick={handleExploreProducts}>{EXPLORE_PRODUCTS}</Button>
				</div>
			)}
		</Wrapper>
	);
};

export default Cart;
