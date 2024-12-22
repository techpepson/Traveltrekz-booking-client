import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/config/store.config";
import { Theme } from "@radix-ui/themes";
import { AuthProvider } from "./context/AuthContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Provider store={store}>
        <Theme accentColor="blue">
          <App />
        </Theme>
      </Provider>
    </Router>
  </StrictMode>
);
