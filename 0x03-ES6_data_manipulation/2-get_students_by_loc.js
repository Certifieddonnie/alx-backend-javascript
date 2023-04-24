export default function getStudentsByLocation(list, string) {
  return list.filter((student) => student.location === string);
}
