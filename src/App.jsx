import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "App.css";
import Index from "pages";
import RhodesianInfoPage from "pages/rhodesian";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/index">
            <Index/>
          </Route>
        </Switch>
        <Switch>
          <Route path="/rhodesian">
            <RhodesianInfoPage/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}



export default App;
