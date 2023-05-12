import React from "react"
import { useNavigate } from "react-router-dom";
import Button from "src/UiComponent/Button";
import { ERROR_MSG, BACK_TO_HOME } from "./constant";
import { Wrapper } from "./style";

const ErrorPage = () => {
    const navigate = useNavigate();

    const handleBackToHome = () => navigate('/');
    return <Wrapper>
        <div className="error-wrapper">
					<div className="error-msg">{ERROR_MSG}</div>
					<Button onClick={handleBackToHome}>{BACK_TO_HOME}</Button>
				</div>
    </Wrapper>
}

export default ErrorPage;