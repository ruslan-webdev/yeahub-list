import { Provider } from "react-redux";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./styles/index.css";
import { router } from "./providers";
import store from "./providers/store/AppStore";

const rootElement = document.getElementById("root") as HTMLElement | null;

if (!rootElement) {
  throw new Error("Root not found in document!");
}

const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);