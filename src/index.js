import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then((registration) => {
      // 업데이트 발견
      registration.addEventListener("updatefound", () => {
        // 설치 중인 새로운 서비스 워커
        const newServiceWorker = registration.installing;
        console.log("PAPER: New update found!");

        newServiceWorker.addEventListener("statechange", (event) => {
          const state = event.target.state;
          console.log("ComHome: " + state);
          if (state === "installed") {
            // window.alert(
            //   "새로운 업데이트가 발견되었습니다!\n앱을 재시작하면 업데이트가 적용됩니다!"
            // );
          }
        });
      });
    });
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
