import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { worker } from "./mocks/handlers";
import { Provider } from "jotai";

const root = ReactDOM.createRoot(document.getElementById("root")!);

const startWorker = async () => {
  await worker.start({ onUnhandledRequest: "bypass" });
  root.render(
    <React.StrictMode>
      <Provider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
};

startWorker();
