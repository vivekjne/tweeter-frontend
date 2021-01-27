import { ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";
import { extendTheme } from "@chakra-ui/react";
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
  colors: {
    primary: {
      100: "#CB91FE",
      200: "#BA6DFE",
      300: "#AB4CFE",
      400: "#9D2EFE",
      500: "#9013FE",
      600: "#8301F5",
      700: "#7601DC",
      800: "#6A01C6",
      900: "#5F01B2",
    },
  },
};
export const theme = extendTheme({ config });
ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
