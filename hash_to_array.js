function convertHashToArray(hash) {
  //your code here - sort the keys!
  var array = [];
  for (const key in hash) {
    array.push([key, hash[key]]);
  }
  array.sort();
  return array;
}

var obj = { name: "Jeremy", age: 24, role: "Software Engineer" };
convertHashToArray(obj);
