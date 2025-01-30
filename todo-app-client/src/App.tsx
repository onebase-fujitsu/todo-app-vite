import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import NewTask from './pages/NewTask'
import {useContext, useEffect} from "react";
import {TodoContext} from "./context/TodoContext";
import {getTodos} from "./features/TodoApi";

function App() {
    const todoContext = useContext(TodoContext)

    useEffect(() => {
        const fetchData = async () => {
            const response = await getTodos()
            todoContext?.setTodos(response)
        }
        fetchData()
    }, [])


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
