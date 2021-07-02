import "./App.css";
import Layout from "./components/layout/layout";
import { Route, Switch } from "react-router-dom";
import MainContent from "./components/container/main-content";
import "bootstrap/dist/css/bootstrap.min.css";
import MainLokasi from "./components/container/main-lokasi";
import MainInfo from "./components/container/main-info";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={MainContent} />
        <Route path="/lokasi" component={MainLokasi} />
        <Route path="/info" component={MainInfo} />
      </Switch>
    </Layout>
  );
}

export default App;
