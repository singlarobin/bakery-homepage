import styled from "styled-components";
import { devices } from "src/utils/constant";

export const Wrapper = styled.div`
	width: 100%;
	height: inherit;
	margin: 0 auto;
	overflow-y: auto;
	.banner {
		width: 100%;
		height: 200px;
		text-align: center;
		color: #fff;
		background-position: center;
		background-size: cover;

		@media only screen and (${devices.sm}) {
			height: 250px;
			background-size: cover;
		}

		@media only screen and (${devices.lg}) {
			height: 320px;
		}
	}
	.heading {
		font-size: 28px;
		font-weight: 800;
		padding-top: 40px;
		margin: 0;

		@media only screen and (${devices.sm}) {
			font-size: 32px;
		}

		@media only screen and (${devices.lg}) {
			font-size: 44px;
		}
	}
	.sort-section {
		padding: 0 20px;

		@media only screen and (${devices.sm}) {
			padding: 0 40px;
		}
	}
	.dropdown {
		width: 50%;
		min-width: 250px;
		max-width: 400px;

		@media only screen and (${devices.sm}) {
			min-width: 300px;
		}
	}
	.all-product-wrapper {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		margin: 0px auto;

		padding: 0 20px;

		@media only screen and (${devices.sm}) {
			padding: 0 40px;
		}
	}
	.product-box {
		margin: 20px 20px 0px 0px;
		background-color: var(--color-1);
		border: 1px solid var(--color-1);
		transition: transform 0.2s;

		:hover {
			transform: scale(0.9);
			cursor: pointer;
		}

		img {
			width: 250px;
			height: 250px;
			object-fit: contain;

			@media only screen and (${devices.md}) {
				width: 300px;
				height: 300px;
			}
		}
		.product-info {
			border-top: 0.5px solid var(--color-blue);
			height: 80px;
			padding: 12px 10px 0px;
			color: var(--color-blue);
		}
		.product-name {
			font-size: 14px;
			font-weight: 600;
			margin-bottom: 5px;

			@media only screen and (${devices.sm}) {
				font-size: 16px;
				font-weight: 700;
			}
		}
		.product-price {
			font-size: 12px;
			@media only screen and (${devices.sm}) {
				font-size: 14px;
			}
		}
	}
`;
