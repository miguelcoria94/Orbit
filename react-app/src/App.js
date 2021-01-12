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
import Dashboard from "./components/Dashboard";
import Transfers from "./components/Transfers"
import { Redirect } from "react-router-dom";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState("")
  const [currentUserId, setCurrentUserId] = useState("")

  useEffect(() => {
    (async() => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
        setCurrentUser(user.username)
        setCurrentUserId(user.id);
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      {authenticated ? "" : <NavBar />}
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
          {authenticated ? <Redirect to="/dashboard" /> : ""}
          <Home
            authenticate={authenticate}
            setAuthenticated={setAuthenticated}
            currentUser={currentUser}
          />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <ProtectedRoute
          path="/dashboard"
          exact={true}
          authenticated={authenticated}
        >
          <Dashboard
            authenticate={authenticate}
            setAuthenticated={setAuthenticated}
            currentUser={currentUser}
            currentUserId={currentUserId}
          />
        </ProtectedRoute>
        <ProtectedRoute
          path="/transfers"
          exact={true}
          authenticated={authenticated}
        >
          <Transfers
            authenticate={authenticate}
            setAuthenticated={setAuthenticated}
            currentUser={currentUser}
            currentUserId={currentUserId}
          />
        </ProtectedRoute>
        <ProtectedRoute
          path="/virtual-card"
          exact={true}
          authenticated={authenticated}
        >
          <Transfers />
        </ProtectedRoute>
        <ProtectedRoute
          path="/transactions"
          exact={true}
          authenticated={authenticated}
        >
          <Transfers />
        </ProtectedRoute>
        <ProtectedRoute
          path="/goals"
          exact={true}
          authenticated={authenticated}
        >
          <Transfers />
        </ProtectedRoute>
        <ProtectedRoute
          path="/report-a-bug"
          exact={true}
          authenticated={authenticated}
        >
          <Transfers />
        </ProtectedRoute>
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
