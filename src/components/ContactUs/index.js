import React, { useEffect, useState } from "react";
import { deepClone } from "src/utils/helper";
import Input from "src/UiComponent/Input";
import Button from "src/UiComponent/Button";
import { isEmptyObject } from "src/utils/helper";
import { INPUT_FIELD_OPTIONS, CONTACT_US, SUBMIT } from "./constant";
import { Wrapper } from "./style";

const ContactUs = (props) => {
	const [inputObj, setInptuObj] = useState({});

	useEffect(() => {
		const inputValObj = INPUT_FIELD_OPTIONS.reduce((accum, obj) => {
			return { ...accum,[obj.key]: "" };
		}, {});
		setInptuObj(inputValObj);

		return () => {
			setInptuObj({});
		};
	}, []);

	const onChange = (key) => (e) => {
		let updatedObj = deepClone(inputObj);
		updatedObj = {
			...updatedObj,
			[key]: e.target.value,
		};
		setInptuObj(updatedObj);
	};

    const onClick = () => {
        console.log("Submit Payload>>", inputObj);
        alert("Check Console for payload!!")
    }

	return (
		<Wrapper>
			<div className="box-wrapper">
				<div className="box">
					<div className="heading mb20">{CONTACT_US}</div>
					<div className="input-box mb20">
						{INPUT_FIELD_OPTIONS.map((obj) => (
							<Input key={obj.key} {...obj} value={!isEmptyObject(inputObj) ? inputObj[obj.key] : ""} onChange={onChange(obj.key)} />
						))}
					</div>
					<Button onClick={onClick}>{SUBMIT}</Button>
				</div>
			</div>
		</Wrapper>
	);
};

export default ContactUs;
