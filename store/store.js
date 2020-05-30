import {createStore , applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import {createLogger} from "redux-logger";

import {rootSaga} from "../sagas/index";
import rootReducer from "../reducers/index";

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        applyMiddleware(
            sagaMiddleware,
            createLogger(),
        ),
    );

    sagaMiddleware.run(rootSaga);
    
    return store;
};  

export default configureStore;





