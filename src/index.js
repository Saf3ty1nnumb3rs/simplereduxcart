import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import Store from "./Store";
// The Provider is a special type of component.
// The Provider will wrap our App component along with a store that encapsulates
// local states within the App component.

const StoreInstance = Store()

ReactDOM.render(
  <Provider store={StoreInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
