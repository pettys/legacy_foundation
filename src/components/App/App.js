import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import { connect } from "react-redux";

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import AboutPage from "../AboutPage/AboutPage";
import UserPage from "../UserPage/UserPage";
import InfoPage from "../InfoPage/InfoPage";
import MakeEntry from "../MakeEntry/MakeEntry";
import PastStudentEntries from "../PastStudentEntries/PastStudentEntries";

import "./App.css";
import PastAdminReports from "../PastAdminReports/PastAdminReports";
import AddStudent from '../AdminHome/AddStudent';
import UpdateStudent from '../AdminHome/UpdateStudent';
import StudentEntries from '../AdminHome/StudentEntries';
import AdminUpdateEntry from '../AdminHome/AdminUpdateEntry';
import AddAdmin from '../AdminHome/AddAdmin';



class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_USER" });
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route exact path="/about" component={AboutPage} />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}

            <ProtectedRoute exact path="/home" component={UserPage} />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute exact path="/info" component={InfoPage} />
            <ProtectedRoute exact path="/makeentry" component={MakeEntry} />
            <ProtectedRoute
              exact
              path="/paststudententries"
              component={PastStudentEntries}
            />
            <ProtectedRoute
              exact
              path="/pastadminreports"
              component={PastAdminReports}
            />
            <ProtectedRoute exact path="/addstudent" component={AddStudent}/>
            <ProtectedRoute exact path="/updatestudent" component={UpdateStudent}/>
             <ProtectedRoute exact path="/totalstudententries" component={StudentEntries}/>
             <ProtectedRoute exact path="/adminentryupdate" component={AdminUpdateEntry}/>
             <ProtectedRoute exact path= "/adminusers" component={AddAdmin}/>

           
           

            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(App);
