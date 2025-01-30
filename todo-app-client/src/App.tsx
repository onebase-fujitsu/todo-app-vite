import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact render={() => <Home />} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App