var obj = {name: 'Sam', age: 20}
function removeProperty(obj, key) {
delete obj.age;
delete obj.name;
return obj;
}
removeProperty(obj, 'name');
console.log(obj.name);
