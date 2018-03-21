//Spread properties

let a = 1;
let b = 2;
let c = 3;
let x = {d:4, e:5, f:6};

let obj = {a,b,c, ...x};

// console.log('obj', obj);


//lets take it even further

let myFinalFour = {
  south: 'Virginia',
  west: 'Michigan',
  east: 'Villanova',
  midwest: 'Michigan St'
}

let disruption = {
  south: 'Kentucky',
  farNorth: 'Alaska'
}

let extended = {...myFinalFour, ...disruption};

console.log(extended);

//we can now extend objects natively without underscore or lodash!
