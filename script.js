const name = "Adeola Idowu";
const courses = ['HTML','CSS', 'JavaScript'];
const sentence = `My name is ${name} and I am taking ${courses[0]}, ${courses[1]} and ${courses[2]}`;

for(let i = 1; i <= 200; i++){
  if(i % 2 !== 0){
    console.log(i);
  }
}

console.log(sentence);