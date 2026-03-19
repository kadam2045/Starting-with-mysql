const Student = require("./student");
const IdentityCard = require("./IdentiyCard");
const Department = require("./Department");
const Posts = require("./Posts");

//one to one
Student.hasOne(IdentityCard);
IdentityCard.belongsTo(Student);

//one to many
Department.hasMany(Student);
Student.belongsTo(Department);

//one to many
Student.hasMany(Posts);
Posts.belongsTo(Student);

module.exports = { Student, IdentityCard, Department, Posts };
