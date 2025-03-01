import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
