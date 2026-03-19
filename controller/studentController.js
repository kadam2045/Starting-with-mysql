const dbConnection = require("../utils/db-connection");
const Student = require("../models/student");
const IdentityCard = require("../models/IdentiyCard");
const Posts = require("../models/Posts");

const getEntries = async (req, res) => {
  try {
    const students = await Student.findAll();
    if (!students) {
      res.status(404).json({ message: "Students not found" });
      return;
    }
    res
      .status(200)
      .json({ message: "Students fetched successfully", data: students });
  } catch (error) {
    console.log("error while fetching", error);
    res.status(500).json({ message: "error while fetching" });
  }
};

const getStudentsByID = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findOne({
      where: {
        id: id,
      },
    });

    if (!student) {
      res.status(404).json({ message: "student not found" });
      return;
    }
    res.status(200).json({ data: student });
  } catch (error) {
    console.log("error while fetching", error);
    res.status(500).json({ message: "error while fetching" });
  }
};
const addEntries = async (req, res) => {
  try {
    const { name, email } = req.body;
    const student = await Student.create({
      name: name,
      email: email,
    });
    res.status(200).json({ message: student });
  } catch (error) {
    console.log("error while inserting", error);
    res.status(500).json({ message: "error while inserting" });
  }

  // const insertQuery = `INSERT INTO students (name, email, password) VALUES (?, ?, ?)`;

  // dbConnection.execute(insertQuery, [name, email, password], (err) => {
  //   if (err) {
  //     console.log("error while inserting", err);
  //     res.status(500).json({ message: "error while inserting" });
  //     dbConnection.end();
  //     return;
  //   }
  //   res.status(200).json({ message: `inserted ${name} and ${email}` });
  // });
};

const updateEntries = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const student = await Student.findByPk(id);
    if (!student) {
      res.status(404).json({ message: "Student not found" });
      return;
    }

    student.name = name;
    student.email = email;

    await student.save();

    res.status(200).json({ data: student });
  } catch (error) {
    console.log("error while updating", error);
    res.status(500).json({ message: "error while updating" });
  }
};

const deleteEntries = async (req, res) => {
  try {
    const { id } = req.params;

    const student = await Student.destroy({
      where: {
        id: id,
      },
    });
    if (!student) {
      res.status(404).json({ message: "Student not found" });
      return;
    }

    res.status(201).json({ message: " Student deleted Sucessfully" });
  } catch (error) {
    console.log("error while deleting", error);
    res.status(500).json({ message: "error while deleting" });
  }
};

const createStudentWithIdentityCard = async (req, res) => {
  try {
    const student = await Student.create(req.body.student);

    const identityCard = await IdentityCard.create({
      ...req.body.identityCard,
      StudentId: student.id,
    });

    res.status(200).json({ student, identityCard });
  } catch (error) {
    console.log("error while creating", error);
    res.status(500).json({ message: "error while creating" });
  }
};

const createPostsWithStudent = async (req, res) => {
  try {
    //payload
    // {
    //   "student": {
    //     "name": "John Doe",
    //     "email": "[EMAIL_ADDRESS]"
    //   },
    //   "posts": {
    //     "title": "John Doe",
    //     "content": "John Doe"
    //   }
    // }
    const student = await Student.create(req.body.student);
    const posts = await Posts.create({
      ...req.body.posts,
      StudentId: student.id,
    });
    res.status(200).json({ student, posts });
  } catch (error) {
    console.log("error while creating", error);
    res.status(500).json({ message: "error while creating" });
  }
};

module.exports = {
  addEntries,
  updateEntries,
  deleteEntries,
  getEntries,
  getStudentsByID,
  createStudentWithIdentityCard,
  createPostsWithStudent,
};
