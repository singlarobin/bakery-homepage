import React from "react";
import { Wrapper } from "./style";

const Button = (props) => {
    const { children, onClick = () => {}, className = "" } = props;
    return <Wrapper className={className} onClick={onClick}>
        {children}
    </Wrapper>
}

export default Button;