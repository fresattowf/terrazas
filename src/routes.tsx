import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Onboarding from "./pages/Onboarding";

export function Routes() {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/onboarding" component={Onboarding} />
      </Switch>
    </Router>
  );
}
