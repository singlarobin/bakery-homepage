import styled from "styled-components";
import { devices } from "src/utils/constant";

export const Wrapper = styled.div`
	width: 100%;
	height: inherit;
	margin: 0 auto;
	overflow-y: auto;
	.homepage-image {
		width: 100%;
		height: 400px;
		text-align: center;
		color: #fff;
		background-position: center;
		background-size: contain;

        @media only screen and (${devices.sm}) {
			background-size: cover;
		}
	}

	.product-section {
		display: flex;
		align-items: center;
		justify-content: center;
        flex-direction: column;
        @media only screen and (${devices.sm}) {
			flex-direction: row;
		}
	}
	.product-image {
		width: 100%;
		height: 400px;
		background-position: center;
		background-size: cover;

        @media only screen and (${devices.sm}) {
			background-size: cover;
            flex-basis: 50%;
		}

	}
	.product-info {
		display: flex;
		justify-content: center;
		align-items: center;
        width: 100%;
		
		height: 400px;
		background-color: var(--color-1);

        @media only screen and (${devices.sm}) {
            flex-basis: 50%;
		}
	}
`;
