import { createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import rootReducer from "../reducers";
import api from "../middleware/api";

const configureStore = initialState => {
    const store = createStore(rootReducer, initialState, applyMiddleware(api, logger));

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            store.replaceReducer(rootReducer)
        });
    };
    return store;
}

export default configureStore;