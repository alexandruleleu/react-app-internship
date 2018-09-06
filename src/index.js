import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import store, { history } from "./main/store";
import App from "./main/app";

//import "sanitize.css/sanitize.css";
import "./assets/less/index.css";

const target = document.getElementById("root");

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <App />
            </div>
        </ConnectedRouter>
    </Provider>,
    target,
);
