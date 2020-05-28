import React from 'react';
import Header from './components/Header'
import Films from './components/Films'
import { Container } from './components/styleComponent/Container'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


//Redux
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Container>
          <Switch>
            <Route path="/" component={Films} />
            <Route exact path="/genre" componet={Films} />
          </Switch>
        </Container>
      </Provider>
    </Router>
  );
}

export default App;
