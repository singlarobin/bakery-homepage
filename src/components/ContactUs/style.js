import styled from "styled-components";
import { devices } from "src/utils/constant";

export const Wrapper = styled.div`
	max-width: var(--container);
	width: 100%;
	height: inherit;
	margin: 0 auto;
	padding: 0 20px;
	.box-wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.box {
		background-color: var(--color-1);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 30px;
		border-radius: 5px;
		width: 40%;
        max-width: 500px;

        @media only screen and (${devices.xs}) {
			min-width: 250px;
		}
		@media only screen and (${devices.md}) {
			min-width: 380px;
		}
	}
	.heading {
		font-size: 24px;
		font-weight: 600;
		color: var(--color-blue);
	}
    .input-box {
        width: 100%;
        flex-basis: 100%;
    }
`;
