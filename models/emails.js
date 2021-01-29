const { query } = require("../db/index");

/*-----------------------Comment-----------------------*/
/*-----------POST: Email Sub------------*/
async function subEmail(value) {
  console.log("this is value in emails: ", value);
  const res = await query(
    `
    INSERT INTO emails(
        sub, uid)
    VALUES
        ($1, $2)
    RETURNING *
    `,
    [value.sub, value.uid]
  );
  return res.rows[0];
}

/*-----------PATCH: Email Sub------------*/
async function patchSubEmail(value, uid) {
  console.log("this is comment id: ", uid);
  const res = await query(
    `UPDATE emails
      SET sub = COALESCE($1, sub),
      uid = COALESCE($2, uid)
      WHERE uid = ${uid}
      `,
    [value.sub, value.uid]
  );
  return res;
}

/*-----------PATCH: Email Sub------------*/
async function gemtEmailSub() {
  const res = await query(`SELECT * FROM emails`);
  return res.rows;
}

module.exports = {
  subEmail,
  patchSubEmail,
  gemtEmailSub,
};

// SELECT *
// FROM Events
// LEFT JOIN users
// ON Events.uid = users.id
