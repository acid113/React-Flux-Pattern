import React, {useState, useEffect} from "react";
import ColorAppStore from "../stores/ColorAppStore";

const ColorComponent = () => {
	const [color, setColor] = useState(ColorAppStore.getActiveColor());

	const onUpdateColor = () => {
		console.log("inside ColorComponent.onUpdateColor()");
		setColor(ColorAppStore.getActiveColor());
	};

	const onResetColor = () => {
		console.log("inside ColorComponent.onResetColor()");
		const tempColor = ColorAppStore.getActiveColor();
		setColor(tempColor);
	};

	useEffect(() => {
		console.log("inside ColorComponent().useEffect(), setting event listeners");

		ColorAppStore.addChangeListener(onUpdateColor);
		ColorAppStore.addResetChangeListener(onResetColor);
		return () => {
			ColorAppStore.removeChangeListener(onUpdateColor);
			ColorAppStore.removeResetChangeListener(onResetColor);
		};
	}, []);

	return (
		<>
			<div className="color-container" style={{backgroundColor: color}}></div>
		</>
	);
};

export default ColorComponent;
