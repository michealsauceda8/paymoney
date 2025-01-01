import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PaymentForm from './components/PaymentForm';
import SuccessPage from './components/SuccessPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={PaymentForm} />
        <Route path="/success" component={SuccessPage} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
