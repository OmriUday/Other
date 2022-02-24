import qTitle from "./qTitle.components";
import qInput from "./qInput.components";
const question = ({ title, inputType, inputValue }) => {
	return (
		<div>
			<qTitle text={title} />
			<qInput type={inputType} value={inputValue} />
		</div>
	);
};
export default question;