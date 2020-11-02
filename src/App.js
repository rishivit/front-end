import React from 'react';
import 'antd/dist/antd.css';
import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom';

import ErrorPage from './pages/errorpage/errorpage.component';
import LoginPageComponent from './pages/loginpage/loginpage.page';
import RegisterPageComponent from './pages/registerpage/registerpage.page';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selector';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null,
        };
    }

    componentDidMount = () => {
        const { currentUser } = this.props;
        this.setState({
            currentUser,
        });
    };

    render() {
        const { currentUser } = this.state;

        return (
            <div className="App">
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => (currentUser ? <div>Dashboard</div> : <Redirect to="/login"></Redirect>)}
                    ></Route>
                    <Route
                        exact
                        path="/login"
                        render={() => (currentUser ? <Redirect to="/"></Redirect> : <LoginPageComponent />)}
                    ></Route>
                    <Route
                        exact
                        path="/register"
                        render={() => (currentUser ? <Redirect to="/"></Redirect> : <RegisterPageComponent />)}
                    ></Route>
                    <Route path="*" component={ErrorPage}></Route>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
