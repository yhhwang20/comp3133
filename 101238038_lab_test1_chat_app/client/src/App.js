import React from 'react'
import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Auth from './hoc/auth';
import LangdingPage from './screens/LandingScreen'
import LoginPage from './screens/LoginScreen';
import RegisterPage from './screens/RegisterScreen';
import DashboardPage from './screens/DashboardScreen';

function App() {
  return (
    <Router>
      <main className="py-3">
        <Container>
          <Route exact path="/" component={Auth(LangdingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage,false)} />
          <Route exact path="/register" component={Auth(RegisterPage,false)} />
          <Route exact path="/dashboard" component={Auth(DashboardPage,true)} />
        </Container>
      </main>
    </Router>
  );
}

export default App;