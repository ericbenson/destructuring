let student = {
  first: 'Eric', 
  last: 'Benson', 
  grades: {
    math: 'B+',
    english: 'B', 
    music: 'B-'
  }
}

// let first = student.first;
// let last = student.last;
// let math = student.grades.math;
// let english = student.grades.english;
// let music = student.grades.music;

// let { first, last, grades:{math}, grades:{english}, grades:{music} } = student;
let { first, last, grades} = student;
let { math: ma, english: e, music:mu } = grades;


console.log(`${first} ${last} has a ${ma} in math, a ${e} in English and a ${mu} in Music`);