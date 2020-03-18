import AppDispatcher from "../dispatcher/Dispatcher";

export const COLOR_APP_ACTIONS = {
    CHANGE_COLOR: "ChangeColor",
    RESET_COLOR: "ResetColor"
}

export const ChangeColor = (colorName) => {
    console.log(`inside ColorAppAction.ChangeColor(): ${colorName}`);
    AppDispatcher.dispatch({
        type: COLOR_APP_ACTIONS.CHANGE_COLOR,
        value: colorName
    });
}

export const ResetColor = () => {
    console.log(`inside ColorAppAction.ResetColor()`);
    AppDispatcher.dispatch({
        type: COLOR_APP_ACTIONS.RESET_COLOR
    });
}