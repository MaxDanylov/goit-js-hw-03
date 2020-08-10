'use strict';
const findBestEmployee = function (employees) {
  const names = Object.keys(employees);
  let answer;
  let name;
  let bestResult = 0;

  for (name of names) {
    if (employees[name] > bestResult) {
      bestResult = employees[name];
      answer = `${name}:${bestResult}`;
    }
  }
  return answer;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
);
console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
);
console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
);
