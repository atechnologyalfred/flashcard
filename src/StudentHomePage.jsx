import data from './data.js';
const checkingData = data.map(datum => datum.content.substring(0, 100));
console.log(checkingData);

function StudentData ({title, content, image}) {
	return( 
		<div className = "sub">

			<img src = {image} />
			<h3>{title}</h3>
			<div className = "list">
			<p>{content}</p>
			</div>
			
		</div>
	)
}

export default function StudentHomePage() {
	return (
		<div id = "container">
			{data.map(datum => <StudentData  key = {datum.title} {...datum} />)}
		</div>
	)

}