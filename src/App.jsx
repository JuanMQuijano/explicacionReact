import Index from "pages/index";
import RhodesianInfoPage from "pages/rhodesian";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "styles/estilos.css";
import Layout from "layouts/Layout";
import Bordercollie from "pages/bordercollie";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route path="/rhodesian">
              <RhodesianInfoPage />
            </Route>
            <Route path="/bordercollie">
              <Bordercollie />
            </Route>
            <Route path="/">
              <Index />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
