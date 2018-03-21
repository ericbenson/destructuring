logGrades({
  first: 'Eric',
  last: 'Benson',
  mathGrade: 'B+',
  englishGrade: 'B'
});

//more easily tell what values you need in the initial object
//order no longer matters with configuration object
//default values can be easily set
function logGrades({first = 'firstname', last = 'lastname', mathGrade = 'N/A', englishGrade = 'N/A', musicGrade = 'N/A'}){
    console.log(`
      ${first} ${last} is a great student. 
      He/she has a ${mathGrade} in math.
      He/she has a ${englishGrade} in English.
      He/she has a ${musicGrade} in music
    `);
} 