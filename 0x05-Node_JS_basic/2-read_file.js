var fs = require('fs');

function countStudents(path) {
  const students = {}
  try {
    data = fs.readFileSync(path, 'utf8');
    lines = data.split('\n');
    for (const x in lines) {
      if (lines[x]) {
        filter = lines[x].split(',');
        students[filter[0]] = filter[3]
      }
      filter = [];
    }
    console.log("Number of students: " + Object.keys(students).length);
    for (const key in students) {
      // Need to figure out how to parse the fields aspect
      // thought of creating a fields dict or array for a checker.
    }
  } catch (error) {
    throw Error('Cannot load the database');
  }
};


module.exports = countStudents;
