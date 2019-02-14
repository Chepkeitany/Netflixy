import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import DevTools from "./DevTools";
import StyledContainer from "../components/StyledContainer";

const Root = () => {
    return (
        <Provider store={store}>
            <div>
                <StyledContainer>
                    <DevTools />
                </StyledContainer>
            </div>
        </Provider>
    )
}

export default Root;