import React, { useState } from "react";
import InputTextBox from "./InputTextBox";
import { fibonacci } from "../services/utils";
import ResultsPanel from "./ResultsPanel";

function Fibonacci(props) {
	const [fibX, setFibX] = useState(0);
	const [fibY, setFibY] = useState(0);
	const [fibZ, setFibZ] = useState(0);
	const [sequence, setSequence] = useState([]);
	const handleChangeX = ({ currentTarget }) => {
		setFibX(Number(currentTarget.value));
	};
	const handleChangeY = ({ currentTarget }) => {
		setFibY(Number(currentTarget.value));
	};
	const handleChangeZ = ({ currentTarget }) => {
		setFibZ(Number(currentTarget.value));
	};
	const handleFormSubmit = (e) => {
		e.preventDefault();
		setSequence(fibonacci(fibX, fibY, fibZ));
	};

	return (
		<div className='Fib'>
			<ResultsPanel list={sequence} />
			<form>
				<InputTextBox
					type='number'
					label='Enter the index of the last number in the sequence'
					id='fib-x'
					value={fibX}
					handleChange={handleChangeX}
				/>
				<InputTextBox
					type='number'
					label='Enter the value of Y'
					id='fib-y'
					value={fibY}
					handleChange={handleChangeY}
				/>
				<InputTextBox
					type='number'
					label='Enter the value of Z'
					id='fib-z'
					value={fibZ}
					handleChange={handleChangeZ}
				/>
				<button onClick={handleFormSubmit} className='clickable'>
					Submit
				</button>
			</form>
		</div>
	);
}

export default Fibonacci;
