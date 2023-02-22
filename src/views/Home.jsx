import React, { useEffect, useState } from "react";
import FizzBuzz from "../components/FizzBuzz";
import { Link, useParams } from "react-router-dom";
import Fibonacci from "../components/Fibonacci";

function Home(props) {
	const { id: paramsId } = useParams();
	const [id, setId] = useState(1);

	useEffect(() => {
		const hasDigits = /^[^0-9]*$/;
		if (hasDigits.test(paramsId)) return;

		setId(Number(paramsId));
	}, [paramsId]);

	return (
		<div className='page-container Home'>
			<h1>Home</h1>
			<div className='problem-link-container'>
				<Link to={"/1"}>Problem 1</Link>
				<Link to={"/2"}>Problem 2</Link>
			</div>
			{id === 1 && (
				<div className='problem-1'>
					<p>Fizz Buzz Problem:</p>
					<FizzBuzz />
				</div>
			)}
			{id === 2 && (
				<div className='problem-2'>
					<p>Problem 2:</p>
					<Fibonacci />
				</div>
			)}
		</div>
	);
}

export default Home;
