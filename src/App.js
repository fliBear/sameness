import "./App.css";
import Landing from "./landing/Landing";
import PageNotFound from "./errors/pageNotFound";
import Navbar from "./Navbar";
import CreateUnoGame from "./uno/CreateUnoGame";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Navbar></Navbar>
            <Switch>
                <Route exact path="/">
                    <Landing></Landing>
                </Route>
                <Route path="/create-uno-game">
                    <CreateUnoGame></CreateUnoGame>
                </Route>
                <Route path="*">
                    <PageNotFound></PageNotFound>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
