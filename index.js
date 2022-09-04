const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => 
  tutorials.map(obj => obj.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' '))

// const titleCased = () => tutorials.map(updateCase);

// function updateCase(obj){
// obj = obj.split(' ');
//   for(i = 0; i < obj.length; i++){
//     obj[i] = obj[i][0].toUpperCase() + obj[i].slice(1);  
//   }
//  return obj.join(' ');
// }


  
  