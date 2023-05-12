import React from "react";
import Select from "react-select";
import { Wrapper } from "./style";

const Dropdown = (props) => {
	const {
		label = "",
		value,
		options = [],
		placeholder = "Select...",
		isClearable = false,
		isSearchable = true,
		onChange = () => {},
		className = "",
	} = props;

	return (
		<Wrapper>
			<div className="label">{label}</div>
			<Select
				value={value}
				placeholder={placeholder}
				options={options}
				onChange={onChange}
				className={`${className}`}
				isClearable={isClearable}
				isSearchable={isSearchable}
                {...props}
			/>
		</Wrapper>
	);
};

export default Dropdown;
