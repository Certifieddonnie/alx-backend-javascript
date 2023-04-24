/* eslint-disable no-param-reassign */
/* eslint-disable no-prototype-builtins */
export default function updateStudentGradeByCity(list, city, grades) {
  return list
    .filter((obj) => obj.location === city)
    .map((student) => {
      grades.map((studentgrade) => {
        if (studentgrade.studentId === student.id) {
          student.grade = studentgrade.grade;
        }

        if (!student.hasOwnProperty('grade')) {
          student.grade = 'N/A';
        }
        return student;
      });

      return student;
    });
}
