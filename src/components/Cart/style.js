import styled from "styled-components";
import { devices } from "src/utils/constant";

export const Wrapper = styled.div`
	/* max-width: var(--container); */
	width: 100%;
	margin: 0px auto;
	padding: 60px 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow-y: auto;

	.cart-wrapper {
		width: inherit;
		height: 100%;
		display: flex;
		justify-content: center;
		flex-direction: column;

		@media only screen and (${devices.md}) {
			flex-direction: row;
		}
	}
	.product-list {
		flex-basis: 60%;
		padding-top: 20px;
	}
	.product-box {
		display: flex;
		justify-content: center;
		border: 1px solid var(--color-1);
		padding: 20px;
		margin-bottom: 20px;
		position: relative;
	}
	.product-image {
		flex-basis: 30%;
		width: 100%;
		border: 1px solid var(--color-1);
		background-color: var(--color-1);
		img {
			width: inherit;
			height: 200px;
			object-fit: contain;
		}
	}

	.vertical-line {
		background-color: var(--color-1);
		width: 1px;
		height: inherit;
		margin: 0px 20px;
		display: none;

		@media only screen and (${devices.md}) {
			display: block;
		}
	}

	.product-info {
		padding-left: 12px;
		flex-basis: 70%;
		border-left: 0.5px solid var(--color-1);

		.name {
			font-size: 16px;
			font-weight: 400;
			margin-bottom: 10px;

			@media only screen and (${devices.md}) {
				font-size: 24px;
				font-weight: 500;
			}
		}
		.price {
			font-size: 12px;
			font-weight: 300;
			margin-bottom: 10px;
			@media only screen and (${devices.md}) {
				font-size: 16px;
				font-weight: 400;
			}
		}
	}
	.product-count {
		display: flex;
		align-items: baseline;
	}
	.count-input {
		margin-left: 12px;
		padding: 8px 12px;
		border: 1px solid var(--color-1);
		outline: none;
	}
	.delete-icon-wrapper {
		position: absolute;
		top: 10px;
		right: 10px;
		cursor: pointer;
	}
	.cart-summary {
		flex-basis: 40%;
		padding-top: 20px;
		color: var(--color-blue);
		font-size: 18px;
	}

	.cart-items {
		font-size: 18px;
	}
	.cart-price {
		font-size: 14px;
	}
	.cart-button {
		background-color: var(--color-blue);
		color: #fff;
		border: 0;
		border-radius: 5px;
		padding: 10px 20px;
		margin-bottom: 5px;
		letter-spacing: 0.05em;
		cursor: pointer;
	}
	.empty-cart-wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.empty-cart {
		font-size: 32px;
		color: var(--color-dark-red);
		margin-bottom: 48px;
	}
`;
