import React from 'react'
import Componuts from './Componuts';

function S() {
 
    const[serach, setSearch] = useState("");
	
	const filterd = Componuts.filter((obj) =>{
	  obj.name.toLowerCase().includes(serach.toLowerCase())
	});
	
	return (
	<>

	</>
	);
}

export default S