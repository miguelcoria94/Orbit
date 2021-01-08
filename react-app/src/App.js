import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { authenticate } from "./services/auth";
import About from "./components/static_pages/About"
import Contact from "./components/static_pages/Contact"
import NoMatch from "./components/static_pages/NoMatch"
import Home from "./components/static_pages/Home"

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async() => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar
        setAuthenticated={setAuthenticated}
        authenticated={authenticated}
      />
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <Route path="/" exact={true} authenticated={authenticated}>
            <Home
              authenticate={authenticate}
              setAuthenticated={setAuthenticated}
            />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <ProtectedRoute path="/dashboard" exact={true} authenticate={authenticate}>
        </ProtectedRoute>
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
