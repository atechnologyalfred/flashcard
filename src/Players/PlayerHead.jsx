import { useState } from 'react';
function PlayerHead ({initialPlayer, symbol}){
const [isSelected, setIsSelected] = useState (false);
const [playerName, isPlayerName] =  useState(initialPlayer);

	function handleSelect() {
		setIsSelected (editing => !editing)
	}
	function handleChange(event) {
		isPlayerName(event.target.value);
		console.log(playerName);
	}
	let display = <li><h3>{playerName}</h3></li>
	if(isSelected) {
		display = 
		<li><input type = 'text' required value = {playerName} onChange = {handleChange}/></li>
	}
	return(
		
		<ul>
			{display}
			<li><h3>{symbol}</h3></li>
			<li><button onClick = {handleSelect}>{isSelected ? 'Save' : 'Edit'}</button></li>
		</ul>

	)
}

export default PlayerHead;