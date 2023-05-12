import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
	margin: 0px auto;
	padding: 60px 20px;
	display: flex;
	justify-content: center;
	align-items: center;

    .error-wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.error-msg {
		font-size: 32px;
		color: var(--color-dark-red);
		margin-bottom: 48px;
	}

`