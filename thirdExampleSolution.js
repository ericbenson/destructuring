//Rest properties
let mapping = {a:1, b:2, c:3, d:4, e:5, f:6};

let { a, b, ...x } = mapping;

console.log('a', a);
console.log('b', b);
// console.log('x', x);

//question: what is x?
//answer: the 24th letter of the alphabet

unknownParameters(1,2,3,4,5,6,7,8);

function unknownParameters(a,b,...x){
  console.log('a', a);
  console.log('b', b);
  // console.log('x', x);

  //question: what is x now?
  //answer: still the 24th letter of the alphabet
}
