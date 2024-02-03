import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { GoogleOAuthProvider } from '@react-oauth/google';
// For Redux
import { PersistGate } from "redux-persist/integration/react";
import { Store, persistor } from "./Redux/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <PersistGate loading={null} persistor={persistor}>
      <GoogleOAuthProvider clientId="329620575621-v54qd8b32lei37p5f5uh1tcjjbso07ak.apps.googleusercontent.com">
        <React.StrictMode>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </React.StrictMode>
      </GoogleOAuthProvider>
    </PersistGate>
  </Provider>
);
