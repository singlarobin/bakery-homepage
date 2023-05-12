import Rect from "react";
import { Wrapper } from "./style";

const Input = (props) => {
    const { label = "", type = "text" } = props;
    return <Wrapper>
       <div className="input-wrapper">
       <div className="label">{label}</div>
        {type === "text" ? <input {...props} /> : <textarea {...props} />}
       </div>
    </Wrapper>
}

export default Input;