// name property added to make objects easier to identify
let foo = {name: 'foo'};
let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

console.log(Object.getPrototypeOf(foo));

foo.ancestors = function() {
  let finalArray = [];
  let stopCondition = Object.getPrototypeOf(this);
  while (stopCondition.name !== undefined) {
    finalArray.push(stopCondition.name);
    stopCondition = Object.getPrototypeOf(stopCondition);
  }
  finalArray.push('Object.prototype');
  console.log(finalArray);
};

qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
bar.ancestors();  // returns ['foo', 'Object.prototype']
foo.ancestors();  // returns ['Object.prototype']
