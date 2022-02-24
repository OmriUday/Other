const data = ["Hello", "World"];
const number1 = 5;
const number2 = 6;
const string = "I love React!";

const Exe2_2 = () => {
	return (
		<div>
			<p>
				{data[0]} {data[1]}
			</p>
			<p>
				{number1} + {number2} = {number1 + number2}
			</p>
			<p>The string's length is {string.length}</p>
		</div>
	);
};
export default Exe2_2;