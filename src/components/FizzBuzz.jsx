import React, { useEffect, useState } from "react";
import { fizzBuzz } from "../services/utils";
import InputTextBox from "./InputTextBox";
import ResultsPanel from "./ResultsPanel";

function FizzBuzz(props) {
	const [num1, setNum1] = useState(0);
	const [num2, setNum2] = useState(0);
	const [word1, setWord1] = useState("");
	const [word2, setWord2] = useState("");
	const [fbArr, setFBArr] = useState([]);

	const handleNum1Change = ({ currentTarget }) => {
		setNum1(Number(currentTarget.value));
	};

	const handleNum2Change = ({ currentTarget }) => {
		setNum2(Number(currentTarget.value));
	};

	const handleWord1Change = ({ currentTarget }) => {
		setWord1(currentTarget.value);
	};

	const handleWord2Change = ({ currentTarget }) => {
		setWord2(currentTarget.value);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		setFBArr(fizzBuzz(num1, num2, word1, word2));
	};
	return (
		<div className='FizzBuzz'>
			<ResultsPanel list={fbArr} />
			<form>
				<InputTextBox
					type='number'
					id='num1'
					label='Number 1'
					value={num1}
					handleChange={handleNum1Change}
				/>
				<InputTextBox
					type='number'
					id='num2'
					label='Number 2'
					value={num2}
					handleChange={handleNum2Change}
				/>
				<InputTextBox
					type='text'
					id='word1'
					label='Word 1'
					value={word1}
					handleChange={handleWord1Change}
				/>
				<InputTextBox
					type='text'
					id='word2'
					label='Word 2'
					value={word2}
					handleChange={handleWord2Change}
				/>

				<button className='clickable' onClick={handleFormSubmit}>
					Submit
				</button>
			</form>
		</div>
	);
}
export default FizzBuzz;
