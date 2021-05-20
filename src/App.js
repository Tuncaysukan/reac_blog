import Home from "./pages/home/Home";
import TopBar from "./Component/TopBar/TopBar";
import Single from "./pages/single/single";
import Write from "./pages/write/write";
import Settings from "./pages/Settings/Settings";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  const user=false;
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/register" >
         { user ? <Home />:<Register />}
        </Route>
        <Route exact path="/login" >
          {user ? <Home /> : <Login />}
        </Route>
        <Route exact path="/write" >
          {user ? <Write /> : <Register />}
        </Route>
        <Route exact path="/settings" >
          {user ? <Settings /> : <Register />}
         </Route>
        <Route exact path="/post/:postId" >
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
