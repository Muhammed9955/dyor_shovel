import "./App.css";
import AboutUs from "./pages/AboutUs/AboutUs.page";
import FAQ from "./pages/FAQ/FAQ.page";
import Home from "./pages/Home/Home.page";
import MeetOurCrew from "./pages/MeetTheTeam/MeetTheTeam.page";
import StroePolicies from "./pages/StroePolicies/StorePolicies";
import Testimonials from "./pages/Testimonials/Testimonials.page";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutUs" component={AboutUs} />
          <Route exact path="/stroePolicies" component={StroePolicies} />
          <Route exact path="/testimonials" component={Testimonials} />
          <Route exact path="/meetOurCrew" component={MeetOurCrew} />
          <Route exact path="/faq" component={FAQ} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
