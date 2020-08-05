import React, {Component}  from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import MUITable from '../MUITable/MUITable';
import moment from "moment";



class AdminHome extends Component {


componentDidMount () {
  this.props.dispatch({
    type: 'GET_STUDENTS'
  });

   this.props.dispatch({
     type: 'GET_ADMIN'
   });

  this.props.dispatch({
    type: 'FETCH_ENTRIES_FOR_ADMIN'
  })
}

  render() {
    return (
      <div>
      
        {this.props.user.role === "admin" && (
          <div className="navbuttonscontainer">
            <Link to="/addstudent">
              <Button variant="outline-primary">Add Student</Button>
            </Link>{" "}
            <Link to="/updatestudent">
              <Button variant="outline-primary">Update Student</Button>
            </Link>{" "}
          </div>
        )}

        {/*PLEASE NOTE: instead of start date, we want to show latest activity on this table */}
        {/*This will be tied to whenever a student logs in, it will do a put on that column to show thier latest login */}
        <MUITable
          data={this.props.students
            .filter(
              (entry) =>
                entry.first_name &&
                entry.last_name &&
                entry.grade &&
                entry.grad_year &&
                entry.school_attend &&
                entry.lcf_id &&
                moment(entry.lcf_start_date).format("MMMM Do YYYY") &&
                entry.student_email &&
                entry.password &&
                entry.pif_amount
            )
            .map((entry, index) => [
              entry.first_name,
              entry.last_name,
              Number(entry.grade),
              entry.grad_year,
              entry.school_attend,
              entry.lcf_id,
              moment(entry.lcf_start_date).format("MMMM Do YYYY"), //This will change "last login" at some point
              entry.student_email,
              //entry.password,
              entry.pif_amount,
            ])}
          title={"LCF Student List"}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  students: state.students.studentlist,
});

export default connect(mapStateToProps)(AdminHome);
