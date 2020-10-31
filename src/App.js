import React, { useState, useEffect } from "react";
import "./assets/tailwind/tailwind.output.css";
// import "./assets/tailwind/bulma-debug.css";
import "font-awesome/css/font-awesome.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import photoProfile from "./assets/images/profile.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home, Contact } from "./containers/pages/";

const App = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    console.log("Nav ", showNav);
  }, [showNav]);

  return (
    <Router>
      <div class="block lg:flex">
        <nav className="lg:hidden flex items-center justify-between flex-wrap p-4 bg-orange-400">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <svg
              class="fill-current h-6 w-6 lg:h-8 lg:w-8 mr-2"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
            <span className="font-semibold md:text-lg lg:text-xl text-md tracking-tight">
              Syarip Mas'ud
            </span>
          </div>
          <div className="block lg:hidden">
            <button
              className="flex items-center py-3 px-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white focus:outline-none focus:shadow-outline"
              onClick={() => setShowNav(!showNav)}
            >
              <svg
                class="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className={`w-full ${
              showNav ? "block" : "hidden"
            } flex-grow lg:flex lg:items-center lg:w-auto`}
          >
            <div className="text-sm lg:flex-grow">
              <Link onClick={() => setShowNav(false)}
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                to="/"
              >
                Home
              </Link>
              <Link onClick={() => setShowNav(false)}
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                to="/about"
              >
                About
              </Link>
              <Link onClick={() => setShowNav(false)}
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                to="/portfolio"
              >
                Portfolio
              </Link>
              <Link onClick={() => setShowNav(false)}
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                to="/contact"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
        <aside className="hidden lg:flex flex-col items-center lg:w-2/12 bg-orange-400 h-screen">
          <div className="mt-10">
            <img
              src={photoProfile}
              className="h-32 w-32 object-cover object-center rounded-full border-2 border-gray-200"
              alt=""
            />
          </div>
          <div className="text-sm text-center mt-8">
            <Link className="block text-teal-700 hover:text-white mr-4" to="/">
              Home
            </Link>
            <Link
              className="block text-teal-700 hover:text-white mr-4"
              to="/about"
            >
              About
            </Link>
            <Link
              className="block text-teal-700 hover:text-white mr-4"
              to="/portfolio"
            >
              Portfolio
            </Link>
            <Link
              className="block text-teal-700 hover:text-white mr-4"
              to="/contact"
            >
              Contact
            </Link>
          </div>
        </aside>
        <main onClick={() => setShowNav(false)} className="w-full ">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

const About = () => {
  return <div>About</div>;
};
const Portfolio = () => {
  return <div>Portfolio</div>;
};
export default App;
