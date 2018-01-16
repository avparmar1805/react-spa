import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from "./components/home";
import Car from "./components/car";
import Book from "./components/book";
import BookDetailsPage from "./components/bookDetails";
import About from "./components/about";
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import * as bookActions from './actions/bookActions';

const store = configureStore();
store.dispatch(bookActions.fetchBooks());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/cars" component={Car} />
                    <Route exact path="/books" component={Book} />
                    <Route path="/books/:id" component={BookDetailsPage} />
                    <Route path="/about" component={About} />
                </Switch>
            </App>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
