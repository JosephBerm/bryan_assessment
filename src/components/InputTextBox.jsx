import React from "react";

function InputTextBox({ type, label, id, value, handleChange }) {
	return (
		<div className='InputTextBox'>
			<label htmlFor={id}>{label}</label>
			<input type={type} id={id} value={value} onChange={(e) => handleChange(e)} />
		</div>
	);
}

export default InputTextBox;
