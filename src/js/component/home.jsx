import React, { useState } from "react";
// tasks left: 
//x only on hover
//enter to add to list
//number total items on list
//style


	 

const Home = () => {
	
	const [task, setTask] = useState("");
	const [list, setList] = useState([]);

	function removeTask(index) {
		var newList = [];
		list.forEach(e => {
			if(e !== list[index])
			{newList =([...newList, e]);
				console.log(newList);
			}
		});
		 
		 setList (newList);
	}

	function enterFunc(event) {
		let mykey = event.key;
		if (mykey == "Enter") { 
			setList([...list, [task]]);
		}
	  }

	return (
	<body className="mt-5">
		<h2 className="text-center ">My Todos</h2>
		<div className="inputLine text-center mb-2">
			<input className="bg-light border border-light" id="taskInput" type="text" onChange= {(e)=> setTask(e.target.value)}  onKeyDown={(Event)=> enterFunc(Event)} placeholder="What do you need to do?"/>
			
		</div>
		<div className="text-center">
			<ul className="text-center p-0" >
				{list.map((entry,index) =>
					{return <li key={index} className="bg-light border border-secondary"> {entry}
					<button onClick= {()=> removeTask(index)} className="ms-3 btn text-center badge rounded-pill bg-secondary xBtn">X</button>
					</li>}
					)
				}
				<li>{list.length} items left</li>
			</ul>
		</div>
		
		</body>
	);
};

export default Home;
