export default function getListStudents() {
  const student1 = new Set();
  const student2 = new Set();
  const student3 = new Set();
  student1.add({ id: 1, firstName: 'Guillaume', location: 'San Francisco' });
  student2.add({ id: 2, firstName: 'James', location: 'Columbia' });
  student3.add({ id: 5, firstName: 'Serena', location: 'San Francisco' });

  return [...student1, ...student2, ...student3];
}
