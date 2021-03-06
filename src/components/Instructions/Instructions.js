import React, { Component } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Button from "react-bootstrap/Button";
import EditIcon from "@material-ui/icons/Edit";

class Instructions extends Component {
  render() {
    return (
      <div>
        <br />
        <center>
          <h1>Instructions for Application Use</h1>
          <br />
        </center>
        <center>
          <Paper
            elevation={5}
            style={{ width: "80%", overflow: "scroll", marginBottom: "5%" }}
          >
            <div>
              <br />

              <br />
              <div style={{ textAlign: "left", paddingLeft: "5%" }}>
                <u>
                  <h2>Student Account Creation</h2>
                </u>
                1. After collecting information from new students, an Admin will
                add new students to the database from the Admin Homepage via the{" "}
                <Button variant="success">Add New Student</Button> button.
                <br />
                2. Once the student is successfully created (will appear in
                Student List on Homepage), an email will automatically be sent
                out to the student with their login information which is:
                <br />
                &emsp; &emsp; *email used upon LCF signup
                <br />
                &emsp; &emsp; *temporary password created by Admin when creating
                new student account
                <br />
                &emsp; OR this can presented to the student in person. <br />
                &emsp;
                <i>
                  Students should be reminded to check their spam folder for
                  this email as it may be marked as spam initially.
                </i>
                <br />
                3. Once the student logs into their account, they will be able
                to change their password by clicking the "Reset Password" tab
                and entering a new password.
                <br />
                &emsp; (Make sure the student double checks that their new
                password works).
                <br />
                4. The Admin can change a student's information at any time by
                clicking the{" "}
                <Button variant="warning">
                  <EditIcon></EditIcon>
                </Button>{" "}
                button found in the row of the student on the Admin Homepage.
                <br />
                5. The Admin can also change a student's status from "active" to
                "inactive" and vice versa via the Change Status column found on
                the Admin Homepage.
                <br />
                &emsp; Students who are inactive in the database can still log
                into their account but will not be able to make entries.
              </div>
              <br />
              <br />
              <div style={{ textAlign: "left", paddingLeft: "5%" }}>
                <u>
                  <h2>Student Makes an Entry</h2>
                </u>
                6. Once a student is ready to make their entry for the Pay
                Period (i.e. reflecting on the last two week school period),
                they will login and click "Make an Entry" from their navbar.
                <br />
                &emsp;They will be met with a form for them to fill out
                cataloging their activity the past two weeks.
                <br />
                &emsp; NOTE: Students should only make an entry once they have
                completed the two weeks of school within that pay period.
                <br />
                &emsp; Filling out an entry early will result in the{" "}
                <b>
                  <i>
                    student not being able to make another entry for that pay
                    period.
                  </i>
                </b>
                <br />
                &emsp; The Admin will be able to review entries and see if
                students submit BEFORE they should (i.e. before they have
                finished school for that pay period).
              </div>
              <br />
              <br />
              <div style={{ textAlign: "left", paddingLeft: "5%" }}>
                <u>
                  <h2>Admin Duties/Run Payroll</h2>
                </u>
                7. Once all entries for that pay period are entered, the Admin
                can review all entries submitted by clicking the tab "Current
                Entries".
                <br />
                &emsp; If they find something wrong with an entry, the Admin can
                click the{" "}
                <Button variant="warning">
                  <EditIcon></EditIcon>
                </Button>{" "}
                button in the row that needs changing.
                <br />
                8. If all entries look good, the Admin can click the{" "}
                <Button variant="success">Run Report</Button> button at the top
                of the page to run the calculations behind the scenes.
                <br />
                &emsp; This will bring the Admin to a new page.
                <br />
                9. Here the Admin can review the calculations made by the
                built-in logic and figure out how much each student is getting
                paid.
                <br />
                &emsp; If the numbers look wrong or an error is spotted, the
                Admin can click the <Button variant="danger">
                  Cancel
                </Button>{" "}
                button on the bottom to move back to the entry list and correct
                it.
                <br />
                10.Otherwise, if the final calculated number for each student
                looks good, the Admin can click{" "}
                <Button variant="success">Confirm Report</Button> to push
                everything to the Past Reports Page.
                <br />
                &emsp; NOTE: Once entries are pushed to Past Reports they{" "}
                <b>CANNOT be removed</b>. This discourages tampering of past
                data.
                <br />
                &emsp; If an error is indeed made and is not caught before the
                check is sent out, the Admin will have to reconcile the amount
                manually.
                <br />
              </div>
              <br />
              <br />
              <div style={{ textAlign: "left", paddingLeft: "5%" }}>
                <u>
                  <h2>Past Entries/History</h2>
                </u>
                The purpose of the past entries on the student's account is to
                allow them to reflect on their past entries as well as have a
                record of their past paychecks.
                <br />
                If students have questions on their past entries or their past
                paychecks, they should contact an Admin to discuss.
              </div>
              <br />
              <br />
              <div style={{ textAlign: "left", paddingLeft: "5%" }}>
                <u>
                  <h2> Creating New Deductions/Charges</h2>
                </u>
                If an Admin wishes to add a new charge to a specific student's
                account, they can use the "Create New Deduction" tab found in
                their navbar.
                <br />
                This will prompt the Admin to fill out a form detailing things
                like:
                <br />
                &emsp;*Which student is being charged
                <br />
                &emsp;*The name and description of the charge
                <br />
                &emsp;*The charge amount ($)
                <br />
                Once these are all filled in, the Admin simply presses the{" "}
                <Button variant="success">Create New Charge</Button> button to
                add that charge to the student's account. <br />A record of such
                charges made can be found via the "Past Deductions" tab in the
                navbar.
                <br />
                Please note that these charges are automatically taken out of
                the student's paycheck for the next pay period.
                <br />
                An outstanding balance will remain if the amount of funds going
                to student does not fully cover the charge amount.
              </div>
              <br />
              <br />
              <div style={{ textAlign: "left", paddingLeft: "5%" }}>
                <u>
                  <h2> Password Resets</h2>
                </u>
                If a password reset is needed by a student, they can use the
                "Forgot Password" button found on the login page to get an email
                sent to their email on file. <br />
                Otherwise they will contact an Admin. The Admin will confirm the
                student's credentials (name, LCF ID) and reset their password manually.
                <br />
                This new password can then be given to the student so that they
                can login and change their password to a password they will
                better remember.
                <br />
                Admins also have the ability to reset their own password if they
                so choose via the Reset Password tab in the navbar.
              </div>
              <br />
              <br />
            </div>
          </Paper>
        </center>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  admin: state.admin.adminlist,
});

export default connect(mapStateToProps)(Instructions);
