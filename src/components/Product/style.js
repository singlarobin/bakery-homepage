import styled from "styled-components";
import { devices } from "src/utils/constant";

export const Wrapper = styled.div`
	max-width: var(--container);
	height: inherit;
	width: 100%;
	margin: 0px auto;
	padding: 0px 20px;
	overflow-y: auto;
	display: flex;
	justify-content: center;
	align-items: center;

	.product-box {
		width: 100%;
		height: 75%;
		display: flex;
		flex-direction: column;

		@media only screen and (${devices.md}) {
			height: 60%;
			flex-direction: row;
		}

		@media only screen and (${devices.lg}) {
			height: 60%;
		}

		@media only screen and (${devices.xl}) {
			height: 50%;
		}

		.product-image {
			width: 70%;
			display: flex;
			justify-content: center;
			padding: 0px 20px;
			border: 0.5px solid var(--color-1);
			background-color: #fbfbfb;

			@media only screen and (${devices.md}) {
				flex-basis: 50%;
				width: 100%;
			}
		}
		img {
			width: inherit;
			object-fit: contain;
			/* border: 0.5px solid var(--color-1);
			background-color: #fbfbfb; */
		}
		.product-info {
			color: var(--color-blue);
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			flex-basis: 50%;
			flex-grow: 1;

			width: 70%;
			margin-top: 20px;

			@media only screen and (${devices.md}) {
				width: 100%;
				margin-top: 0px;
				padding: 0px 20px;
			}

			.info-wrapper {
				display: flex;
				flex-direction: column;
				flex-grow: 0.5;

				@media only screen and (${devices.md}) {
					flex-grow: 0.75;
				}
			}
			.name {
				font-size: 16px;
				font-weight: 500;
				margin-bottom: 10px;

				@media only screen and (${devices.md}) {
					font-size: 24px;
					font-weight: 600;
				}
			}
			.price {
				font-size: 12px;
				font-weight: 400;
				margin-bottom: 10px;
				@media only screen and (${devices.md}) {
					font-size: 16px;
					font-weight: 500;
				}
			}
			.description {
				font-size: 12px;
				font-weight: 300;
				flex-grow: 1;

				@media only screen and (${devices.md}) {
					font-size: 16px;
				}
			}
			.btn-wrapper {
				flex-grow: 0.5;
				margin-top: 20px;
				@media only screen and (${devices.md}) {
					flex-grow: 0.25;
				}
			}
			.cart-button {
				background-color: var(--color-blue);
				color: #fff;
				border: 0;
				border-radius: 5px;
				padding: 10px 20px;
				margin-bottom: 5px;
				cursor: pointer;
			}
		}
	}
	.product-not-found {
		height: 500px;
		font-size: 32px;
		color: var(--color-dark-red);
	}
`;
