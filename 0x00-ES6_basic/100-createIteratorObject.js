export default function createIteratorObject(report) {
  const arr = [];
  for (const value of Object.values(report.allEmployees)) {
    arr.push(...value);
  }

  return arr;
}
