import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import NewTask from './pages/NewTask'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/newTask" exact render={() => <NewTask />} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
