import "./App.css";
import Landing from "./landing/Landing";
import PageNotFound from "./errors/pageNotFound";
import Navbar from "./Navbar";
import CreateUnoGame from "./uno/CreateUnoGame";
import UnoGame from "./uno/UnoGame";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Navbar></Navbar>
            <Switch>
                <Route exact path="/">
                    <Landing></Landing>
                </Route>
                <Route exact path="/create-uno-game">
                    <CreateUnoGame></CreateUnoGame>
                </Route>
                <Route path="/uno-game">
                    <UnoGame></UnoGame>
                </Route>
                <Route path="*">
                    <PageNotFound></PageNotFound>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
