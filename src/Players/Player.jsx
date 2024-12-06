import PlayerHead from ".//PlayerHead.jsx";

function Player () {
	return (

	<div id = "game">
			<PlayerHead initialPlayer="Player 1" symbol = "0"/>
			<PlayerHead initialPlayer="Player 2" symbol = "X"/>
			<PlayerHead initialPlayer="Player 3" symbol = "Y"/>
			<PlayerHead initialPlayer="Player 4" symbol = "Z"/>
	</div>
	)
}

export default Player;