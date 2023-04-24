export default function getListStudentIds(list) {
  if (!Array.isArray(list)) {
    return [];
  }

  function getid(item) {
    return item.id;
  }
  return list.map(getid);
}
