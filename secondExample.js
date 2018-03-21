logGrades('Eric','Benson','B+','B','B-');


function logGrades(first, last, mathGrade, englishGrade, musicGrade){
  first = first || 'firstname';
  last = last || 'lastname';
  mathGrade = mathGrade || 'N/A';
  englishGrade = englishGrade || 'N/A';
  musicGrade = musicGrade || 'N/A';
  
    console.log(`
      ${first} ${last} is a great student. 
      He/she has a ${mathGrade} in math.
      He/she has a ${englishGrade} in English.
      He/she has a ${musicGrade} in music
    `);
} 