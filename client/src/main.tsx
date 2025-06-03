import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/global/index.scss";
import { BrowserRouter } from "react-router-dom";
import { TimerProvider } from "./provider/contexts/TimerProvider.tsx";
import { UtmProvider } from "./provider/contexts/UtmContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UtmProvider>
        <TimerProvider>
          <App />
        </TimerProvider>
      </UtmProvider>
    </BrowserRouter>
  </React.StrictMode>
);
