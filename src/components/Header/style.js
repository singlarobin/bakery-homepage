import styled from "styled-components";
import { devices } from "src/utils/constant";

export const Wrapper = styled.div`
	height: 80px;
	background-color: var(--color-1);
	position: sticky;
	top: 0;
	left: 0;
	right: 0;
	z-index: 999;

	.container {
		max-width: var(--container-lg);
		/* width: 100%; */
		height: 80px;
		margin: 0 auto;
		padding: 0px 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.logo {
		width: 80px;
		height: 50px;
		object-fit: contain;

		@media only screen and (${devices.sm}) {
			width: 120px;
		}

		@media only screen and (${devices.md}) {
			width: 200px;
		}
	}
	.menu-wrapper {
		display: flex;
		align-items: center;
	}
	.menu-item {
		color: var(--blue);
		text-transform: uppercase;
		margin: 0 4px;
		font-size: 12px;

		:hover {
			cursor: pointer;
		}

		@media only screen and (min-width: 400px) {
			margin: 0px 8px;
			font-size: 14px;
		}

		@media only screen and (${devices.sm}) {
			margin: 0px 18px;
			font-size: 16px;
		}

		@media only screen and (${devices.md}) {
			letter-spacing: 0.05em;
			margin: 0 18px;
			line-height: 80px;
		}
	}
	.cart-icon {
		position: relative;
		cursor: pointer;
	}
	.cart-count {
		background-color: rgb(240, 90, 120);
		color: #fff;
		border-radius: 7px;
		min-width: 14px;
		height: 14px;
		position: absolute;
		top: 0px;
		left: 100%;
		transform: translate3d(-50%, -50%, 0px);
		font-size: 10px;
		font-weight: 500;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0px 3px;
	}
`;
