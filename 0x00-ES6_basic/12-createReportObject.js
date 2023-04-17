/* a function named createReportObject whose parameter, employeesList,
is the return value of the previous function createEmployeesObject. */

export default function createReportObject(...employeesList) {
    const self = this;

    self.getNumberOfDepartments = (dictionary) => dictionary.length;

    return {
        "allEmployees" : employeesList
    };
}