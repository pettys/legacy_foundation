const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { allowAdminOnly, allowAdminOrSelf } = require("../modules/authentication-middleware");

const moment = require('moment');

//This route primarily handles things related to the entry table
//(i.e. entries are the information gathered from students from the "Make Entry" form)

//GET all rows found in the entry table
router.get('/', allowAdminOnly, (req, res) => {
    pool
      .query("SELECT * from entry")
      .then((result) => {
        res.send(result.rows);
      })
      .catch((error) => {
        console.log("Error GET /recommendations", error);
        res.sendStatus(500);
      });
}) //end GET

//GET an entry based off the lcf_id passed in
router.get('/:lcf_id', allowAdminOrSelf, (req, res) => {
  pool
    .query("SELECT * from entry WHERE lcf_id=$1",[req.params.lcf_id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error GET /recommendations", error);
      res.sendStatus(500);
    });
}) //end GET

//POST i.e. make a new entry in the entry table.
router.post("/", allowAdminOrSelf, (req, res) => {
    const entry = req.body;
    let {
      pay_day,
      pass_class,
      gpa,
      lcf_id,
      absent,
      tardy,
      late,
      truant,
      clean_attend,
      detent_hours,
      after_school,
      act_or_job,
      passed_ua,
      current_service_hours,
      hw_rm_attended,
      comments
    } = entry;
    if (entry === undefined) {
      res.sendStatus(400);
      return;
    }

    const date = moment.utc();
    let previous_pay_day;
    if (pay_day) {
      previous_pay_day = moment(pay_day).add(-2, "week").format("YYYY-MM-DD");
    } else {
      previous_pay_day = moment.utc("2020-08-10T00:00:00.000-05");
      pay_day = moment.utc(previous_pay_day).add(2, "week")
      while (date >= pay_day) {
        previous_pay_day = pay_day;
        pay_day = moment(previous_pay_day).add(2, "week");
      }
      pay_day = pay_day.format("YYYY-MM-DD");
      previous_pay_day = previous_pay_day.format("YYYY-MM-DD");
    }

    const queryText = `
      INSERT INTO "entry" (lcf_id, pass_class, pay_day, previous_pay_day, date_submitted, gpa, clean_attend, detent_hours, act_or_job, passed_ua, current_service_hours, hw_rm_attended, comments)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13);`;

    pool
      .query(queryText, [
        lcf_id,
        pass_class,
        pay_day,
        previous_pay_day,
        date,
        gpa,
        clean_attend,
        detent_hours,
        act_or_job,
        passed_ua,
        current_service_hours,
        hw_rm_attended,
        comments,
      ])
      .then(function (result) {
        res.status(201).send(result.rows);
      })
      .catch(function (error) {
        console.log("Sorry, there was an error with your query: ", error);
        res.sendStatus(500); // HTTP SERVER ERROR
      });
}); // end POST


//Delete an entry based off the id of the entry itself
//USED FOR TESTING PURPOSES
//Ideally, entries are not deleted willy nilly
router.delete("/:id", allowAdminOnly, (req, res) => {
  pool
    .query('DELETE FROM entry WHERE id=$1', [req.params.id])
    .then((result) => {
      res.sendStatus(204); //No Content
    })
    .catch((error) => {
      console.log("Error DELETE /api/order", error);
      res.sendStatus(500);
    });
});

module.exports = router;
