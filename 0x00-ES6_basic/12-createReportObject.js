/* a function named createReportObject whose parameter, employeesList,
is the return value of the previous function createEmployeesObject. */

export default function createReportObject(employeesList) {
  const allEmployees = {};

  for (const [departmentName, employees] of Object.entries(employeesList)) {
    allEmployees[departmentName] = [...employees];
  }

  return {
    allEmployees,
    getNumberOfDepartments() {
      return Object.keys(employeesList).length;
    },
  };
}
