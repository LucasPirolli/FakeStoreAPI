import React from "react";
import ReactDOM from "react-dom/client";
import FakeStore from "./components/FakeStore";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18next";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <I18nextProvider i18n={i18n}>
    <FakeStore />
  </I18nextProvider>
);
