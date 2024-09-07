import React, { useState } from "react";


	 

const Home = () => {
	
	const [task, setTask] = useState("");
	const [list, setList] = useState([]);


	return (
		<div className="text-center">
			<input type="text" onChange= {(e)=> setTask(e.target.value)} />
			<button onClick= {()=> setList([...list, [task]])}>Add to list</button>

			<ul>
				{list.map((entry,index) =>
				{return <li key={index}> {entry}</li>}
				)}
			</ul>
		</div>
	);
};

export default Home;
