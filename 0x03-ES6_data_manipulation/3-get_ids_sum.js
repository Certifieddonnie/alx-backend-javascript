export default function getStudentIdsSum(list) {
  return list.reduce((total, obj) => total + obj.id, 0);
}
