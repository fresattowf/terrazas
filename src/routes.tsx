import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Onboarding from "./pages/Onboarding";

export function Routes() {
  return (
    // <Router basename="/nome-da-pasta">
    <Router basename="/">
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Onboarding} />
      </Switch>
    </Router>
  );
}
