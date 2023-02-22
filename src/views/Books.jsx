import React from "react";
import { useParams } from "react-router-dom";

function Books(props) {
	const { id } = useParams();
	return (
		<div className='page-container Books'>
			<h1>Book #{id}</h1>
		</div>
	);
}

export default Books;
