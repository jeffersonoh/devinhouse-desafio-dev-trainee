import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Agendamentos from './components/Agendamentos'
import Exames from './components/Exames'
import Clientes from './components/Clientes'

function App () {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/agendamentos' component={Agendamentos} />
        <Route path='/clientes' component={Clientes} />
        <Route path='/exames' component={Exames} />
      </Switch>
    </Router>
  )
}

export default App
