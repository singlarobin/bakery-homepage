import styled from "styled-components";

export const Wrapper = styled.div`
	.label {
		color: var(--color-blue);
		margin-bottom: 4px;
	}
	.select__control {
		height: 40px;
		border-radius: 6px;
		color: #000;
		border: 1px solid var(--color-1);
	}
	.select__menu {
		z-index: 10;
	}
	.select__indicator-separator {
		opacity: 0;
	}
`;
