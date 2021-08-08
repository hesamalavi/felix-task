import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Target from './components/Target';

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/target">
                        <Target />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
