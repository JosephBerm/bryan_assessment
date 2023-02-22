import React from "react";

function ResultsPanel({ list }) {
	return (
		<div className='results-container'>
			{list.length &&
				list.map((item, index) => (
					<div className='answer' key={index}>
						{item}
					</div>
				))}
		</div>
	);
}

export default ResultsPanel;
