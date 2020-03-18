import AppDispatcher from "../dispatcher/Dispatcher";
import {EventEmitter} from "events";
import * as ColorAppActions from "../actions/ColorAppActions";
import Constants from "../constants/EventConstants";

let _activeColor = "";

class ColorAppStore extends EventEmitter {
    constructor(props) {
        super(props);
        _activeColor = "lightgrey";
    }

    handleActions = (action) => {
        console.log(`inside ColorAppStore.handleActions(), heard action type: ${action.type} `);
        console.log(action);
        switch (action.type) {
            case ColorAppActions.COLOR_APP_ACTIONS.CHANGE_COLOR: {
                _activeColor = action.value;
                this.emit(Constants.COLOR_STORED_UPDATED);
                break;
            }

            case ColorAppActions.COLOR_APP_ACTIONS.RESET_COLOR: {
                _activeColor = "white";
                this.emit(Constants.COLOR_STORED_RESET);
                break;
            }

            default:
        }
    }

    addChangeListener = (callback) => {
        this.on(Constants.COLOR_STORED_UPDATED, callback);
    }

    addResetChangeListener = (callback) => {
        this.on(Constants.COLOR_STORED_RESET, callback);
    }

    removeChangeListener = (callback) => {
        this.removeListener(Constants.COLOR_STORED_UPDATED, callback);
    }

    removeResetChangeListener = (callback) => {
        this.removeListener(Constants.COLOR_STORED_RESET, callback);
    }

    getActiveColor = () => {
        // * somehow this runs 2x when called from component
        console.log(`inside ColorAppStore.getActiveColor(): ${_activeColor}`);
        return _activeColor;
    }
}

const ColorAppStoreInstance = new ColorAppStore();
AppDispatcher.register(ColorAppStoreInstance.handleActions.bind(ColorAppStoreInstance));
export default ColorAppStoreInstance;
