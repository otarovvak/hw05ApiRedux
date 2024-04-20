import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./Users";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App></App>
  </Provider>
);
