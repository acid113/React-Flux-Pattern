import React from "react";
import * as ColorAppActions from "../actions/ColorAppActions";

const ButtonComponent = () => {
	const onButtonClick = (colorName) => {
		console.log(`inside ButtonComponent.onButtonClick() color change to : ${colorName}`);
		ColorAppActions.ChangeColor(colorName);
	};

	const onResetButtonClick = () => {
		ColorAppActions.ResetColor();
	};

	return (
		<>
			<button type="button" className="color-button" onClick={() => onButtonClick("red")}>
				Red
			</button>
			<button type="button" className="color-button" onClick={() => onButtonClick("blue")}>
				Blue
			</button>
			<button type="button" className="color-button" onClick={() => onButtonClick("black")}>
				Black
			</button>
			<button type="button" className="color-button" onClick={() => onResetButtonClick()}>
				Reset
			</button>
		</>
	);
};

export default ButtonComponent;
