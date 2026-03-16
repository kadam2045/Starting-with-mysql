const dbConnection = require("../utils/db-connection");

const getEntries = (req, res) => {
  const fetchStudentsQuery = `SELECT * FROM students`;
  dbConnection.execute(fetchStudentsQuery, (err, result) => {
    if (err) {
      console.log("error while fetching", err);
      res.status(500).json({ message: "error while fetching" });
      dbConnection.end();
      return;
    }
    res.status(200).json({ message: result });
  });
};
const addEntries = (req, res) => {
  const { name, email, password } = req.body;
  const insertQuery = `INSERT INTO students (name, email, password) VALUES (?, ?, ?)`;

  dbConnection.execute(insertQuery, [name, email, password], (err) => {
    if (err) {
      console.log("error while inserting", err);
      res.status(500).json({ message: "error while inserting" });
      dbConnection.end();
      return;
    }
    res.status(200).json({ message: `inserted ${name} and ${email}` });
  });
};

const updateEntries = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const updateQuery = `UPDATE students SET name = ? , email = ? WHERE id = ?`;

  dbConnection.execute(updateQuery, [name, email, id], (err, result) => {
    if (err) {
      console.log("error while updating", err);
      res.status(500).json({ message: "error while updating" });
      dbConnection.end();
      return;
    }

    if (result.affectedRows === 0) {
      res.status(404).json({ message: `no student found with id ${id}` });
      dbConnection.end();
      return;
    }

    res.status(200).json({ message: `student updated successfully` });
  });
};

const deleteEntries = (req, res) => {
  const { id } = req.params;
  const deleteQuery = `DELETE FROM buses WHERE id = ?`;

  dbConnection.execute(deleteQuery, [id], (err, result) => {
    if (err) {
      console.log("error while deleting", err);
      res.status(500).json({ message: "error while  deleteing" });
      dbConnection.end();
      return;
    }

    if (result.affectedRows === 0) {
      res.status(404).json({ message: `no student found with id ${id}` });
      dbConnection.end();
      return;
    }
    res
      .status(200)
      .json({ message: `student with id ${id} deleted successfully` });
  });
};

module.exports = {
  addEntries,
  updateEntries,
  deleteEntries,
  getEntries,
};
