Array.prototype.min = function(comparable = (a,b) => a - b) {
  let i = 0;
  let j = 1;
  let min = this.length ? this[i] : -Infinity;
  while(j < this.length) {
    if(comparable(this[i],this[j]) >= 0) {
      min = this[j];
      i = j;
    }
    j++;
  }
  return min;
}
Array.prototype.max = function(comparable = (a,b) => a - b) {
  let i = 0;
  let j = 1;
  let max = this.length ? this[i] : Infinity;
  while(j < this.length) {
    if(comparable(this[i],this[j]) <= 0) {
      max = this[j];
      i = j;
    }
    j++;
  }
  return max;
}
const list = [1,2,3,4,5].reverse();
console.log(list);

const users = [{
  name: 'Amit Singh',
  age: 27,
},
{
  name: 'Sumit Singh',
  age: 21,
},
{
  name: 'Lucky Singh',
  age: 24,
},
{
  name: 'Yadav Singh',
  age: 18,
},
{
  name: 'Pandit Singh',
  age: 31,
}];

console.log(users.max((u1,u2) => u1.age - u2.age));