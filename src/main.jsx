import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
import "./index.css";
import { store } from "./store.js";

createRoot(document.getElementById("root")).render(
        <StrictMode>
                <Provider store={store}>
                        <App />
                        <ToastContainer position="top-center" />
                </Provider>
        </StrictMode>
);
