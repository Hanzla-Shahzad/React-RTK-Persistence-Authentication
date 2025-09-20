import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store/persistStore.jsx";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading="Loading..." persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
