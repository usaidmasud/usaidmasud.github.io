import "./assets/tailwind/tailwind.output.css";
import Contact from "./containers/pages/Contact";
import "font-awesome/css/font-awesome.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Sidebar from "./components/organisms/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/pages/Home";

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <div className="w-3/12 h-screen bg-orange-400">
          <Sidebar />
        </div>
        <div className="flex-1 flex overflow-hidden">
          <div class="flex-1 overflow-y-scroll">
            <Switch>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
