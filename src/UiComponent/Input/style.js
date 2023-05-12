import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;

	.input-wrapper {
		flex: 1 1;
	}
	.label {
		color: var(--color-blue);
		margin-bottom: 4px;
	}

	input,
	textarea {
		width: 100%;
		height: 40px;
		padding: 0px 12px;
		border-radius: 6px;
		border: 1px solid var(--color-1);
		outline: none;
		color: var(--color-blue);
        margin-left: -12px;
        margin-right: -12px;
	}
    textarea {
        resize: none;
        height: 70px;
        padding: 10px 12px;
    }
`;
