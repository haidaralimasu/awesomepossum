import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Components/Home";
import { ChainId, DAppProvider } from "@usedapp/core";
const config = {
  readOnlyChainId: ChainId.Rinkeby,
  readOnlyUrls: {
    [ChainId.Rinkeby]:
      "https://rinkeby.infura.io/v3/70ced43c56d248f18566ebe01e2d9fbe",
  },
  supportedChains: [ChainId.Rinkeby],
};

function App() {
  return (
    <DAppProvider config={config}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        toastStyle={{ backgroundColor: "black" }}
        toastClassName="dark-toast"
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <Home />
          </Route>
        </Switch>
      </Router>
    </DAppProvider>
  );
}

export default App;
