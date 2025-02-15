function sortMapByValue(map) {
  const sortedEntries = [...map.entries()].sort((a, b) => a[1].localeCompare(b[1]));
  return new Map(sortedEntries);
}
module.exports=sortMapByValue;